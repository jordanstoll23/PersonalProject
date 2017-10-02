import React, {Component} from 'react';
import './Home.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';

var yahooFinance = require('yahoo-finance');
var util = require('util');
require('colors');

class Review extends Component {
    constructor(props) {
      super(props);
    this.state = {
        baseUrl2: '")&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=',
        baseUrl: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20("',
        validator: this.props.steps.validator,
        NewsPrice: this.props.steps.NewsPrice,
        startDate: this.props.steps.startDate,
        endDate: this.props.steps.endDate,
        stockInfo: {}
      };
    }
  



    componentDidMount() {
    //   const { validator, NewsPrice, startDate, endDate } = this.props.steps;
    //   this.setState({ validator, NewsPrice, startDate, endDate});
      var urlUpdater= this.state.baseUrl + this.props.steps.validator.value + this.state.baseUrl2;
      console.log(urlUpdater);
      axios.get(urlUpdater)
      .then((response) => { 
          console.log(response);
        this.setState({
            stockInfo: response.data
        })
        });
       
    };

  
    render() {
      const { validator, NewsPrice, startDate, endDate} = this.state;
      console.log(this.state.stockInfo);
      return (
        <div style={{ width: '100%' }}>
          <h3>Summary</h3>
          <table>
            <tbody>
              <tr>
                <td>Company Name</td>
                {this.state.stockInfo.query?<td>{this.state.stockInfo.query.results.quote.Name}</td>:null}
              </tr>
              <tr>
                <td>Ask price</td>
                {this.state.stockInfo.query?<td>{this.state.stockInfo.query.results.quote.Ask}</td>:null}
              </tr>
              <tr>
                <td>percent Change</td>
                {this.state.stockInfo.query?<td>{this.state.stockInfo.query.results.quote.Change}</td>:null}
              </tr>
              <tr>
                <td>P/E Ratio</td>
                {this.state.stockInfo.query?<td>{this.state.stockInfo.query.results.quote.PERatio}</td>:null}
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  Review.propTypes = {
    steps: PropTypes.object,
  };
  
  Review.defaultProps = {
    steps: undefined,
  };
  
  class SimpleForm extends Component {
    render() {
      return (
  <div>
    <div>
      <div className="pimg1">
        <div className="ptext">
          <span className="border">
            Stock Market Assistant
          </span>
        </div>
      </div>
      
      <section className="section section-light">
        <h2>Check how your stocks are doing</h2>
        <div>
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Before we get started, Please enter your name so I can get to know you a little better.',
              trigger: '1-2'
            },
            {
              id:'1-2',
              user:true,
              trigger: '2'
            },
            {
              id: '2',
              message: 'Hello {previousValue}, Please enter the stock abbreviation you would like to search. If you want to look at a list of Popular companies, Look below the Chat.',
              trigger: 'validator',
            },
            {
              id:'validator',
              user: true,
              trigger: '3',
              validator: (value) => {
                if (value === 'Todd') {
                  return 'Todd(QuestionMark?)';
                } else if (value === 'your stupid') {
                  return "you're* Do I have to keep going? ";
                } else if (value === 'damn') {
                  return 'Todd would not approve of that language..';
                } else
  
                return true;
              },
            },
            {
              id: '3',
              message: 'I will gather information on {previousValue}! would you like recent news, or current stock price?',
              trigger: 'NewsPrice',
            },
            {
              id: 'NewsPrice',
              options: [
                { value: 'News', label: 'News', trigger: '7' },
                { value: 'Price', label: 'Price', trigger: '7' },
              ],
            },
            {
              id: '7',
              message: 'Please enter the date you want to start tracking price ex. 2017-05-10',
              trigger: 'startDate'
            },
            {
              id: 'startDate',
              user: true,
              trigger: '8',
            },
            {
              id: '8',
              message:'Please enter the date you want to start tracking price ex. 2017-07-10',
              trigger: 'endDate',
            },
            {
              id: 'endDate',
              user: true,
              trigger:'9'
            },
            {
              id: '9',
              message: 'Great! Check out your summary',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Is there another stock I can search for you?',
              trigger: 'secondStock',
            },
            {
              id: 'secondStock',
              options: [
                { value: 'yes', label: 'Yes', trigger: '1' },
                { value: 'no', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'update-yes',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Name', trigger: 'update-name' },
                { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                { value: 'age', label: 'Age', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: '7',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '7',
            },
            {
              id: 'end-message',
              message: 'Thanks! Hope to see you again soon',
              end: true,
            },
          ]}
        />
        </div>
      </section>
      
      <div className="pimg2">
        <div className="ptext">
          <span className="border">
            Common Stocks
          </span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>These are the top 20 most traded stocks</h2>
          <p> 
            <ul>
              <li>Bank of America (BAC)</li>	
              <li>Rite Aid (RAD)</li>
              <li>Oracle (ORCL)</li>	
            </ul>
            <ul>
              <li>Enterprise Products Partners (EPD)</li>
              <li>General Electric (GE)</li>	
              <li>Ambev ADR (ABEV)</li>
            </ul>
          </p>
          <p>
            <ul>
        	    <li>Ford Motor (F)</li>	
        	    <li>Sterling Bancorp (STL)</li>	
        	    <li>Vale ADR (VALE)</li>	
            </ul>
            <ul>
              <li>Chesapeake Energy (CHK)</li>	
              <li>AT&T (T)</li>	
              <li>Snap (SNAP)</li>
            </ul>
          </p>	
          <p>
            <ul>
              <li>Wells Fargo (WFC)</li>	
              <li>Transocean (RIG)</li>	
              <li>Freeport-McMoRan (FCX)</li>	
            </ul>
            <ul>
              <li>Calpine (CPN)</li>
              <li>Pfizer (PFE)</li>
              <li>Weatherford International (WFT)</li>
            </ul>
            <ul>
              <li>ENSCO (ESV)</li>
              <li>Marathon Oil (MRO)</li>
            </ul>
          </p>
      </section>

      <div className="pimg3">
        <div className="ptext">
          <span className="border">
          Built using the latest technologies
          </span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Built using the latest technologies</h2>
       
          <p> 
          <img src='./../../assets/reactRedux.jpg'/>
            This app was built using the new Javascript Framework, React. this allows me to easily creating a stunning website with its advantages such as components and easy setup.
          </p>
          <p>
            NODE.JS while  React is the framework I built this app on, 
            I also used Node.js in partnership with Axios and Massive, to help me 
            communicate bettwwen not only my front and backend, but also the Yahoo! 
            Finance API I used to gatrher the stocks after user input in the ChatBot.
          </p>
          <p>
            SQL-to handle the saving of peoples recently searched stocks, I have chosen SQL as my database language to prepare myself for the job force, as many companies rely on SQL to communicate with thier database.
          </p>
          <p>
            Other Technologies also used in this project: bootstrap, Parralax, Redux, Auth0, Sessions,  
          </p>                                                                          
      </section>

      <div className="pimg1">
        <div className="ptext">
          <span className="border">
          STOCK MARKET ASSISTANT
          </span>
        </div>
      </div>
    </div>
  </div>
      );
    }
  }
  
//   export default SimpleForm;

function mapStateToProps(state){
    return {
 
    }
}

export default connect(mapStateToProps)(SimpleForm)