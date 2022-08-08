import React,{useState} from 'react';
import axios from 'axios';
import { Paper,TextField, Typography,Button } from "@mui/material";
import './AddReview.css';
import {toast,ToastContainer} from 'react-toastify';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';


function AddReview() {
    const params=useParams();
    var {user}=useSelector((state)=>{
        return state.user;
    })
var [rating,setRating]=useState(5);
var [review,setReview]=useState('');

const handleRating=(e)=>{
    setRating(e.target.value);
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
        <Paper className="reviewPaper">
            <div className='reviewRating'>
                <Typography><b>Rating: </b></Typography>
                <TextField size='small' value={rating} onChange={handleRating} />
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