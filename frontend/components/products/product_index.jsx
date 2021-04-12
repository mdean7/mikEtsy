import React from "react";
import { Link } from "react-router-dom";
import ProductIndexItem from "./product_index_item";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestProducts();
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
        <div className="colorBar">
          <h1 className="mothersDay">
            Because hand made stuff is cooler even when it looks like trash.
          </h1>
          <h2 className="shopMothers">So buy some weird stuff today!</h2>
        </div>
        <p className="recentImages"></p>
        <ul>
          {this.props.products.map((product) => (
            <ProductIndexItem
              key={product.id}
              product={product}
              deleteProduct={this.props.deleteProduct}
              currentUserId={this.props.currentUserId}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductIndex;
