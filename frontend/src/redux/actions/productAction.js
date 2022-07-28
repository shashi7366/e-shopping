import {ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAIL} from '../constants/productConstants';
import axios from 'axios';

export const getProduct=()=>{
    return  async function (dispatch){
        dispatch({type:ALL_PRODUCT_REQUEST});
        
        axios.get("/api/products").then((result)=>{
            
            dispatch({type:ALL_PRODUCT_SUCCESS,payload:result.data.products});
        }).catch((err)=>{
           if(err.response.data.message=='success'){
            dispatch({type:ALL_PRODUCT_SUCCESS,payload:err.response.data.products});
           }
           else{
            dispatch({type:ALL_PRODUCT_FAIL,payload:err})
           }
            // dispatch({type:ALL_PRODUCT_FAIL,payload:err});
           
        })
    }
}