import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/actions/productAction';
import { Link, Outlet } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AdminHeader from './AdminHeader';

function Dashboard() {

    return (
        <div>
            <AdminHeader />
            <Outlet />
        </div>
    )
}

export default Dashboard