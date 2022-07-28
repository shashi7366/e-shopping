import {ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAIL,PRODUCT_FAIL,PRODUCT_REQUEST,PRODUCT_SUCCESS} from '../constants/productConstants';
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

export const getIndividualProduct=(id)=>{
    return  async function (dispatch){
        dispatch({type:PRODUCT_REQUEST});
        
        axios.get(`/api/products/${id}`).then((result)=>{
           console.log(result);
            dispatch({type:PRODUCT_SUCCESS,payload:result.data.product});
        }).catch((err)=>{
           if(err.response.data.message=='success'){
            dispatch({type:PRODUCT_SUCCESS,payload:err.response.data.product});
           }
           else{
            dispatch({type:PRODUCT_FAIL,payload:err})
           }
            // dispatch({type:ALL_PRODUCT_FAIL,payload:err});
          
        })
    }
}

