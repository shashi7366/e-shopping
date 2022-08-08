import React from 'react';
import {Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {toast,ToastContainer} from 'react-toastify'
import './Footer.css';

function Footer() {
    const navigate=useNavigate();
    var {user}=useSelector((state)=>{
      return state.user;
    });
  return (
    <div className='footerMainDiv'>
    <ToastContainer/>
        <div className='leftFooterDiv'>
            <Typography sx={{color:'white'}} variant="h5">E-Shopping</Typography>
            <Typography sx={{color:'white'}} variant="body">copyright@2022</Typography>
        </div>
        <div className='rightFooterDiv'><Typography variant='body' sx={{color:'white'}} onClick={()=>{
          if(user.role=='admin'){navigate('/admin')}else{toast.error("You don't have admin privillege",{position:toast.POSITION.TOP_CENTER})}}}>admin?</Typography></div>
    </div>
  )
}

export default Footer