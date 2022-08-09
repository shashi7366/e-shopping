import { Button,Paper} from '@mui/material'
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Profile.css'


function Profile() {
    const navigate=useNavigate();
    var {user}=useSelector((state)=>{
        return state.user;
    })
  return (
<div style={{backgroundColor:"whitesmoke",display:"flex",justifyContent:"center",paddingTop:"4%",paddingBottom:"4%"}}>
<Paper elevation={4} sx={{width:"50%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <div className='profileImageDiv'>
        <img
        className='profileImage'
        src="./images/profile.webp" />

        <Button variant='contained' onClick={()=>{navigate('/updateProfile')}}>Edit Profile</Button>
        </div>

        <div className='profileDetailDiv'>
        <div className='profileUsernameDiv'>
        <h2>username:</h2>
            <p>{user.name}</p>
        </div>

        <div className='profileEmailDiv'>
        <h2>email:</h2>
            <p>{user.email}</p>
        </div> 
        <div className='profileActionDiv'>
        <Button variant='contained' onClick={()=>{navigate('/orders')}}>My Orders</Button>
        <br/>
        <br/>
        <Button variant='contained' onClick={()=>{navigate('/password/update')}}>Change Password</Button>
        </div>  
        </div>
    </Paper>
</div>
  )
}

export default Profile