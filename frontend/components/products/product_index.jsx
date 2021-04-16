import React from "react";
import { Link } from "react-router-dom";
import ProductIndexItem from "./product_index_item";
import FeaturedProductIndexItem from "./featured_product_index_item"
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
      <div className="splash-container">
        <div className="colorBar">
          <h1 className="mothersDay">
            Because everything is just better in a basket.
          </h1>

          <h2 className="shopMothers">So buy a weird basket full of stuff today!</h2>
            
          <div className="block-grid-item ">

          {this.props.products.map((product, i) => ( i > 10 && i < 16?
            <div className="ports">

            <FeaturedProductIndexItem
            key={product.id}
            product={product}
            deleteProduct={this.props.deleteProduct}
            currentUserId={this.props.currentUserId}
            />
            </div>

            : ''
            ))}

            </div>
          
        </div>
        <div className="item-grid-container">
          <div className="block-grid-item">

          {this.props.products.map((product, i) => ( i <= 10 ?
            <ProductIndexItem
              key={product.id}
              product={product}
              deleteProduct={this.props.deleteProduct}
              currentUserId={this.props.currentUserId}
            />
            : ''
          ))}
          </div>
        </div>
        
        <div className="recentImages">
          <h1 className="recent-img-text">Recently sold items</h1>
          <h3>Check out our spring baskets sale!</h3>
        <div className="block-grid-item ">

{this.props.products.map((product, i) => ( i > 0 && i < 6?
  <div className="ports">

  <FeaturedProductIndexItem
  key={product.id}
  product={product}
  deleteProduct={this.props.deleteProduct}
  currentUserId={this.props.currentUserId}
  />
  </div>

  : ''
  ))}

  </div>
        </div>
        <div className="item-grid-container">
        <div className="block-grid-item">

        {this.props.products.map((product, i) => ( i > 10 ?
            <ProductIndexItem
            key={product.id}
            product={product}
            deleteProduct={this.props.deleteProduct}
            currentUserId={this.props.currentUserId}
            />
            : ''
            ))}
            </div>
        </div>
      </div>
    );
  }
}

export default ProductIndex;
