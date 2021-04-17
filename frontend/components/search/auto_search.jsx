import React from 'react';
import {Link, Redirect} from "react-router-dom"

export default class AutoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inV: '',
      redirect:false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectTitle = this.selectTitle.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    this.props.requestProducts();
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({redirect: true});
  }

  handleInput(event) {
    this.setState({inV: event.currentTarget.value});
  }

  filters() {
    const results = [];    
    if (this.state.inV.length === 0) {
      return this.props.titles.sort();
    }
    this.props.titles.forEach(title => {
      let section = title[0].slice(0, this.state.inV.length);
      if (section.toLowerCase() === this.state.inV.toLowerCase()) {
        results.push(title);        
      }
    });
    if (results.length === 0) {
      results.push(['No result...']);
    }

    return results;
  }

  selectTitle(event) {
    const title = event.currentTarget.innerText;
    this.setState({inV: title});
  }

  render() {
    if(this.state.redirect && this.filters().length){
      return(
        <div>
          <Redirect to={`/products/${this.filters()[0][1]}`}/> 
          {this.setState({
      inV: '',
      redirect:false,
    })}         
        </div>
      )
      
    }
 
    const results = this.filters().map((result, i) => {
      if (i <= 5) {
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
      value={this.state.inV}
      onKeyDown={(e) => (e.which == 13 ? this.handleSubmit(e) :null)  }
      />     
      
      <button className="search-bar-button" onClick={(e)=>this.handleSubmit(e)}> 
      <div className="search-bar-icon"/>
      </button>
        <ul className="floating-list">       
          {results}      
        </ul>
      </div>
      </div>
    );
  }
};
