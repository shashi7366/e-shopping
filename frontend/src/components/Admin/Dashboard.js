import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/actions/productAction';
import { Link, Outlet } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AdminHeader from './AdminHeader';
import LoggedInAdmin from './LoggedInAdmin';

import {getUserDetail} from "../../redux/actions/userAction";
import Footer from '../Footer/Footer';

function Dashboard() {

    const dispatch=useDispatch();
    var {loaded}=useSelector((state)=>{
        return state.user;
    });
    

    return (
        <div>{loaded &&<>
        <Outlet />
        <LoggedInAdmin />
        </>}
            
        </div>
    )
}

export default Dashboard;
{/* <AdminHeader /> */}