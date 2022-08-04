import 
{
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    CLEAR_ERRORS,
    ALL_ORDER_REQUEST,
    ALL_ORDER_SUCCESS,
    ALL_ORDER_FAIL
} from '../constants/orderConstants';

import axios from 'axios';


//create Order

export const createOrder = (order) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_ORDER_REQUEST });
  
   
      const { data } = await axios.post("/api/orders/new", order);
  
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_ORDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };


  export const getAllOrders=()=>{
    return (dispatch)=>{
      dispatch({type:ALL_ORDER_REQUEST});
      axios.get('/api/orders/admin/orders').then(({data})=>{
        dispatch({type:ALL_ORDER_SUCCESS,payload:data.orders})
      }).catch((err)=>{
        dispatch({type:ALL_ORDER_FAIL,payload:err});
      })
    }
  }
  