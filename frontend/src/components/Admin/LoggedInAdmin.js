import * as React from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import HistoryIcon from '@mui/icons-material/History';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { logout } from '../../redux/actions/userAction';
import { useSelector,useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';



export default function LoggedInAdmin() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  
  const logoutDispatcher=()=>{
    dispatch(logout());
  }

  const callAddProduct=()=>{
    navigate('addProduct');
  }

  

  const actions = [
    
    { icon: <LogoutIcon />, name: 'Logout',func:logoutDispatcher },
    { icon: <AddIcon />, name: 'Add product',func:callAddProduct }
    
  ];
  return (
    
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<PersonIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.func}
          />
        ))}
      </SpeedDial>
   
  );
}