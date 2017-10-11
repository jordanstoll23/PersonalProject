import React, {Component} from 'react';
import './profile.css';
import {connect} from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

class Profile extends Component{
    render(){
        return(
    <div>
        <div id="goHere3">
            <nav className="topnav" id="myTopnav">
            <a href="#home#goHere3">Home</a>
            <Link to="home#goHere">Technology Used</Link>
            <Link to="home#goHere2">Common Stocks</Link>
            <a href="#Profile">Profile</a>
            <a href="javascript:void(0);" className="icon" onclick="myFunction()">&#9776;</a>
          </nav>
            </div>
    
        
    </div>
      
        )
    }
}

function mapStateToProps(state){
    return {
 
    }
}

export default connect(mapStateToProps)(Profile)