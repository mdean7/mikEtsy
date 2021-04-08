import React from "react";

class NotFound extends React.Component {
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

    // const NoMatchPage = () => {
    //   return (
    //     <div className='error-img'>
        
    //     </div>
    //   );
    // };    

    return (
      <div className='error-img'>
        
      </div>
    );
  }
}

export default NotFound;