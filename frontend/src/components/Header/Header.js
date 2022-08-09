import React, { useState, useEffect } from 'react';
import './Header.css';
import { Button, IconButton, Typography, Paper, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import LoggedInButton from '../LoggedInButton/LoggedInButton';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  var location = useLocation();
  var [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  var [searchParams, setSearchParams] = useSearchParams();

  var { user } = useSelector((state) => {
    return state.user;
  })

  const callAction = () => {
    // var link=`/api/products/searchProduct?keyword=${keyword}`;
    // console.log(link);

    navigate(`search?keyword=${keyword}`);
  }

  var pattern=/admin/;

  return (

    <Paper className="navbar" elevation={2} sx={{backgroundColor:"#3B9AE1"}}>

      {/* <div className='logoAndLogin'>
      <Typography className="iconAndName" variant='h5' component='div' sx={{ flexGrow: 1, margin: '2%' }} onClick={() => { navigate('/') }}><ShoppingBagIcon />e-Shopping</Typography>
      {pattern.test(location.pathname)?<div></div>:<div className='searchBarAndIcon'>
      <TextField
      className="searchBar"
        value={keyword}
        label="search here..."
        id="outlined-size-small"
        defaultValue=""
        size="small"
        // sx={{width:'50%'}}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}

      /><IconButton className="searchIcon" onClick={callAction}><SearchIcon fontSize='large' /></IconButton></div>}
      {user ? <LoggedInButton user={user} /> : <Link to={'/login'}><Typography variant='body1' sx={{ color: "white", marginRight: '3vmax' }}>LOGIN</Typography></Link>}
      </div> */}

      <div>
      <Typography className="iconAndName" ><ShoppingBagIcon/><Link to="/" style={{textDecoration:"none",color:"black"}}><b>e-Shopping</b></Link></Typography>
      </div>

      <div>
      {pattern.test(location.pathname)?<div></div>:<div className='searchBarAndIcon'>
      <input
      className="searchBar"
        value={keyword}
        label="search here..."
        id="outlined-size-small"
        defaultValue=""
        size="small"
        placeholder='search here..'
        // sx={{width:'50%'}}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}/><IconButton className="searchIcon" onClick={callAction}><SearchIcon fontSize='large' /></IconButton></div>}
      </div>


      <div>{user ? <LoggedInButton user={user} /> : <Link to={'/login'}><Typography variant='body1' sx={{ color: "white", marginRight: '3vmax' }}>LOGIN</Typography></Link>}</div>
      
      
      
     

    </Paper>



  )
}

export default Header