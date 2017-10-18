import React, {Component} from 'react';
import '../../index.css';
import {connect} from 'react-redux';

class Login extends Component{
    render(){
        return(
            <div>
                <a href="http://stockbotpro.com/auth"><button>Login</button></a>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
 
    }
}

export default connect(mapStateToProps)(Login)