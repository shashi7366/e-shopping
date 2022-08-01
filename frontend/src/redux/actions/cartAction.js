import { AddToCart, RemoveCartItems } from "../constants/cartConstants";
import axios from "axios";

//ADD TO CART
export const addItemsToCart = (id,quantity) => async (dispatch,getState) => {
    const {data} = await axios.get(`/api/products/${id}`);
console.log(data);
    dispatch({
        type : AddToCart,
        payload : {
            product : data.product._id,
            name : data.product.name,
            price : data.product.price,
            image : data.product.images[0].url,
            stock : data.product.stock,
            quantity
        },
    });

    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
};

//DELETE FROM CART

export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: RemoveCartItems,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };