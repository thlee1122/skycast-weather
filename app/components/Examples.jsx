var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function () {
//   	return (
//   		<h3>Examples Component</h3>
//   	)
//   }
// });

var Examples = (props) => {
  	return (
  		<div id="example-page">
  			<h1 className="text-center page-title">Examples</h1>
  			<p><strong>Here are a few locations to try out:</strong> </p>
  			<ol>
  				<li>
  					<Link to="/?location=Boston">Boston, MA</Link>
  				</li>
  					
  				<li>
  					<Link to="/?location=Austin">Austin, TX</Link>
  				</li>
  			</ol>
  		</div>
  	)
}

module.exports = Examples;
