import React from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import UserShowItem from "../user/user_show_item";
import CreateProductFormContainer from "../products/create_product_form_container";

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestProducts();
  }
  render() {
    const usersProducts = () => {
      let filtered = [];
      for (let i = 0; i < this.props.products.length; i++) {
        let product = this.props.products[i];
        if (product.user_id === this.props.currentUser.id) {
          filtered.push(product);
        }
      }
      return filtered;
    };
  
    return (
      <div className="store-container">
        <div className="user-shop">{this.props.currentUser.username}'s Shop Manager</div>
        <h2 className="welcome-name">
          Welcome back, {this.props.currentUser.username}!
        </h2>
        <div className="user-product-list-container">
          <div className="list-sidebar">
          <h2 className="listings-sidebar">Listings
          </h2>
          <br/>
          <br/>
          <Link to="/products/new">
          <button className="add-listing-button" >
            + Add a listing            
          </button>
          </Link>
          </div>

          <div className="page-view">
            <div className="listings-header"></div>
            <div className="free-shipping">
              <p className="bold-shipping">
              Set a free shipping guarantee for your shop:
              </p>
              You'll get priority
              placement in US search results when you offer free shipping on US
              orders $35 and up. Our bulk pricing tool makes it easy to set up.
            </div>
            <div className="content-region">
              <ul className="block-grid">
                {usersProducts().map((product) => (
                  <UserShowItem
                    key={product.id}
                    product={product}
                    deleteProduct={this.props.deleteProduct}
                    currentUserId={this.props.currentUser.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;
