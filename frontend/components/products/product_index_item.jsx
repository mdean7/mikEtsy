import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product, deleteProduct, currentUserId }) => {

  return (
    <div>
      <li>
        <Link to={`/products/${product.id}`}>
        <div className="product-image">IMAGE PLACE HOLDER</div>
          {product.title}</Link>

      </li>
    </div>
  );
};

export default ProductIndexItem;
