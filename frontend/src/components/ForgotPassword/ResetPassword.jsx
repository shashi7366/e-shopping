import React,{ useEffect, useState } from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import {toast,ToastContainer} from 'react-toastify';
import { resetPassword } from '../../redux/actions/userAction';
import './ForgotPassword.css';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { RESET_PASSWORD_SUCCESS } from '../../redux/constants/userConstants';




function ResetPassword() {
var navigate=useNavigate();
const CustomToast=({closeToast})=>{
    return <div style={{padding:'5%'}}><Paper sx={{display:'flex',flexDirection:'column'}}>
        <Typography>Password reset successful!</Typography>
        <br/>
        <Button variant="contained" onClick={()=>{
            navigate('/');
        }}>Ok</Button>
    </Paper></div>;
}
var dispatch=useDispatch();
var params=useParams();
var [password,setpassword]=useState('');
var [confirmPassword,setconfirmPassword]=useState('');

const handleChange=(e)=>{
    setpassword(e.target.value);
}

const handleChange1=(e)=>{
    setconfirmPassword(e.target.value);
}

var {user}=useSelector((state)=>{
    return state.user;
})

useEffect(()=>{
    if(user){
        toast.success(<CustomToast/>,{position:toast.POSITION.TOP_CENTER});
    }
})


//   return (
//     <div className='forgotPasswordContainerDiv'>
    
//     <Paper className='forgotPasswordContainer'>
//     <Typography variant="h5">Reset Password</Typography>
//     <br/>
//     <br/>
//     <div className='emailContainer'>
//     <Typography>password  :</Typography>
//     <TextField
//     type="password"
//     size="small"
//     value={password}
//     onChange={handleChange} />
//     </div>
//     <br />
//     <div className='emailContainer'>
//     <Typography>Confirm Password  :</Typography>
//     <TextField
//     type="password"
//     size="small"
//     value={confirmPassword}
//     onChange={handleChange1} />
//     </div>
// <ToastContainer/>
    
//     <br/>
//     <Button  variant="outlined" onClick={()=>{
//         if(password.length<8){

//             toast.error("password must be 8 characters long",{position:toast.POSITION.TOP_CENTER});
//         }
//         else if(password!==confirmPassword){
//             toast.error("password and confirm password doesn't match",{position:toast.POSITION.TOP_CENTER});
//         }
//         else{
//             dispatch(resetPassword(password,confirmPassword,params.token));
//         }
        
//     }}>Send Reset Token</Button>
//     </Paper>
//     </div>
//   )

return <div style={{padding:"5%",display:'flex',flexDirection:"column",alignItems:"center",backgroundColor:"whitesmoke"}}>
    
<Paper elevation={5} sx={{width:"40%",display:"flex",flexDirection:"column",alignItems:"center",padding:"3%",height:"25vmax"}}>
<Typography variant="h5">Reset Password</Typography>
<br/>
<br/>
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
<div style={{display:'flex',alignItems:"center"}}>
<Typography variant="h6" >Password</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<TextField
type="password"
label="your registered email ..."
size="small"
value={password}
onChange={handleChange} />
<ToastContainer/>
</div>
<br/><br/>
<div style={{display:'flex',alignItems:"center"}}>
<Typography variant="h6" >Confirm Password</Typography>&nbsp;&nbsp;&nbsp;
<TextField
type="password"
label="your registered email ..."
size="small"
value={confirmPassword}
onChange={handleChange1} />

</div>
</div>
<br/>
<Button  variant="contained" onClick={()=>{
        if(password.length<8){

             toast.error("password must be 8 characters long",{position:toast.POSITION.TOP_CENTER});
         }
        else if(password!==confirmPassword){
            toast.error("password and confirm password doesn't match",{position:toast.POSITION.TOP_CENTER});
        }
        else{
            dispatch(resetPassword(password,confirmPassword,params.token));
             }}}>Change Password</Button>
</Paper>
</div>
}

export default ResetPassword