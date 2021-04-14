import React from "react";
import { Link } from "react-router-dom";

const ReviewItem = ({ product, deleteReview, currentUserId, review }) => {
  return (
    <div className="review-items-container">      
        <Link to={`/reviews/${review.id}`}>
          <div className="review-info">
            <div className="rating-container">
              <div className="rating-stars1">
              <div className="rating-stars2">
                  {review.rating}  
                </div>
              </div>
            </div>
            <div className="title-container">
              <div className="title-outer1">
              <div className="title-inner2">
                  {review.title}  
                </div>
              </div>
            </div>
            <div className="body-container">
              <div className="body-outer1">
              <div className="body-inner2">
                  {review.body}  
                </div>
              </div>
            </div>
          </div>
        </Link>   
           
    </div>
  );
};

export default ReviewItem;
