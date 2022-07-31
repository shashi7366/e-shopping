import React, { useState,useEffect } from 'react';
import './Header.css';
import { Button, IconButton, Typography, Paper, TextField } from '@mui/material';
import {useSelector} from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import LoggedInButton from '../LoggedInButton/LoggedInButton';

import axios from 'axios';

function Header() {
 
var {user}=useSelector((state)=>{
  return state.user;
})
  
  
  return (
    <div className='Appbar'>
         <Paper elevation={2} sx={{ display: 'flex', height: '60px', alignItems: 'center',backgroundColor:'#0096FF' }}>
                <Typography variant='h5' component='div' sx={{ flexGrow: 1, marginLeft: '2%' }}><ShoppingBagIcon />e-Shopping</Typography>
                
                {user?<LoggedInButton user={user} />:<Link to={'/login'}><Typography variant='body1'sx={{color:"white",marginRight:'3vmax'}}>LOGIN</Typography></Link>}
                
            </Paper>

            
    </div>
  )
}

export default Header