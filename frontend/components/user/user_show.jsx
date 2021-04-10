import React from 'react'




import UserProductIndexContainer from '../product_index/user_product_index_container'



import Greeting from "../greeting/greeting"

class UserShow extends React.Component{
    constructor(props) {
        super(props)
        
        this.loggedIn = this.loggedIn.bind(this)
    }

    render(){
        return(
            <div className="store-container">
                <div className="user-shop">Your Store</div>
                <h2 className="welcome-name">Welcome back, {currentUser.username}!</h2>
                
                
                <div> <UserProductIndexContainer /> </div>
            
            
            
            </div>
        )
    }

}

export default UserShow