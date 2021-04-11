import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import UserShowItem from "../user/user_show_item";
import CreateProductFormContainer from "../products/create_product_form_container";

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }
componentDidMount(){
    this.props.requestProducts()
}
  render() {

    const usersProducts = () =>{
        let filtered = []
        for(let i = 0; i < this.props.products.length; i++){ 
            let product = this.props.products[i]
            console.log(product.user_id)
            if (product.user_id === this.props.currentUser.id ){
                filtered.push(product)
            }
        }
        return filtered;
    }
   


    return (
      <div className="store-container">
        <div className="user-shop">Your Store</div>
        <h2 className="welcome-name">
          Welcome back, {this.props.currentUser.username}!
        </h2>
        <div className="user-product-list-container">
          <h2>Display user specific products here</h2>
          <ul className="user-product-list-items">
            {/* make logic inside that only inputs products with matching user_id to currenUserId */}
           { usersProducts().map((product) => (
            <UserShowItem
            key={product.id}
            product={product}
            deleteProduct={this.props.deleteProduct}
            currentUserId={this.props.currentUser.id}
          />
          ))}
        
          </ul>
        </div>
        <Link to="/products/new">New Product</Link>
      </div>
    );
  }
}

export default UserShow;
