import {Link} from "react-router-dom";
import "./CartItem.css";

const CartItem = ({item, deleteCartItems})=> {
    return(
        <div className="CartItem">
            <img src={item.image} />
            <div>
                <Link to={`/${item.product}`}>{item.name}</Link>
                <span>{`Price : ${item.price}`}</span>
                <p onClick={() => deleteCartItems(item.product)}>Remove</p>
            </div>
        </div>
    )
}

export default CartItem;