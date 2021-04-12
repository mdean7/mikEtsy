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
    console.log(this.state)
    return (
      <div>
       <p>{this.state.title}</p>
        <div className="showImage">
          <img className="idx-images" src={this.state.photoUrl} alt="" /> 
          <div>
            <p>{this.state.description}</p>
            <p>{"$"}{this.state.price}</p>
            <Link to="/">Back to listings</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsShow;
