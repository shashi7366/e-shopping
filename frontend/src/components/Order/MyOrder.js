import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./MyOrder.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../redux/actions/orderAction";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import {Paper,Typography,Button} from '@mui/material';
import { color } from "@mui/system";

const MyOrder=()=>{
    const dispatch = useDispatch();

    const navigate=useNavigate();
    const { loaded, error, orders } = useSelector((state) => state.myOrders);
    const { user } = useSelector((state) => state.user);

    // const columns = [
    //     { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    //     {
    //     field: "status",
    //     headerName: "Status",
    //     minWidth: 150,
    //     flex: 0.5,
    //     cellClassName: (params) => {
    //         return params.getValue(params.id, "status") === "Delivered"
    //         ? "greenColor"
    //         : "redColor";
    //     },
    //     },
    //     {
    //     field: "itemsQty",
    //     headerName: "Items Qty",
    //     type: "number",
    //     minWidth: 150,
    //     flex: 0.3,
    //     },

    //     {
    //     field: "amount",
    //     headerName: "Amount",
    //     type: "number",
    //     minWidth: 270,
    //     flex: 0.5,
    //     },

    //     {
    //     field: "actions",
    //     flex: 0.3,
    //     headerName: "Actions",
    //     minWidth: 150,
    //     type: "number",
    //     sortable: false,
    //     renderCell: (params) => {
    //         return (
    //         <Link to={`/order/${params.getValue(params.id, "id")}`}>
    //             <LaunchIcon />
    //         </Link>
    //         );
    //     },
    //     },
    // ];
    // const rows = [];

    // orders &&
    //     orders.forEach((item, index) => {
    //     rows.push({
    //         itemsQty: item.orderItems.length,
    //         id: item._id,
    //         status: item.orderStatus,
    //         amount: item.totalPrice,
    //     });
    //     });

    useEffect(() => {
        if (error) {
        // alert.error(error);
        dispatch(clearErrors());
        }

        dispatch(myOrders());
    }, [dispatch, alert, error]);
    return(
        <div className="myOrdersContainerDiv">
        <Typography variant="h5">My Orders</Typography>

       
       {loaded && orders.length>0?<div className="orderDetailsDiv">{orders.map((order,i)=>{
        return <Paper className="orderDetails" key={i}>
            <Typography>{order._id}</Typography>
            <p><b>{order.orderStatus}</b></p>
            <div style={{display:'flex',flexWrap:'wrap'}}>
            {order.orderItems.map((item,i)=>{
                return<Paper className="smallerProductCart" key={i}>
                <img src={item.image} />
                    <Typography variant="h5">{item.name}</Typography>
                </Paper>
            })}</div>
            <Button onClick={()=>{
                navigate(`/order/${order._id}`);
            }}>VIEW DETAIL</Button>
        </Paper>
       })}</div>:<div><h1>No Orders yet</h1></div>}
        </div>
    )
}

export default MyOrder;