import CartItem from "./CartItem";
import "./Cart.css";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = ()=> {
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=>state.cart);

    const item={
        product:"ProductId",
        price:103,
        name:"Redmi Y2",
        quantity:1,
    }
    return(
        <Fragment>
            <div className="cartPage">
                <div className="cartHeader">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>

                {/* {cartItems && cartItems.map((item)=>( */}
                    <div className="cartContainer">
                    <CartItem item={item} />
                    <div className="cartInput">
                        <button>-</button>
                        <input type="number" value={item.quantity} readOnly />
                        <button>+</button>
                    </div>
                    <p className="cartSubtotal">{`${item.price*item.quantity}`}</p>
                </div>
                {/* // ))} */}

                <div className="cartContainer">
                    <CartItem item={item} />
                    <div className="cartInput">
                        <button>-</button>
                        <input type="number" value={item.quantity} readOnly />
                        <button>+</button>
                    </div>
                    <p className="cartSubtotal">{`${item.price*item.quantity}`}</p>
                </div>

                <div className="cartGrossProfit">
                    <div></div>
                    <div className="cartGrossProfitBox">
                        <p>Gross Total</p>
                        <p>{`600`}</p>
                    </div>
                    <div></div>
                    <div className="checkOutBtn">
                        <button>Check Out</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart;