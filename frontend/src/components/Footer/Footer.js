import React from 'react';
import {Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import './Footer.css';

function Footer() {
    const navigate=useNavigate();
  return (
    <div className='footerMainDiv'>
        <div className='leftFooterDiv'>
            <Typography sx={{color:'white'}} variant="h5">E-Shopping</Typography>
            <Typography sx={{color:'white'}} variant="body">copyright@2022</Typography>
        </div>
        <div className='rightFooterDiv'><Typography variant='body' sx={{color:'white'}} onClick={()=>{navigate('/admin')}}>admin?</Typography></div>
    </div>
  )
}

export default Footer