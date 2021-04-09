import React from "react";

class ProductsShow extends React.Component {
  constructor(props) {
    super(props); 
  }

  

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div >
    <div className="divideBar"></div>  
      <div className="recentImages"></div>
      </div>
    );
  }
}

export default ProductsShow;