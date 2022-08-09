import React,{ useEffect, useState } from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import {toast,ToastContainer} from 'react-toastify';
import { resetPassword } from '../../redux/actions/userAction';
import './ForgotPassword.css';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { RESET_PASSWORD_SUCCESS } from '../../redux/constants/userConstants';
import axios from 'axios';




function ChangePassword() {
var navigate=useNavigate();
const CustomToast=({closeToast})=>{
    return <div style={{padding:'5%'}}><Paper elevation={5} sx={{display:'flex',flexDirection:'column',}}>
        <Typography>Password reset successful!</Typography>
        <br/>
        <Button variant="contained" onClick={()=>{
            navigate('/');
        }}>Ok</Button>
    </Paper></div>;
}
var dispatch=useDispatch();
var params=useParams();
var [oldPassword,setpassword]=useState('');
var [newPassword,setnewPassword]=useState('');
var [confirmPassword,setconfirmPassword]=useState('');

const handleChange=(e)=>{
    setpassword(e.target.value);
}

const handleChange1=(e)=>{
    setnewPassword(e.target.value);
}

const handleChange2=(e)=>{
    setconfirmPassword(e.target.value);
}

var {user}=useSelector((state)=>{
    return state.user;
})

// useEffect(()=>{
//     if(user){
//         toast.success(<CustomToast/>,{position:toast.POSITION.TOP_CENTER});
//     }
// })


  return (
    <div style={{backgroundColor:"whitesmoke",padding:"10%",paddingTop:"5%",display:"flex",justifyContent:"center"}}>
    
    <Paper elevation={4} sx={{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"3%",width:"40%"}}>
    <div style={{display:"flex",justifyContent:"center",width:"100%"}}><Typography variant="h5">Change Password</Typography></div>
    <br/>
    <br/>
    <div className='emailContainer'>
    <Typography>Old password  :</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <TextField
    type="password"
    label="your current password"
    size="small"
    value={oldPassword}
    onChange={handleChange} />
    </div>
    <br />
    <div className='emailContainer'>
    <Typography>New Password  :</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <TextField
    type="password"
    label="new password...."
    size="small"
    value={newPassword}
    onChange={handleChange1} />
    </div>
    <br/>
    <div className='emailContainer'>
    <Typography>Confirm Password  :</Typography>&nbsp;&nbsp;
    <TextField
    label="confirm new password...."
    type="password"
    size="small"
    value={confirmPassword}
    onChange={handleChange2} />
    </div>
<ToastContainer/>
    
    <br/>
    <div style={{display:"flex",justifyContent:"center",width:"100%"}}><Button  variant="outlined" onClick={()=>{
        if(newPassword.length<8){

            toast.error("password must be 8 characters long",{position:toast.POSITION.TOP_CENTER});
        }
        else if(newPassword!==confirmPassword){
            toast.error("password and confirm password doesn't match",{position:toast.POSITION.TOP_CENTER});
        }
        else{
            axios.put('/api/users/password/update',{
                oldPassword:oldPassword,
                newPassword:newPassword,
                confirmPassword:confirmPassword
            }).then((result)=>{
                toast.success(<CustomToast/>,{position:toast.POSITION.TOP_CENTER});
            }).catch((err)=>{
                // console.log(err.response.data.message);
                toast.error(err.response.data.message,{position:toast.POSITION.TOP_CENTER});
            })
        }
        
    }}>Change Password</Button></div>
    </Paper>
    </div>
  )
}

export default ChangePassword;