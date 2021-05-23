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

  handleUpdate(value, order) {
    order.total = value;
    this.props.updateOrder(order, order.id);
  }

  handleCheckout() {
    for (let i = 0; i < this.props.orderItems.length; i++) {
      if (this.props.orderItems[i].user_id === this.props.currentUserId) {
        this.handleDelete(this.props.orderItems[i].id);
      }
    }
    this.props.openModal('purchased')
  }

  render() {
    let subtotal = 0;
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
      <div className="cart-container">
        {orderProducts.length > 0 && this.props.currentUserId ? (
          <div>
            <div className="items-in-cart">
              {orderProducts.length}{" "}
              {orderProducts.length === 1 ? "item" : "items"} in your cart
            </div>
            {orderProducts.map((product) => {
              subtotal += product[0].price * product[1].total;
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
                        order={product[1]}
                        currentUserId={this.props.currentUserId}
                      />
                      <div className="cart-info">
                        <div className="order-title">{product[0].title} </div>
                        <div className="order-description">
                          {product[0].description}{" "}
                        </div>
                      </div>
                    </div>
                    {/* {product[1].total} */}
                    <div className="select-and-remove">
                      <div className="product-total">
                        <select
                          className="total-select"
                          onChange={(e) =>
                            this.handleUpdate(e.target.value, product[1])
                          }
                        >
                          <option value={product[1].total}>
                            {product[1].total}
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <button onClick={() => this.handleDelete(product[1].id)}>
                        Remove
                      </button>
                      <div className="total-per-item">
                        {"$" + product[0].price * product[1].total}
                      </div>
                      <div className="per-item">
                        {product[1].total > 1
                          ? "($" + product[0].price + " each)"
                          : ""}
                      </div>
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
        <div className="checkout-box">
          How you'll pay
          <br />
          <div className="radio-pay">
            <input name="cards" type="radio" />
            <label>
              <div className="card1"></div>
            </label>
          </div>
          <br />
          <div className="radio-pay">
            <input name="cards" type="radio" />
            <label>
              <div className="card2"></div>
            </label>
          </div>
          <br />
          <div className="radio-pay">
            <input name="cards" type="radio" />
            <label>
              <div className="card3"></div>
            </label>
          </div>
          <br />
          <div className="subtotals">
            <div className="subtotal-actual">Item(s) total</div>
            <div className="subtotal-actual">{"$" + subtotal}</div>
          </div>
          <div className="dividing-bar"></div>
          <div className="subtotals">
            <div className="subtotal-text">Subtotal</div>
            <div className="subtotal-actual">{"$" + subtotal}</div>
          </div>
          <div className="shippings subtotals">
            <div className="shipping-text subtotal-actual">Shipping</div>
            <div className="shipping-actual subtotal-actual free">FREE</div>
          </div>
          <div className="tiny-text">(To United States)</div>
          <br />
          <button
            onClick={() => this.handleCheckout()}
            className="show-cart-button"
            type="submit"
            value="Submit"
          >
            Proceed to checkout
          </button>
          <div className="fine-print">
            * Additional duties and taxes may apply
          </div>
        </div>
      </div>
    );
  }
}

export default OrderForm;
