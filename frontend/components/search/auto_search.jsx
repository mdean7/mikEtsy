import React from 'react';
import {Link} from "react-router-dom"

export default class AutoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.selectTitle = this.selectTitle.bind(this);
    this.handleInput = this.handleInput.bind(this);
    
  }

  componentDidMount(){
    this.props.requestProducts();
  }



  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const matches = [];
    
    if (this.state.inputVal.length === 0) {
      return this.props.titles.sort();
    }

    this.props.titles.forEach(title => {
      const sub = title[0].slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(title);
        
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectTitle(event) {
    const title = event.currentTarget.innerText;
    this.setState({inputVal: title});
  }

  render() {
    const results = this.matches().map((result, i) => {
      if (i <= 5) {
        console.log(result)
      return (
        <Link key={i} to={`/products/${result[1]}`}>
          <li key={i} onClick={this.selectTitle}>{result[0]}</li>
        </Link>
      );}
    });
    return(
      <div className="parent-search-container">
     
     <div className="search-bar-container">
      <input 
      className="search-bar" 
      type="search" 
      placeholder="Search for anything"
      onChange={this.handleInput}
      value={this.state.inputVal}
      />     
      
      <button className="search-bar-button"> 
      <div className="search-bar-icon"/>
      </button>
        <ul className="floating-list">
         {/* <Link to={`/products/${}`}> */}
         {results}
         {/* </Link>  */}
        </ul>
      </div>
      </div>
    );
  }
};
