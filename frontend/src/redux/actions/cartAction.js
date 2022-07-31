import { AddToCart } from "../constants/cartConstants";
import axios from "axios";

export const addItemsToCart = () => async (dispatch,getState) => {
    const {data} = await axios.get(`/api/orders/me`);
console.log(data);
    dispatch({
        type : AddToCart,
        payload : {
            product : data.product._id,
            name : data.product.name,
            price : data.product.price,
            image : data.product.images[0].url,
            stock : data.product.stock,
            
        },
    });

    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
};