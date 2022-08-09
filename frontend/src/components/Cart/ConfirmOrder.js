import React, { Fragment } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector } from "react-redux";
//import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link, useNavigate } from "react-router-dom";
import { Paper, Typography,Button } from "@mui/material";

const ConfirmOrder = () => {
  const navigate=useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 120;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate('/process/payment');

  };

  return (
    <div style={{marginTop:'2%',backgroundColor:"whitesmoke"}}>
      {/* <MetaData title="Confirm Order" /> */}
      <CheckoutSteps activeStep={1} />
      

      <Paper className="containerPaper" sx={{display:"flex",justifyContent:"space-between",backgroundColor:"whitesmoke"}}>
        <Paper elevation={4} className="childPaper" >
        <Typography variant="h5">Shipping Address</Typography>
        <hr style={{width:"60%",paddingLeft:"5%",height:'1vmax'}}/>
        <div style={{display:'flex'}}><Typography><b>Name: </b></Typography><Typography>{user.name}</Typography></div>
        <div style={{display:'flex'}}><Typography><b>Phone: </b></Typography><Typography>{shippingInfo.phoneNo}</Typography></div>
        <div style={{display:'flex'}}><Typography><b>Address: </b></Typography><Typography>{address}</Typography></div>
        <div style={{display:'flex'}}><Typography><b>PIN: </b></Typography><Typography>{shippingInfo.pinCode}</Typography></div>
        </Paper>
        <Paper className="childPaper" >
        <Typography variant="h5">Orders</Typography>
        <hr style={{width:"60%",paddingLeft:"5%",height:'1vmax'}}/>
        {cartItems &&
                cartItems.map((item) => (
                  <Paper elevation={4} className="orderItemPaper" key={item.product} style={{display:"flex",justifyContent:"space-between",padding:"2%",margin:"2%"}}>
                    <img src={item.image} alt="Product" style={{width:'8vmax',height:'8vmax'}}/>
                    
                      <b>{item.name}</b>
                    
                    <span>
                      {item.quantity} X ₹{item.price} ={" "}
                      <b>₹{item.price * item.quantity}</b>
                    </span>
                  </Paper>
                ))}
        </Paper>
      </Paper>
      <Paper elevation={4} sx={{padding:"2%"}}>
        <Typography variant="h5">Amount to be paid</Typography>
        <hr style={{width:"60%",paddingLeft:"5%",height:'1vmax'}}/>
        <div style={{display:'flex'}}><Typography><b>Subtotal: </b></Typography><Typography>₹{subtotal}</Typography></div>
        <div style={{display:'flex'}}><Typography><b>Shipping Charges: </b></Typography><Typography>₹{shippingCharges}</Typography></div>
        <div style={{display:'flex'}}><Typography><b>GST: </b></Typography><Typography>₹{tax}</Typography></div>
        <div style={{display:'flex'}}><Typography><b>Total: </b></Typography><Typography>₹{totalPrice}</Typography></div>
        <br />
        <Button variant="contained" onClick={proceedToPayment} sx={{width:'8vmax'}}>Proceed</Button>
      </Paper>
    </div>
  );
};

export default ConfirmOrder;
