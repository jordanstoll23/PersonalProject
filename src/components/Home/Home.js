import React, {Component} from 'react';
import './Home.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        validator: '',
        NewsPrice: '',
        startDate: '',
        endDate: '',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { validator, NewsPrice, startDate, endDate } = steps;
        console.log(this.props)
      this.setState({ validator, NewsPrice, startDate, endDate});
      console.log(this.state)
    }
  
    render() {
      const { validator, NewsPrice, startDate, endDate} = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Summary</h3>
          <table>
            <tbody>
              <tr>
                <td>stock</td>
                <td>{validator.value}</td>
              </tr>
              <tr>
                <td>News/Price</td>
                <td>{NewsPrice.value}</td>
              </tr>
              <tr>
                <td>Start Date</td>
                <td>{startDate.value}</td>
              </tr>
              <tr>
                <td>End Date</td>
                <td>{endDate.value}</td>
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
              message: 'Please enter the stock abbreviation you would like to search',
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
            Commands
          </span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>These are the command you can give StockBot</h2>
        <p> 
          senlvisentbilsretnfvsintid
          sfnbjklsvdnfvisdnfbilsvdfnlsid
          fjnisdfnvisbdfnvinrstendjfnvslj
          nvaonvosndf
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
          senlvisentbilsretnfvsintidsf
          nbjklsvdnfvisdnfbilsvdfnlsidfjni
          sdfnvisbdfnvinrstendjfnvsljnvaon
          vosndf
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