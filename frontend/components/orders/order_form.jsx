import React from "react";
import ProductIndexItem from "../products/product_index_item";

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestOrders();
  }

  handleDelete(id) {
    this.props.removeOrder(id);
    this.props.deleteOrder(id);
  }

  handleUpdate(value, order){
    order.total = value
    this.props.updateOrder(order, order.id)
  }

  render() {
    if (!this.props.products) {
      return null;
    }
    if (!this.props.orderItems) {
      return null;
    }
    let orderProducts = [];
    for (let j = 0; j < this.props.orderItems.length; j++) {
      if (this.props.orderItems[j].user_id === this.props.currentUserId) {
        for (let i = 0; i < this.props.products.length; i++) {
          if (
            this.props.orderItems[j].product_id === this.props.products[i].id
          ) {
            orderProducts.push([
              this.props.products[i],
              this.props.orderItems[j],
            ]);
          }
        }
      }
    }
    return (
      <div className='cart-container'>
        {orderProducts.length > 0 && this.props.currentUserId ? (
          <div>
            {orderProducts.length}{" "}
            {orderProducts.length === 1 ? "item" : "items"} in your cart
            {orderProducts.map((product) => {
              return (
                <div
                  key={Math.floor((product[1].id + 3) * 100000 * Math.random())}
                >
                  <div className="cart-item-container">
                    <div className="card-and-info">

                    <ProductIndexItem
                      key={Math.floor(
                        (product[1].description + 1) * 100000 * Math.random()
                        )}
                        product={product[0]}
                        currentUserId={this.props.currentUserId}
                        />
                    <div className="cart-info">
                      <div>{product[0].title} </div>
                      <div>{product[0].description} </div>
                    </div>
                        </div>
                      {/* {product[1].total} */}
                    <div className="select-and-remove">
                      <div className="product-total">
                        <select className="total-select" onChange={(e)=>this.handleUpdate(e.target.value, product[1])} >
                          <option value={product[1].total}>{product[1].total}</option>
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                        </select>
                      </div>
                        <button onClick={() => this.handleDelete(product[1].id)}>
                          Remove
                        </button>
                        {"$" + product[0].price * product[1].total}
                      </div>
                  </div>
                  {/* above this point you have access to mapped products and order */}
                </div>
              );
            })}





          </div>
        ) : this.props.currentUserId ? (
          <div className="empty-cart">Your Cart is Empty</div>
          ) : (
            <div className="empty-cart">
            Please sign in to add items to your cart
          </div>
        )}
        <div className='checkout-box'>How you'll pay
          <radio></radio>
            

        </div>
      </div>
    );
  }
}

export default OrderForm;
