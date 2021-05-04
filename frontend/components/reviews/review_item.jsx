import React from "react";
import { Link } from "react-router-dom";


const ReviewItem = ({ product, deleteReview, currentUserId, review }) => {

  var starPower =[];
  var rate = parseInt(review.rating);
  var increment = 0;
  var max = 5; // maximum rating

  while(increment < rate) {
    starPower.push(<span key={increment+Math.random()*100} className="material-icons black"> grade </span>);
    increment++;
  }

  while(max > rate) {
    starPower.push(<span key={increment+Math.random()*100} className="material-icons white"> star_outline </span>);
    max--;
  }

                  
  return (
    <div className="review-item-card">      
        {/* <Link to={`/reviews/${review.id}`}> */}
          <div className="review-info"> 
            <div className="rating-container">
              <div className="rating-stars1">
              <div className="rating-stars2">
                  {starPower}
                </div>
              </div>
            </div>
                {review.user_id}
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
            <div className="review-pair">
          {
          ( currentUserId === review.user_id || currentUserId === product.user_id) 
            ? <button onClick={() => deleteReview(review.id)}>Remove review</button>
            : null
          } 
            
            {
          ( currentUserId === review.user_id ) 
            ? <div className="edit-icon-container">
            <div className="card-edit">
             <button >
             <Link className="edit-button tooltip" to={`/reviews/${review.id}/edit`}>                                           
                <div className="edit-icon" ></div> 
                <span className="tooltiptext">Edit my review</span> 
               </Link>
             </button>
            </div>
          </div>
            : null
          } 
              </div>        
          </div>
          
           
    </div>
  );
};

export default ReviewItem;
