import React from "react";
import { Link } from "react-router-dom";

const FeaturedProductIndexItem = ({ product}) => {
  return (
    <div className="card-item">      
        <Link to={`/products/${product.id}`}>
          <div className="height-placeholder ports">
          <img className="splash-images ports" src={product.photoUrl} alt="" />
          </div>
      
        </Link>      
    </div>
  );
};

export default FeaturedProductIndexItem;
