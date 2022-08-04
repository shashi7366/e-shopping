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


import * as React from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import HistoryIcon from '@mui/icons-material/History';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { logout } from '../../redux/actions/userAction';
import { useSelector,useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from 'react-router-dom'



export default function LoggedInButton() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  
  const logoutDispatcher=()=>{
    dispatch(logout());
    navigate('/');
  }

  const dummy=()=>{
   console.log("dummy got called");
  }

  const goToCart=()=>{
    navigate('cart');
  }

  const goToProfile=()=>{
    navigate('profile');
  }

  const actions = [
    { icon: <HistoryIcon />, name: 'My order',func:dummy},
    { icon: <AccountCircleIcon />, name: 'Profile',func:goToProfile },
    { icon: <LogoutIcon />, name: 'Logout',func:logoutDispatcher },
    { icon: <ShoppingCartIcon />, name: 'Cart',func:goToCart },
  ];
  return (
    
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<PersonIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.func}
          />
        ))}
      </SpeedDial>
   
  );
}
