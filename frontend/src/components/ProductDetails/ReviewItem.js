import React from 'react'
import Rating from '@mui/material/Rating';
import './ReviewItem.css'
import { Paper } from '@mui/material';

function ReviewItem({review}) {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <>
    <Paper className="reviewCard">
      {/* <img src={profilePng} alt="User" /> */}
      <p><b>{review.name}</b></p>
      <div className='ratingStarsReviewItem'><Rating {...options} /></div>
      <span className="reviewCardComment">{review.comment}</span>
    </Paper>
    </>
  )
}

export default ReviewItem