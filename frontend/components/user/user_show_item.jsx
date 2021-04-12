import React from "react";
import { Link } from "react-router-dom";

const UserShowItem = ({ product, deleteProduct, currentUserId }) => {
  const restrictedDelete = (product) => {
    return currentUserId && currentUserId === product.user_id
      ? deleteProduct(product.id)
      : null;
  };
  return (
    <div>
      <li className="user-product-list-item">
        <Link to={`/products/${product.id}`}>
          <img className="idx-images" src={product.photoUrl} alt="" />
          {product.title}
        </Link>
        <br />
        Description: {product.description}
        <br />
        Price: {product.price}
        <br />
        <Link to={`/products/${product.id}/edit`}>Edit</Link>
        <button onClick={() => restrictedDelete(product)}>Delete</button>
      </li>
    </div>
  );
};

export default UserShowItem;
