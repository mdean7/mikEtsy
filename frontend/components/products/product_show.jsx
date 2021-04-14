import React from "react";
import { Link } from "react-router-dom";
import ReviewItem from "../reviews/review_item"

class ProductsShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.product;
  }

  componentDidMount() {
    this.props.requestReviews();
    this.props.requestProduct(this.props.match.params.productId);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
  
    const productReviews = () => {
      let filtered = [];
      for (let i = 0; i < this.props.reviews.length; i++) {
        let review = this.props.reviews[i];
        if (review.product_id === this.props.product.id) {
          filtered.push(review);
        }
      }
      return filtered;
    };

    return (
      <div>
      <div className='product-show-container'>
        <div className="show-image-wrap">
          <img className="show-images" src={this.props.product.photoUrl} alt="" />
        </div>
          <div className='show-info'>
           <div className='show-title'>{this.props.product.title}</div>
            <div className='show-price'>
              {"$"}
              {this.props.product.price}
            </div>
           <button className="show-cart-button">Add to cart</button>
           <br/>
           Details
            <div className='show-description'>{this.props.product.description}</div>
          </div>
      </div>
            <br/>
            <div>
            {productReviews().map((review) => (
            <ReviewItem
              key={review.id}
              review={review}
              product={this.props.product}
              deletereview={this.props.deletereview}
              currentUserId={this.props.currentUserId}
            />
          ))}
             
            </div>
      </div>
    );
  }
}

export default ProductsShow;
