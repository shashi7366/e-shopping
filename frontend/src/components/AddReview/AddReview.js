import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Paper,TextField, Typography,Button } from "@mui/material";
import './AddReview.css';
import {toast,ToastContainer} from 'react-toastify';
import {useParams,Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import ReactStars from "react-rating-stars-component";
import { getIndividualProduct } from '../../redux/actions/productAction';



function AddReview() {
    const params=useParams();
    var dispatch=useDispatch();
    var {user}=useSelector((state)=>{
        return state.user;
    });

    var {loaded,product}=useSelector((state)=>{
        return state.individualProduct
    })

useEffect(()=>{
dispatch(getIndividualProduct(params.id));
},[dispatch])

var [rating,setRating]=useState(5);
var [review,setReview]=useState('');

const handleRating=(e)=>{
    setRating(e);
   
}

const handleReview=(e)=>{
    setReview(e.target.value);
}


const submitReview=()=>{
    if(rating<0 || rating>5){
        toast.error("rating must be between 0 and 5");
    }
    else if(review.length<1){
        toast.error("review is mandatory");
    }else{
        axios.put(`/api/products/addReview/${params.id}`,{
            review:{
                name:user.name,
                user:user._id,
                rating:rating,
                comment:review
            }
        }).then((result)=>{
            toast.success("review added successfully");
        }).catch((err)=>{
            toast.error("error occured while adding review");
        })
    }

}

  return (
    <div className='reviewDiv'>
    <ToastContainer />
    <Paper>
    <div className='searchResultProductContainer'>
    {loaded && <Link to={`/${product._id}`}><Paper spacing={2} className='searchResultProductCard' >
        <img 
        className='productItemImage'
            src={product.images[0].url}
            alt="image not available"
        />
        <div className='searchResultProductDetails'>
        <Typography variant='h5' sx={{textDecoration:"none"}}>{product.name}</Typography>
        <ReactStars
        edit={false}
        count={5}
        isHalf={true}
        value={product.rating}
        color="gray"
        activeColor="yellow"
        size={20}
         />
         <p style={{color:"green"}}>({product.noOfRatings} ratings)</p>
         <p style={{textDecoration:"none"}}>{product.description}</p>
        </div>
        <div className='searchResultThirdDiv'>
         <Typography variant='h5'>₹{product.price}</Typography>
         {product.price>1000?<p style={{color:"green"}}>free delivery</p>:<p>delivery charges apply</p>}
         </div>
       
        </Paper></Link>}
    </div>
    </Paper>
        <Paper className="reviewPaper">
        
            <div className='reviewRating'>
            <Typography>Your rating out of 5</Typography>
                <ReactStars value={rating} onChange={handleRating} isHalf={true} size={30}/>
            </div>

            <div className='reviewComment'>
                <Typography>Your Review: </Typography>
                <textarea className="comment" size='small' value={review} onChange={handleReview} />
                </div>

                <Button onClick={submitReview}>Submit</Button>
            
        </Paper>
    </div>
  )
}

export default AddReview