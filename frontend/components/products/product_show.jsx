import React from "react";
import { Link, Redirect } from "react-router-dom";
import { createOrder } from "../../actions/order_actions";
import ReviewItem from "../reviews/review_item";

class ProductsShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {redirection: false}
    
    this.updateTheOrder = this.updateTheOrder.bind(this);
    this.newOrder = this.newOrder.bind(this);
  }

  
  componentDidMount() {
    this.props.requestUsers();    
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

  updateTheOrder(orderId){
    const formData = new FormData();      
      formData.append("order[product_id]", this.props.product.id);
      this.props.updateOrder(formData, orderId); 
  }

  newOrder(){  
    this.props.order.user_id = this.props.currentUserId;
    this.props.order.product_id = this.props.product.id;
    this.props.order.total = this.props.product.price;
    this.props.createOrder(this.props.order) 
    this.setState({redirection: true})
  }

  render() {
    if(this.state.redirection){return <Redirect to={`../orders/new`}/> }
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
      let reviewIds = productReviews().map(review => (review.user_id) );
      for (let i = 0; i < reviewIds.length; i++) {
         for (let j = 0; j < this.props.users.length; j++) {
            if (this.props.users[j].id === reviewIds[i]){
              names.push(this.props.users[j].username)
            }
         }
      }
      return names;
    }

    if (!this.props.product ) return null;
 
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
            
            {this.props.order.id && this.props.currentUserId === this.props.order.user_id 
            ? this.updateTheOrder(this.props.order.id) 
            : 
            <button className="show-cart-button" onClick={()=> this.newOrder()}>Add to cart 
               {/* <span className="showtooltiptext">o( _ _ )o Cart Feature Coming Soon! o( _ _ )o</span>  */}
               </button>      
           
              }      
            
          
          
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
