import { Button,Paper} from '@mui/material'
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import {toast,ToastContainer} from 'react-toastify'


function Profile() {
    const navigate=useNavigate();
    var {user}=useSelector((state)=>{
        return state.user;
    })
  return (
<div className="profileMainDiv" >
<ToastContainer/>
<Paper className="profilePaperForm" elevation={10} >
        <div className='profileImageDiv'>
        <img
        className='profileImage'
        src="./images/profile.webp" />

        <Button variant='contained' onClick={()=>{navigate('/updateProfile')}}>Edit Profile</Button>
        </div>

        <div className='profileDetailDiv'>
        <div className='profileUsernameDiv'>
        <h2>username:</h2>
            <p style={{fontSize:"20px"}}>{user.name}</p>
        </div>

        <div className='profileEmailDiv'>
        <h2>email:</h2>
            <p className='paragraphEmail'>{user.email}</p>
        </div> 
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
        <Button variant='contained' onClick={()=>{user.role!='admin'?navigate('/orders'):toast.error("you are admin you cant access orders",{position:toast.POSITION.TOP_CENTER})}}>My Orders</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='contained' onClick={()=>{navigate('/password/update')}}>Change Password</Button>
        </div>  
        </div>
    </Paper>
</div>
  )
}

export default Profile