import React from "react";
import { Link } from "react-router-dom";


// const star = (rate) => {
  
//   var starHTML =[];
//   var rate = parseInt(rate);
//   var increment = 0;
//   var max = 5; // maximum rating

//   while(increment < rate) {
//     starHTML.push(<span className="material-icons black"> grade </span>);
//     increment++;
//   }

//   while(max > rate) {
//     starHTML.push(<span className="material-icons white"> star_outline </span>);
//     max--;
//   }
//   return starHTML;
// };



const ReviewItem = ({ product, deleteReview, currentUserId, review }) => {

  var starHTML =[];
  var rate = parseInt(review.rating);
  var increment = 0;
  var max = 5; // maximum rating

  while(increment < rate) {
    starHTML.push(<span key={increment} className="material-icons black"> grade </span>);
    increment++;
  }

  while(max > rate) {
    starHTML.push(<span key={increment} className="material-icons white"> star_outline </span>);
    max--;
  }

                  
  return (
    <div className="review-item-card">      
        <Link to={`/reviews/${review.id}`}>
          <div className="review-info"> 
            <div className="rating-container">
              <div className="rating-stars1">
              <div className="rating-stars2">
                  {starHTML}
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
          {
          ( currentUserId === review.user_id || currentUserId === product.user_id) 
            ? <button onClick={() =>deleteReview(review.id)}>Remove review</button>
            : null
          } 
            
          </div>
        </Link>   
           
    </div>
  );
};

export default ReviewItem;
