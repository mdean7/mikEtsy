import React from "react";
import { Link } from "react-router-dom";


const ReviewItem = ({ product, deleteReview, currentUserId, review, username }) => {
  const year = review.created_at.slice(0, 4);
  const month = review.created_at.slice(5, 7);
  const day = review.created_at.slice(8, 10);
  const hour = review.created_at.slice(11, 13);
  const minute = review.created_at.slice(14, 16);
  const second = review.created_at.slice(17, 19);
  const dateObject = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
  const currentHours = dateObject.getHours()
  dateObject.setHours(currentHours - 14)
  const newDateString = dateObject
  .toISOString()
  .replace('T', ' ')
  .slice(0, 10)

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
    
    <div className="review-date-conatiner">
         <div className="review-date">{username}</div>
         <div className="review-date">{newDateString}</div>
    </div>
                
          <div className="review-info"> 
            <div className="rating-container">
              <div className="rating-stars1">
              <div className="rating-stars2">
                  {starPower}
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
