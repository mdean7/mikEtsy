import React from "react";
import { Link, Redirect } from "react-router-dom";
import ReviewItem from "../reviews/review_item";

class ProductsShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirection: false };

    this.updateTheOrder = this.updateTheOrder.bind(this);
    this.newOrder = this.newOrder.bind(this);
  }

  componentDidMount() {
    this.props.requestUsers();
    this.props.requestReviews();
    this.props.requestOrders();
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

  updateTheOrder(order) {  
    console.log(order, order.id)  
    order.total += this.props.product.price;
    order.product_id = this.props.product.id;
    this.props.updateOrder(order, order.id);
  }

  newOrder() {
    this.props.order.user_id = this.props.currentUserId;
    this.props.order.product_id = this.props.product.id;
    this.props.order.total = this.props.product.price;
    this.props.createOrder(this.props.order);
    this.setState({ redirection: true });
  }

  render() {

    if (this.state.redirection) {
      return <Redirect to={`../orders/new`} />;
    }

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

    const reviewNames = () => {
      let names = [];
      let reviewIds = productReviews().map((review) => review.user_id);
      for (let i = 0; i < reviewIds.length; i++) {
        for (let j = 0; j < this.props.users.length; j++) {
          if (this.props.users[j].id === reviewIds[i]) {
            names.push(this.props.users[j].username);
          }
        }
      }
      return names;
    };

    if (!this.props.product) return null;
    if(!this.props.orders) return null;

    const orderCheck = () =>{
      let currentOrder = []
      for(let i = 0; i< this.props.orders.length; i++){
          if(this.props.orders[i].user_id === this.props.currentUserId){
            currentOrder.unshift(this.props.orders[i])
          }
      }
      if(currentOrder.length >= 1){return currentOrder[0]}
    }
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

              {orderCheck()
              ?<button
              className="show-cart-button"
              onClick={() => this.updateTheOrder(orderCheck())}
             >
              Add to cart          
            </button> 
              
             : <button
                className="show-cart-button"
                onClick={() => this.newOrder()}
               >
                Add to cart          
              </button>
            }

            <br />
            <Link
              to={{
                pathname: "/reviews/new",
                state: {
                  product: this.props.product,
                },
              }}
            >
              <button>Leave a review</button>
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
            {productReviews().map((review, i) => (
              <ReviewItem
                key={review.id}
                review={review}
                product={this.props.product}
                deleteReview={this.props.deleteReview}
                currentUserId={this.props.currentUserId}
                username={reviewNames()[i]}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsShow;
