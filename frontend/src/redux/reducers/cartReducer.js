import { AddToCart, RemoveCartItems } from "../constants/cartConstants";

export const CartReducer = (state = { cartItems : []}, action)=>{
    switch(action.type){
        case AddToCart : const item = action.payload;
        const isItemExist = state.cartItems.find(
            (i) => i.product === item.product
        );

        if(isItemExist){
            return {
                ...state,
                cartItems: state.cartItems.map((i)=>
                i.product === isItemExist.product ? item : i
                ),
            };
        }
        else{
            return {
                ...state,
                cartItems: [...state.cartItems,item],
            };
        }

        case RemoveCartItems:
        return {
            ...state,
            cartItems: state.cartItems.filter((i) => i.product !== action.payload),
        };
        default:
            return state;
    }
};