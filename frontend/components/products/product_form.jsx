import React from 'react';


class ProductForm extends React.Component {
  constructor(props){
    super(props)
  
    this.state = this.props.product
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.props.submitProduct(this.state)
  }
  
  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }
  
    render () {
   
      return (
        <div>
            <h1>{this.props.formType}</h1>
            <form onSubmit={this.handleSubmit}>
            <label>Title
              <input 
              type="text"
              onChange={this.update('title')}
              value={this.state.title}
              />
              </label>
              <label>Description
              <textarea              
              onChange={this.update('description')}
              value={this.state.description}
              />
              </label>
              <label>Price
              <input 
              type="number"
              min='0'
              onChange={this.update('price')}
              value={this.state.price}
              />
              </label>

              <input type="submit"/>
            </form>
  
        </div>
      );
    }
  }
  export default ProductForm