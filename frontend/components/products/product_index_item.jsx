import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product, deleteProduct, currentUserId }) => {
  return (
    <div>
      <li>
        <Link to={`/products/${product.id}`}>
          <img className="idx-images" src={product.photoUrl} alt="" />
          {product.title}
        </Link>
      </li>
    </div>
  );
};

export default ProductIndexItem;
