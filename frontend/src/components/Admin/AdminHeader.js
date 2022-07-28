import React from 'react';
import { Button, IconButton, Typography, Paper } from '@mui/material';


import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <div><Paper elevation={2} sx={{ display: 'flex', height: '60px', alignItems: 'center',backgroundColor:'#0096FF' }}>
    <Typography variant='h5' component='div' sx={{ flexGrow: 1, marginLeft: '2%' }}><ShoppingBagIcon />e-Shopping</Typography>
    
    <Button variant="contained" color="success" sx={{ marginRight: '2%' }}><Link to={'addProduct'}><Typography variant='body1'sx={{color:"white"}}>Add Product</Typography></Link></Button>
    
</Paper></div>
  )
}

export default AdminHeader