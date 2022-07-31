import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./reducers/cartReducer";

import {productsReducer,individualProductsReducer,searchProductsReducer} from './reducers/productReducer';

const reducer = combineReducers({
    products: productsReducer,
    individualProduct:individualProductsReducer,
    searchProduct:searchProductsReducer,
    cart:CartReducer
});

const initialState={
    cart: {
        cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    },
};

const store=createStore(reducer,applyMiddleware(thunk));
console.log("state created",store.getState());
store.subscribe(()=>{
    console.log("state changed",store.getState());
});

export default store;


