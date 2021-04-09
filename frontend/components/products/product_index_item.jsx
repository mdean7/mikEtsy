import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({product, deleteProduct}) =>{
return(
  <div>
    <li>
    <Link to={`/products/${product.id}`}>{product.title}</Link>
    <Link to={`/products/${product.id}/edit`}>Edit</Link>
    <button onClick={()=> deleteProduct(product.id)}>Delete</button>

    </li>
  </div>
)
}

export default ProductIndexItem