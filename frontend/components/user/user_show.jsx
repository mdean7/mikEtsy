import React from 'react'
// import Greeting from "../greeting/greeting"

class UserShow extends React.Component{
    constructor(props) {
        super(props)
        
    }

    render( ){
        return(
            <div className="store-container">
                <div className="user-shop">Your Store</div>
                <h2 className="welcome-name">Welcome back, {this.props.currentUser.username}!</h2>                
                <div className="user-product-list-container">

                    <h2>Link user specific products here</h2>
                <ul className="user-product-list-items">
                    <li>I will be a product from a map function later</li>
                    <li>I will be a product from a map function later</li>
                    <li>I will be a product from a map function later</li>
                    <li>I will be a product from a map function later</li>
                    <li>I will be a product from a map function later</li>
                </ul>
            
                </div>
            
            
            </div>
        )
    }

}

export default UserShow