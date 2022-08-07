import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./reducers/cartReducer";
import { myOrdersReducer,newOrderReducer,allOrdersReducer,orderDetailsReducer } from "./reducers/orderReducer";
import {productsReducer,individualProductsReducer,searchProductsReducer,newReviewReducer } from './reducers/productReducer';
import {userReducer,updateProfileReducer} from './reducers/userReducer';

const reducer = combineReducers({
    products: productsReducer,
    individualProduct:individualProductsReducer,
    searchProduct:searchProductsReducer,
    user:userReducer,
    cart:CartReducer,
    profile:updateProfileReducer,
    newOrder:newOrderReducer,
    myOrders: myOrdersReducer,
    newReview: newReviewReducer,
    orderDetails: orderDetailsReducer,
    orders:allOrdersReducer
});

const initialState={
    cart: {
        cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
        shippingInfo: localStorage.getItem("shippingInfo")
        ?JSON.parse(localStorage.getItem("shippingInfo"))
        :{},
    },
};

const store=createStore(reducer,initialState,applyMiddleware(thunk));
console.log("state created",store.getState());
store.subscribe(()=>{
    console.log("state changed",store.getState());
});

export default store;


