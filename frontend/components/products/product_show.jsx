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
      <div>
        {/* <div className="divideBar"></div> */}
        <div className="recentImages">
          <div>
            <p>{this.state.description}</p>
            <p>{this.state.date}</p>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsShow;
