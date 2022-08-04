import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import {useParams,useNavigate, Navigate} from 'react-router-dom';
import { Typography,Paper, Button} from "@mui/material"

function OrderDetails() {
    const params=useParams();
    var [order,setOrder]=useState('');

    if(!order){
        axios.get(`/api/orders/order/${params.id}`).then(({data})=>{
            console.log(data.order);
            setOrder(data.order)
        }).catch((err)=>{
            console.log(err);
        })
    }

    
  return (
    <div>
       {order && <Paper sx={{padding:'2%'}}>
        <Typography variant='h5'>{order._id}</Typography>
        <Typography>Ordered On: {order.createdAt.substring(0,10)}</Typography>
        <Typography>Status: <b>{order.orderStatus}</b></Typography>
        <Typography>Shipping Address:</Typography>
        <p>{order.shippingInfo.address}<br></br>
        {order.shippingInfo.city},{order.shippingInfo.pinCode}
       <br/>
        {order.shippingInfo.phoneNo}
       <br/>
        {order.shippingInfo.state},{order.shippingInfo.country}
        </p>
        <br style={{borderBottom:'5px solid black'}}/>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Product Name</b></TableCell>
            <TableCell align="right"><b>Price</b></TableCell>
            <TableCell align="right"><b>Quantity</b></TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {order.orderItems.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Button onClick={()=>{
    axios.put(`/api/orders/admin/order/${params.id}`,{status:"Shipped"}).then((result)=>{
        window.location.reload();
    }).catch((err)=>{
        console.log(err);
    })
}}>Shipped</Button>

<Button onClick={()=>{
    axios.put(`/api/orders/admin/order/${params.id}`,{status:"Delivered"}).then((result)=>{
        window.location.reload();
    }).catch((err)=>{
        console.log(err);
    })
}}>Delivered</Button>
       </Paper>}
    </div>
  )
}

export default OrderDetails