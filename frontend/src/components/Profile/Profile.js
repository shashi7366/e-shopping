import { Button } from '@mui/material'
import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css'


function Profile() {
    var {user}=useSelector((state)=>{
        return state.user;
    })
  return (
    <div className='profileParentDiv'>
        <div className='profileImageDiv'>
        <img
        className='profileImage'
        src="./images/profile.webp" />

        <Button variant='contained'>Edit Profile</Button>
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
        <Button variant='contained'>My Orders</Button>
        <Button variant='contained'>Change Password</Button>
        </div>  
        </div>
    </div>
  )
}

export default Profile