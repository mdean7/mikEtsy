import React from 'react';
import ProductIndexItem from '../products/product_index_item';


class OrderForm extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
      this.props.requestOrders()
    }
 
render(){

  if(!this.props.products){return null}
  let orderProducts = []
  for(let i=0; i < this.props.products.length; i++){  
    if(this.props.products[i].id === (this.props.orderItems[this.props.orderItems.length - 1]).product_id){
      orderProducts.push(this.props.products[i])
    }
  }
  return(
    <div>
    <div>
      You have {orderProducts.length} item in your cart
    </div>
    {orderProducts.length > 0 
    ? orderProducts.map( product =>{
      return(        
        <ProductIndexItem
        key={product.id * Math.random()*1000}
        product={product}      
        currentUserId={this.props.currentUserId}
        />
        )
    })
    : <div className="empty-cart">Your Cart is Empty</div>
    }
    </div>
    )
}

}

export default OrderForm