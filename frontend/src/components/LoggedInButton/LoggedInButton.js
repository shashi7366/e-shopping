// import React,{useState} from 'react';
// import {Button, Typography} from '@mui/material';
// import {useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// function LoggedInButton({name}) {
//     var {user}=useSelector((state)=>{
//         return state.user;
//     })
    
//     function action(){
//         console.log('i got called');
//             axios.get('/api/users/logout');
//       window.location.reload();
//     }
//   return (
//     <div>
//     {/* <Button variant='contained' color='success' sx={{width:'8vmax',height:'4vmax',border:'0'}}>
//     <Typography variant='body'>Welcome</Typography>
//     </Button>   */}
//     <select onChange={action} style={{margin:'1vmax',marginRight:'3vmax',color:'black',border:'0'}}>
//     <option value="volvo">{user.name}</option>
//     <option value="saab">view profile</option>
//     <option value="opel">my orders</option>
//     <option value='logout'>logout</option>
//   </select>
//     </div>
//   )
// }

// export default LoggedInButton


import React,{useState} from 'react';
import {Paper,Typography,TextField,MenuItem} from "@mui/material";
import SpeedDial from '@mui/material/SpeedDial';
import HistoryIcon from '@mui/icons-material/History';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { logout } from '../../redux/actions/userAction';
import { useSelector,useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify';



export default function LoggedInButton() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  var [option,setOption]=useState('');
  var {user}=useSelector((state)=>{
    return state.user;
  })
  
  const logoutDispatcher=()=>{
    dispatch(logout());
    navigate('/');
  }

  const dummy=()=>{
   console.log("dummy got called");
  }

  const goToCart=()=>{
    if(user.role=='admin'){
      toast.error("admin dont have access to cart",{position:toast.POSITION.TOP_CENTER});
    }else{navigate('cart');}
    
  }

  const goToProfile=()=>{
    navigate('profile');
  }


  const goToMyCart=()=>{
    navigate('/orders');
  }

const handleChange=(e)=>{
  setOption(e.target.value);
  if(option=="orders"){
    navigate('/orders');
  }
  else if(option=="cart"){
    if(user.role=='admin'){
      toast.error("admin dont have access to cart",{position:toast.POSITION.TOP_CENTER});
    }else{navigate('cart');}
  }

  else if(option=="logout"){
    dispatch(logout());
    navigate('/');
  }
  else{
    navigate('profile');
  }
}

  const actions = [
    { icon: <HistoryIcon />, name: 'My order',func:goToMyCart},
    { icon: <AccountCircleIcon />, name: 'Profile',func:goToProfile },
    { icon: <LogoutIcon />, name: 'Logout',func:logoutDispatcher },
    { icon: <ShoppingCartIcon />, name: 'Cart',func:goToCart },
  ];
  return (
    
      // <SpeedDial
      //   ariaLabel="SpeedDial basic example"
      //   sx={{ position: 'static' }}
      //   icon={<PersonIcon />}
       
      // >
      // <ToastContainer/>
      //   {actions.map((action) => (
      //     <SpeedDialAction
      //       key={action.name}
      //       icon={action.icon}
      //       tooltipTitle={action.name}
      //       onClick={action.func}
      //     />
      //   ))}
      // </SpeedDial>
      <TextField
      select
      label={<PersonIcon/>}
      value={option}
      onChange={handleChange}
     
    >
        <MenuItem key="electronics" value="orders">
          orders
        </MenuItem>

        <MenuItem key="clothing" value="logout">
        logout
        </MenuItem>

        <MenuItem key="profile" value="profile">
        my profile
        </MenuItem>

        <MenuItem key="cart" value="cart">
        cart
        </MenuItem>

     
    </TextField>
  );
}
