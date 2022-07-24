import {ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAIL} from '../constants/productConstants';
import axios from 'axios';

export const getProduct=()=>{
    return  async function (dispatch){
        dispatch({type:ALL_PRODUCT_REQUEST});
        
        axios.get("/api/products/62d3e40beddb5277795e61d1").then((result)=>{
            console.log(result);
            // dispatch({type:ALL_PRODUCT_SUCCESS,payload:result.data.data});
        }).catch((err)=>{
            // dispatch({type:ALL_PRODUCT_FAIL,payload:err});
            console.log(err);
        })
    }
}