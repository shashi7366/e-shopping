import React from 'react';
import './Header.css';
import { Button, IconButton, Typography, Paper, TextField } from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Appbar'>
         <Paper elevation={2} sx={{ display: 'flex', height: '60px', alignItems: 'center',backgroundColor:'#0096FF' }}>
                <Typography variant='h5' component='div' sx={{ flexGrow: 1, marginLeft: '2%' }}><ShoppingBagIcon />e-Shopping</Typography>
                
                <Button variant="contained" color="success" sx={{ marginRight: '2%' }}><Link to={'/login'}><Typography variant='body1'sx={{color:"white"}}>LOGIN</Typography></Link></Button>
                <IconButton sx={{ marginRight: '2%' }}><ShoppingCartIcon fontSize='large' /></IconButton>
            </Paper>

            
    </div>
  )
}

export default Header