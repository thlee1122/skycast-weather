var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var Login = require('Login');
var SearchHistory = require('app/components/SearchLog.jsx');

//Load foundation (Style loader, CSS loader)
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App (Style) CSS
require('style!css!applicationStyles')


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	<Route path="about" component={About}/>
    	<Route path="examples" component={Examples}/>
      <Route path="history" component={SearchHistory}/>
    	<Route path="login" component={Login}/>
      {/* Weather component is the main component (main page), which renders weatherForm & weatherMessage components */}
    	<Route path="Weather" component={Weather}/>
    	<IndexRoute component={Weather}/> 
    </Route>
  </Router>,
  document.getElementById('app')
);
