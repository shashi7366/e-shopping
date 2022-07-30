import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    PRODUCT_FAIL,
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    SEARCH_PRODUCT_FAIL,
    SEARCH_PRODUCT_REQUEST,
    SEARCH_PRODUCT_SUCCESS
} from '../constants/productConstants';

export const productsReducer = (state = { loading:false,products: [],error:'' }, action) => {
    switch (action.type) {
      case ALL_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALL_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
      case ALL_PRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const individualProductsReducer = (state = { loaded:false,product: [],error:'' }, action) => {
    switch (action.type) {
      case PRODUCT_REQUEST:
        return {
          ...state,
          loaded: false,
        };
      case PRODUCT_SUCCESS:
        return {
          ...state,
          loaded: true,
          product: action.payload,
        };
      case PRODUCT_FAIL:
        return {
          ...state,
          loaded: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };


  export const searchProductsReducer = (state = { loaded:false,products:'',error:'' }, action) => {
    switch (action.type) {
      case SEARCH_PRODUCT_REQUEST:
        return {
          ...state,
          loaded: false,
        };
      case SEARCH_PRODUCT_SUCCESS:
        return {
          ...state,
          loaded: true,
          products: action.payload,
        };
      case SEARCH_PRODUCT_FAIL:
        return {
          ...state,
          loaded: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };