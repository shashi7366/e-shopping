import {ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAIL,PRODUCT_FAIL,PRODUCT_REQUEST,PRODUCT_SUCCESS,
SEARCH_PRODUCT_FAIL,SEARCH_PRODUCT_REQUEST,NEW_REVIEW_REQUEST,
NEW_REVIEW_SUCCESS,
NEW_REVIEW_FAIL,SEARCH_PRODUCT_SUCCESS} from '../constants/productConstants';
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

export const getSearchProduct=(link)=>{
    return  async function (dispatch){
        dispatch({type:SEARCH_PRODUCT_REQUEST});
        
        axios.get(link).then((result)=>{
           console.log(result);
            dispatch({type:SEARCH_PRODUCT_SUCCESS,payload:result.data.data});
            console.log(result.data.data);
        }).catch((err)=>{
           if(err.response.data.message=='success'){
            dispatch({type:SEARCH_PRODUCT_SUCCESS,payload:err.response.data.product});
           }
           else{
            dispatch({type:SEARCH_PRODUCT_FAIL,payload:err})
           }
            // dispatch({type:ALL_PRODUCT_FAIL,payload:err});
          
        })
    }
}


export const newReview = (reviewData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_REVIEW_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.put(`/api/v1/review`, reviewData, config);
  
      dispatch({
        type: NEW_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: NEW_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };