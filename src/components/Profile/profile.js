import React, {Component} from 'react';
import '../../index.css';
import {connect} from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios';
import cors from 'cors';

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            stocks: []
        }
    }
    
    
    componentDidMount(){
        
        axios.get(`/api/stocks/`)
        .then ( response => {
            console.log(response.data)
            this.setState({
                stocks: response.data
            })
        })
    }
    
    
    
    
    render(){
           const mapStocks = this.state.stocks.map( stock => {
                return (
                    <div key={stock.id} onClick={()=>{
                        axios.delete(`/api/stocks/:${stock.stock}`)
                        console.log(stock, "hello")
                    }} >
                        {stock.stock}
                    </div>
                )
            })
        return(
    <div id="top">
        <nav className="topnav" id="myTopnav">
            <div>
                <Link to="home#top" className='navBarText'>Home</Link>
                <Link to="home#tech">Technology Used</Link>
                <Link to="home#stocks">Common Stocks</Link>
                <a href="#Profile" className='navBarText'>Profile</a>
            </div>
            <div className='contact'>
                <a href="mailto:jordanstoll88@gmail.com"> <i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/jordan-stoll" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://github.com/jordanstoll23" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
            </div>
        </nav>
            <div className='profileHero'>
            <img src='https://static.pexels.com/photos/147408/pexels-photo-147408.jpeg' className='profileImg' alt=""/>
            </div>
        <div className="ptext">
          <span className="border">
            Your Saved Stocks
          </span>
          <div className="stocks">
          {mapStocks}
          </div>
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