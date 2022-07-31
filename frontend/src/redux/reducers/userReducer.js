import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAIL
,LOGOUT_REQUEST,LOGOUT_SUCCESS,LOGOUT_FAIL} from '../constants/userConstants';

export const userReducer = (state = { loaded:false,user:'',error:'' }, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
      case REGISTER_REQUEST:
        return {
          ...state,
          loaded: false,
        };
      case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        return {
          ...state,
          loaded: true,
          user: action.payload,
        };
      case LOGIN_FAIL:
      case REGISTER_FAIL:
        return {
          ...state,
          loaded: false,
          error: action.payload,
        };
        case LOGOUT_REQUEST:
          return {
            ...state,
            loaded: false,
            
          };
          case LOGOUT_SUCCESS:
          return {
            ...state,
            loaded: true,
            user:'',
          };
          case LOGOUT_FAIL:
            return {
              ...state,
              loaded: false,
              error:action.payload
            };


      default:
        return state;
    }
  };