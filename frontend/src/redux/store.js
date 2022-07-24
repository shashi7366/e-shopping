import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {productsReducer} from './reducers/productReducer';

const reducer = combineReducers({
    products: productsReducer
});

// const initialState={
//     loading:false,
//     products:[],
//     error:''
// };

const store=createStore(reducer,applyMiddleware(thunk));
console.log("state created",store.getState());
store.subscribe(()=>{
    console.log("state changed",store.getState());
});

export default store;


