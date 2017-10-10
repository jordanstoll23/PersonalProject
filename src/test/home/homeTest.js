const assert = require('chai').assert;
const Home = require('../../src/components/Home/Home.js');

describe('Home', function(){
    it('Url should be updated with user unput of stock', function(){
        var baseUrl = baseUrl;
        assert.equal(baseUrl, 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20("')
    });

    it('should return as a string', function(){
        var baseUrl = baseUrl;
        assert.typeOf(baseUrl, 'string');
})
});