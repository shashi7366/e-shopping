import { AddToCart } from "../constants/cartConstants";
import axios from "axios";

export const addItemsToCart = (id,quantity) => async (dispatch,getState) => {
    const {data} = await axios.get(`/api/orders/me/${id}`);

    dispatch({
        type : AddToCart,
        payload : {
            product : data.product._id,
            name : data.product.name,
            price : data.product.price,
            image : data.product.images[0].url,
            stock : data.product.stock,
            quantity,
        },
    });

    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
};