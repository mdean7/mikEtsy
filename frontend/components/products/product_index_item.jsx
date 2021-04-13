import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product, deleteProduct, currentUserId }) => {
  return (
    <div className="card-item">      
        <Link to={`/products/${product.id}`}>
          <div className="height-placeholder">
          <img className="splash-images" src={product.photoUrl} alt="" />
          </div>
          <div className="product-info">
          {'$'}{product.price}          
          </div>
        </Link>      
    </div>
  );
};

export default ProductIndexItem;
