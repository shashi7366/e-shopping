import React, { Fragment, useEffect } from "react";
import "./OrderDetailsUser.css";
import { useSelector, useDispatch } from "react-redux";
// import MetaData from "../layout/MetaData";
import { Link,useNavigate,useParams } from "react-router-dom";
import { Button, Paper, Typography } from "@mui/material";
import { getOrderDetails, clearErrors } from "../../redux/actions/orderAction";
// import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";

const OrderDetailsUser=()=>{
  var navigate=useNavigate();
  var params=useParams();

    const { order, error} = useSelector((state) => state.orderDetails);

    const dispatch = useDispatch();
    // const alert = useAlert();

    useEffect(() => {
       
console.log(params.id);
        dispatch(getOrderDetails(params.id));
    }, [dispatch, alert, error, params]);


    return(
        <>
        {order && <Paper sx={{minHeight:'60vmax'}}>
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography  sx={{color:'green'}}>
                Order #{order._id}
              </Typography>
              <Typography variant="h5">Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div className="userDetailsOrder">
                  <p><b>Name:</b></p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div className="userDetailsOrder">
                  <p><b>Phone:</b></p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div className="userDetailsOrder">
                  <p><b>Address:</b></p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>

              <div className="userDetailsOrder">
              <p><b>Order Status: </b></p>
              <p style={order.orderStatus=="delivered"?{color:'green'}:{color:'red'}}><b>{order.orderStatus}</b></p>
              </div>
              

                
              </div>

            </div>

            {/* <div className="orderDetailsCartItems">
              <Typography>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X ₹{item.price} ={" "}
                        <b>₹{item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div> */}
<Typography variant="h5">OrderItems: </Typography>
            <div style={{display:'flex',paddingLeft:'2%',flexWrap:'wrap'}}>
            {order.orderItems&&(order.orderItems).map((item,i)=>{
                return<Paper elevation={10} key={i} sx={{height:'20vmax',width:'20vmax',padding:'2%',margin:'1%',textAlign:'center'}}>
                <img src={item.image} style={{height:'10vmax',width:'15vamx'}}/>
                    <Typography>{item.name}</Typography>
                    {order.orderStatus=="Delivered" || order.orderStatus=="delivered"?<Button variant="contained" onClick={()=>{navigate(`/addReview/${item.product}`)}}>Add review</Button>:<Button variant="contained" onClick={()=>{navigate(`/${item.product}`)}}>view</Button>}
                </Paper>
            })}</div>

            {/* {(order.orderItems).map((item,i)=>{
              return <h1>{item.name}</h1>
            })} */}
          
        </Paper>}
        </>
    )
}

export default OrderDetailsUser;