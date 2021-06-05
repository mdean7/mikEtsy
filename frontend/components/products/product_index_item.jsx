import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = ({ owner, product, deleteProduct, currentUserId, order }) => {

  return (
    <div className="card-item">
      <Link to={`/products/${product.id}`}>
        <div className="height-placeholder">
          <img className="splash-images" src={product.photoUrl} alt="" />
        {product.title}
        <div className="owner">{owner ? owner.username : ''}</div>
        <div className="product-info">
          {order ? '' : "$" + product.price}
        </div>
        </div>
      </Link>

    </div>
  );
};

export default ProductIndexItem;
