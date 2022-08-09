import React,{useEffect}from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch,useSelector} from 'react-redux';
import { getAllOrders } from '../../redux/actions/orderAction';
import {Button} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import './DefaultBody.css';

function ViewOrders() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    var {orders,loaded}=useSelector((state)=>{
        return state.orders;
    });

    useEffect(()=>{
        dispatch(getAllOrders())
    },[dispatch])
  return (
    <div style={{minHeight:'100%'}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Order Id</b></TableCell>
            <TableCell align="right"><b>Ordered On</b></TableCell>
            <TableCell align="right"><b>status</b></TableCell>
            <TableCell align="right"><b>Action</b></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {loaded && orders.filter((row)=>{
            return row.orderStatus!="Delivered" && row.orderStatus!="delivered";
          }).map((row) => {
            
           return <TableRow
           className='tableRowAdmin'
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.createdAt.substring(0,10)}</TableCell>
              <TableCell align="right">{row.orderStatus}</TableCell>
              <TableCell align="right"><Button onClick={()=>{navigate(`order/${row._id}`)}}>View Details</Button></TableCell>
              
            </TableRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
  )
}

export default ViewOrders
