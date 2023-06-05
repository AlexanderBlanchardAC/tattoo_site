import React from 'react';
import './mainReviews.css';
import { reviewData } from '../data';

const MainReviews = () => {

    const { reviews } = reviewData;

  return (
    <div className='mainReviewsContainer'>
                <h2 className="reviewsTitle">Testimonials</h2>

      <div className="mainReviewsContent">
       {reviews.map((review, index) => {
        return (
            <div className="singleReview" key={index}>
                <p className="reviewerName">{review.name}</p>
                <p className="reviewText">{review.review}</p>
                <p className="reviewerTattooist">Tattooed by: {review.artist}</p>
                
            </div>
        )
       })}
      </div>
    </div>
  )
}

export default MainReviews
