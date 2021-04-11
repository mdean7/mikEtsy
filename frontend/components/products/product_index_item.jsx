import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product, deleteProduct, currentUserId }) => {
  // const restrictedDelete = (product) => {
  //   return currentUserId && currentUserId === product.user_id
  //     ? deleteProduct(product.id)
  //     : null;
  // };
  return (
    <div>
      <li>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
        {/* <Link to={`/products/${product.id}/edit`}>Edit</Link> */}
        {/* <button onClick={()=> deleteProduct(product.id)}>Delete</button> */}
        {/* <button onClick={() => restrictedDelete(product)}>Delete</button> */}
      </li>
    </div>
  );
};

export default ProductIndexItem;
