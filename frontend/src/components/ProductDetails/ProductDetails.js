import React,{useEffect, useState}from 'react';
import Carousel from 'react-material-ui-carousel';
import {useDispatch,useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { getIndividualProduct } from '../../redux/actions/productAction';
import './ProductDetails.css';
import ReactStars from "react-rating-stars-component";
import { Button, TextField, Typography } from '@mui/material';
import ReviewItem from './ReviewItem.js';
import { addItemsToCart } from '../../redux/actions/cartAction';
// import {useSelector} from "react-redux";
import Alert from '@mui/material/Alert';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetails() {
    var [quantity,setQuantity]=useState(1);
    var {user}=useSelector((state)=>{
        return state.user;
    });
    const setOrderQuantity=(e)=>{
        setQuantity(e.target.value);
        if(quantity>product.stock){
            setQuantity(product.stock);
        }
        if(quantity<1){
            setQuantity(1);
        }
    }
    var params=useParams();
    var id=params.id;
    const dispatch=useDispatch();
    var {loaded,product}=useSelector((state)=>{
        return state.individualProduct;
    })

    const cartHandler = () => {
        if(user.role!='admin'){
        dispatch(addItemsToCart(id,quantity));
        toast.success("item added to cart",{position:toast.POSITION.TOP_CENTER})
    }else{
        
        toast.error("admin can't add product",{position:toast.POSITION.TOP_CENTER})
    }
        // alert.success("Item Added to Cart");
    }

    useEffect(()=>{
        dispatch(getIndividualProduct(id));
    },[dispatch,id]);
  return (
    <div>
    {loaded && <div className='ProductContainer'><Carousel className='ProductCarousel'>
        {product.images.map((item,i)=>{
            return <img 
            className='CarouselImage'
                src={item.url}
                key={i}
                alt="image not found"
            />
        })}
    </Carousel>
    <div className='detailDiv'>
        <h1>{product.name}</h1>
        <h5>{product._id}</h5>
        <ReactStars
        edit={false}
        count={5}
        isHalf={true}
        value={product.rating}
        color="gray"
        activeColor="yellow"
        size="20px"
         />
        <p style={{width:'80%'}}>{product.description}</p>
        <h4>${product.price}</h4>
        <br></br>
        {product.stock?<b style={{color:'green'}}>in stock</b>:<b style={{color:'red'}}>out of stock</b>}
        <br />
        <br />
        <Typography>Quantity</Typography>
        <TextField size='small' value={quantity} onChange={setOrderQuantity} />
        <Button variant='outlined' onClick={cartHandler}>Add to Cart</Button>
    </div>
    </div>}
    <ToastContainer/>
    {loaded && <div className='reviews'>
    <h3>Reviews</h3>
{product.reviews.length>0?<div className='ReviewBox'>{product.reviews.map((review,i)=>{
    <ReviewItem review={review} />
})}</div>:<p style={{textAlign:'center'}}>No reviews yet</p>}
    </div>}
    </div>
  )
}

export default ProductDetails