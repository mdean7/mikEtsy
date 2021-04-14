import React from "react";
import { Link } from "react-router-dom";

class ProductsShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.product;
  }

  componentDidMount() {
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
    return (
      <div className='product-show-container'>
        <div className="show-image-wrap">
          <img className="show-images" src={this.state.photoUrl} alt="" />
        </div>
          <div className='show-info'>
           <div className='show-title'>{this.state.title}</div>
            <div className='show-price'>
              {"$"}
              {this.state.price}
            </div>
           <button className="show-cart-button">Add to cart</button>
           <br/>
           Details
            <div className='show-description'>{this.state.description}</div>
          </div>
            
      </div>
    );
  }
}

export default ProductsShow;
