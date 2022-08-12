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
    <div className="forgotPasswordMainDiv">
    
    <Paper className="forgotPasswordFormPaper" elevation={5}>
    <Typography variant="h5">Forgot Password</Typography>
    <br/>
    <br/>
    <div style={{display:'flex',alignItems:"center",justifyContent:"space-between"}}>
    <Typography className="labelTeaxt">Enter your email  :</Typography>
    <TextField
label="your registered email ..."
    size="small"
    value={email}
    onChange={handleChange} />
<ToastContainer/>
    </div>
    <br/>
    <Button variant="contained" onClick={()=>{
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