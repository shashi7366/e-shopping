import 
{
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    CLEAR_ERRORS,ALL_ORDER_REQUEST,ALL_ORDER_SUCCESS,ALL_ORDER_FAIL
} from '../constants/orderConstants';

export const newOrderReducer =(state ={},action)=>
{
    switch(action.type)
    {
        case CREATE_ORDER_REQUEST:
            return {
              ...state,
              loading: true,
            };
      
          case CREATE_ORDER_SUCCESS:
            return {
              loading: false,
              order: action.payload,
            };
      
          case CREATE_ORDER_FAIL:
            return {
              loading: false,
              error: action.payload,
            };
          case CLEAR_ERRORS:
            return {
              ...state,
              error: null,
            };
      
          default:
            return state;
        } 



    }

    export const allOrdersReducer=(state={loaded:false,orders:'',error:''},action)=>{
      switch(action.type)
    {
        case ALL_ORDER_REQUEST:
            return {
              ...state,
              loaded: false,
            };
      
          case ALL_ORDER_SUCCESS:
            return {
              loaded: true,
              orders: action.payload,
            };
      
          case ALL_ORDER_FAIL:
            return {
              loaded: false,
              error: action.payload,
            };
          case CLEAR_ERRORS:
            return {
              ...state,
              error: null,
            };
      
          default:
            return state;
        } 
    }