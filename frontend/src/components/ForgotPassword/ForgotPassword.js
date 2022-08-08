import React,{ useState } from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import {toast,ToastContainer} from 'react-toastify';
import './ForgotPassword.css';
import axios from 'axios';

function ForgotPassword() {
var [email,setEmail]=useState('');

const handleChange=(e)=>{
    setEmail(e.target.value);
}
  return (
    <div className='forgotPasswordContainerDiv'>
    
    <Paper className='forgotPasswordContainer'>
    <Typography variant="h5">Forgot Password</Typography>
    <br/>
    <br/>
    <div className='emailContainer'>
    <Typography>Enter your email  :</Typography>
    <TextField
    size="small"
    value={email}
    onChange={handleChange} />
<ToastContainer/>
    </div>
    <br/>
    <Button variant="outlined" onClick={()=>{
        axios.post('/api/users/password/forgot',{email:email}).then((result)=>{
          toast.success("reset token successfully sent to your email",{position:toast.POSITION.TOP_CENTER});
        }).catch((err)=>{
          toast.error("user not found",{position:toast.POSITION.TOP_CENTER});
        })
    }}>Send Reset Token</Button>
    </Paper>
    </div>
  )
}

export default ForgotPassword