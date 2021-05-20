import React from 'react';
import ProductIndexItem from '../products/product_index_item';


class OrderForm extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){     
      this.props.requestOrders()
    }

    handleDelete(id){
      this.props.removeOrder(id)
      this.props.deleteOrder(id)
    }

render(){

  if(!this.props.products){return null}
  if(!this.props.orderItems){return null}
  let orderProducts = []
  for (let j=0; j < this.props.orderItems.length; j++){ 
   if( this.props.orderItems[j].user_id === this.props.currentUserId){

  for(let i=0; i < this.props.products.length; i++){    
    if(this.props.orderItems[j].product_id === this.props.products[i].id){
      orderProducts.push([this.props.products[i], this.props.orderItems[j].id])
    }
    }
  }
  }
  return(
    <div>
    {orderProducts.length > 0 && this.props.currentUserId
    ? <div>You have {orderProducts.length} items in your cart
    {orderProducts.map( product =>{
     
      return(  
        <div key={Math.floor((product[1]+3) * 100000 * Math.random())}>
        <ProductIndexItem
        key={Math.floor((product[1]+1) * 100000 * Math.random())}
        product={product[0]}      
        currentUserId={this.props.currentUserId}   
        />        
       <button onClick={()=> this.handleDelete(product[1])}>Remove from cart</button>       
        </div>                    
        )
      })}
      </div>
    : this.props.currentUserId
    ? <div className="empty-cart">Your Cart is Empty</div>
    : <div className="empty-cart">Please sign in to add items to your cart</div>
    }

    </div>
    )
}

}

export default OrderForm