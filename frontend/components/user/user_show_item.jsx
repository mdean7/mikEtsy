import React from "react";
import { Link } from "react-router-dom";

const UserShowItem = ({ product, deleteProduct, currentUserId }) => {
  const restrictedDelete = (product) => {
    return currentUserId && currentUserId === product.user_id
      ? deleteProduct(product.id)
      : null;
  };
  return (

          <div className="block-grid-item">
            
            <div className="card">
              <div className="card-body-display-block">
              <Link to={`/products/${product.id}`}>
                <div className="card-img-wrap">
                  <img className="idx-images" src={product.photoUrl} alt="" />
                </div>
                <div className="card-meta-row">
                  <h2 className="card-title">{product.title}</h2>
                </div>
                <div className="card-meta-row">
                  <div className="card-price">{"$"}{product.price}</div>
                </div>
              </Link>
              </div>
              <div className="card-meta-row">
                <div className="card-functions">
                 <div className="edit-icon-container">
                  <div className="card-edit">
                   <button >
                   <Link className="edit-button tooltip" to={`/products/${product.id}/edit`}>                                           
                      <div className="edit-icon" ></div> 
                      <span class="tooltiptext">Manage this listing</span> 
                     </Link>
                   </button>
                      </div>

                  </div>
                  <div className="card-delete">
                    <button onClick={() => restrictedDelete(product)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div> 
  );
};

export default UserShowItem;
