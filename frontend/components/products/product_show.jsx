import React from "react";
import { Link } from "react-router-dom";
import ReviewItem from "../reviews/review_item";

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
    if (!this.props.product) return null;
    return (
      <div>
        <div className="product-show-container">
          <div className="show-image-wrap">
            <img
              className="show-images"
              src={this.props.product.photoUrl}
              alt=""
            />
          </div>
          <div className="show-info">
            <div className="show-title">{this.props.product.title}</div>
            <div className="show-price">
              {"$"}
              {this.props.product.price}
            </div>
            
            <button className="show-cart-button">Add to cart            
            <span className="showtooltiptext">o( _ _ )o Cart Feature Coming Soon! o( _ _ )o</span> 
            </button>
          
            <br/>
            <Link to= {
              {
                pathname: "/reviews/new",
                state: {
                        product: this.props.product
                      }
              }}>
              <button>
              Leave a review
                </button> 
              </Link>
            <br />
            <div className="show-details">Details</div>
            <div className="show-description">
              {this.props.product.description}
            </div>
          </div>
        </div>
        <div className="review-items-container">
          <div className="review-title">
            {productReviews().length} shop reviews
          </div>
          <div className="all-reviews">
            {productReviews().map((review) => (
              <ReviewItem
                key={review.id}
                review={review}
                product={this.props.product}
                deleteReview={this.props.deleteReview}
                currentUserId={this.props.currentUserId}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsShow;
