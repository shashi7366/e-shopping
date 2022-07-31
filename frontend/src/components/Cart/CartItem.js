import {Link} from "react-router-dom";
import "./CartItem.css";

const CartItem = ({item})=> {
    return(
        <div className="CartItem">
            <img src="https://i.gadgets360cdn.com/products/large/1528369557_635_xiaomi_redmi_y2.jpg" />
            <div>
                <Link to={`/product/${item.product}`}>{item.name}</Link>
                <span>{`Price : ${item.price}`}</span>
                <p>Remove</p>
            </div>
        </div>
    )
}

export default CartItem;