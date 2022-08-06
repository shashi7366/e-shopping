import React, { useState,useEffect } from 'react';
import './Header.css';
import { Button, IconButton, Typography, Paper, TextField } from '@mui/material';
import {useSelector} from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import LoggedInButton from '../LoggedInButton/LoggedInButton';
import {useNavigate,createSearchParams,useSearchParams,useLocation} from 'react-router-dom';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  var location=useLocation();
    var [keyword,setKeyword]=useState('');
  const navigate=useNavigate();
  var [searchParams,setSearchParams]=useSearchParams();
 
var {user}=useSelector((state)=>{
  return state.user;
})
  
const callAction=()=>{
  // var link=`/api/products/searchProduct?keyword=${keyword}`;
  // console.log(link);
  
  navigate(`search?keyword=${keyword}`);
}
  
  return (
    <div className='Appbar'>
         <Paper elevation={2} sx={{ display: 'flex', height: '60px', alignItems: 'center',backgroundColor:'#0096FF',justifyContent:"space-between" }}>
                <div style={{display:'flex',width:'70%'}}>
                <Typography variant='h5' component='div' sx={{ flexGrow: 1, margin: '2%' }} onClick={()=>{navigate('/')}}><ShoppingBagIcon />e-Shopping</Typography>
                <TextField
                value={keyword}
                label="search here..."
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    // sx={{width:'50%'}}
                    onChange={(e)=>{
                        setKeyword(e.target.value);
                    }}
                    sx={{borderRadius:'4px',height:'4vmax',margin:'1vmax'}}
                /><IconButton onClick={callAction}><SearchIcon fontSize='large' /></IconButton></div>
                {user?<LoggedInButton user={user} />:<Link to={'/login'}><Typography variant='body1'sx={{color:"white",marginRight:'3vmax'}}>LOGIN</Typography></Link>}
                
            </Paper>

            
    </div>
  )
}

export default Header