import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button,Paper, Typography } from '@mui/material';
import './navbar.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link,useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {toast,ToastContainer} from 'react-toastify';
import { logout } from '../../redux/actions/userAction';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Navbar() {
    var [toggle,setToggle]=useState(false);
    var [keyword, setKeyword] = useState('');


// imports from react redux store
    const dispatch=useDispatch();
    var {user}=useSelector((state)=>{
        return state.user;
    });

//for navigation
    var navigate=useNavigate();

//Functions for various pop options
const logoutDispatcher=()=>{
    dispatch(logout());
    navigate('/');
    setToggle(!toggle);
  }


  const goToCart=()=>{
    if(user.role=='admin'){
      toast.error("admin dont have access to cart",{position:toast.POSITION.TOP_CENTER});setToggle(!toggle);
    }else{navigate('cart');setToggle(!toggle);}
    
  }

  const goToProfile=()=>{
    navigate('profile');
    setToggle(!toggle);
  }


  const goToMyOrders=()=>{
    navigate('/orders');
    setToggle(!toggle);
  }

  const callAction = () => {
    navigate(`search?keyword=${keyword}`);
  }


  return (
    <Paper className='parentDiv' sx={{backgroundColor:'#3B9AE1'}}>
    <ToastContainer/>
        <div className='firstDiv'>
            <Link to="/" className='logoButton'><ShoppingBagIcon fontSize='large'/><sub><Typography variant="body2">e-Shopping</Typography></sub></Link>
        </div>

        <div className='secondDiv'>
            <input className='searchBar' type="text" placeholder="search..." onChange={(e) => {
          setKeyword(e.target.value);
        }}/><SearchIcon style={{color:"#3B9AE1",backgroundColor:"white",height:"45px",width:"40px",marginTop:"0"}} fontSize="large" onClick={callAction}/>
        </div>

        <div className='thirdDiv'>
            {user?<Button variant="contained" className='loginButton' onClick={()=>{setToggle(!toggle)}}>{user.name}</Button>:<Button sx={{fontSize:'18px'}} variant="contained" onClick={()=>{navigate('/login')}}>LOGIN</Button>}
            {toggle && <Paper className='popup'>
                <div><PersonIcon/><Button  sx={{color:"black"}} onClick={goToProfile}>My Profile</Button></div>
                <div><Button  sx={{color:"black"}} onClick={goToMyOrders}>My Orders</Button></div>
                <div><ShoppingCartIcon/><Button  sx={{color:"black"}} onClick={goToCart}> My Cart</Button></div>
                <div><LogoutIcon/><Button  sx={{color:"black"}} onClick={logoutDispatcher}> Logout</Button></div>
            </Paper>}
        </div>
    </Paper>
  )
}

export default Navbar