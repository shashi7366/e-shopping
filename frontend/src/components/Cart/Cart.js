import React from 'react';
import CartItem from "./CartItem";
import "./Cart.css";
import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from '../../redux/actions/cartAction';
import { Button, Paper, Typography } from '@mui/material';
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Link, useNavigate } from "react-router-dom";

const Cart = ()=> {
  const navigate=useNavigate();
    const dispatch = useDispatch();
    const {cartItems} = useSelector((state)=>state.cart);

//     useEffect(()=>{
// dispatch(addItemsToCart())
//     },[dispatch]);

    const increaseQuantity = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if (stock <= quantity) {
          return;
        }
        dispatch(addItemsToCart(id, newQty));
      };

      const decreaseQuantity = (id, quantity) => {
        const newQty = quantity - 1;
        if (1 >= quantity) {
          return;
        }
        dispatch(addItemsToCart(id, newQty));
      };

      const deleteCartItems = (id) => {
        dispatch(removeItemsFromCart(id));
      };

    // const item={
    //     product:"ProductId",
    //     price:103,
    //     name:"Redmi Y2",
    //     quantity:1,
    // }
    return(
        <Fragment>
            {cartItems.length === 0 ? (
            <div className="emptyCart">
            <RemoveShoppingCartIcon />

            <Typography>No Product in Your Cart</Typography>
            <Link to="/products">View Products</Link>
            </div>
        ) : (
        
        <Fragment>
            <div className="cartPage" style={{minHeight:'60vmax'}}>
                <div className="cartHeader">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>

                 {cartItems.length>0 && cartItems.map((item)=>{
                    {/* <div className="cartContainer" key={item.product}>
                    <CartItem item={item} deleteCartItems={removeItemsFromCart} />
                    <div className="cartInput">
                        <button>-</button>
                        <input type="number" value={item.quantity} readOnly />
                        <button>+</button>
                    </div>
                    <p className="cartSubtotal">{`${item.price*item.quantity}`}</p>
                </div> */}
                return <Paper className="cartContainer">
                    {/* <CartItem item={item} /> */}
                    <div className='leftDisplayDiv'>
                      <img className="displayImage" src={item.image} alt="image not available" />
                      <div className='detailsDiv'>
                        <Typography variant='h6'>{item.name}</Typography>
                        <Button className='removeButtom' variant='contained' onClick={()=>{deleteCartItems(item.product)}}>Remove</Button>
                      </div>
                    </div>
                    <div className="cartInput">
                        <button onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }>-</button>
                        <input type="text" value={item.quantity} readOnly />
                        <button onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }>+</button>
                    </div>
                    <p className="cartSubtotal">{`${item.price*item.quantity}`}</p>
                </Paper>
               })}

                {/* <div className="cartContainer">
                    <CartItem item={item} />
                    <div className="cartInput">
                        <button onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }>-</button>
                        <input type="number" value={item.quantity} readOnly />
                        <button onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }>+</button>
                    </div>
                    <p className="cartSubtotal">{`${item.price*item.quantity}`}</p>
                </div>*/}

                <div className="cartGrossProfit">
                    <div></div>
                    <div className="cartGrossProfitBox">
                        <p>Gross Total</p>
                        <p>{`₹${cartItems.reduce(
                            (acc, item) => acc + item.quantity * item.price,
                            0
                            )}`}</p>
                    </div>
                    <div></div>
                    <div className="checkOutBtn">
                        <button onClick={()=>{
                          navigate('/shipping');
                        }}>Check Out</button>
                    </div>
                </div> 
            </div>
        </Fragment>
    )
}
</Fragment>
    )}

export default Cart;