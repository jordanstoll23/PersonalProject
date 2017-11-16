import React, {Component} from 'react';
import '../../index.css';
import {connect} from 'react-redux';

class Login extends Component{
    render(){
        return(
            <div id="top">
                <div className='profileHeroLogin'>
                {<img src='https://images.pexels.com/photos/41301/business-cash-coin-concept-41301.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb' className='profileImg' alt=""/>}
                </div>
            <div className="ptext1">
              <span className="border">
                Please Login to interact with StockBot
              </span>
              {<div className="variation-a">
              <a href="http://stockbotpro.com/auth"><button className="suit_and_tie">Login</button></a>
            </div>}
            </div>
        </div>
            
        )
    }
}

function mapStateToProps(state){
    return {
 
    }
}

export default connect(mapStateToProps)(Login)