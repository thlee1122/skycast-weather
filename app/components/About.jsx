var React = require('react');

// var About = React.createClass({
//   render: function () {
//   	return (
//   		<h3>About Component</h3>
//   	)
//   }
// });

var About = (props) => {
  	return (
  		<div id="about-page">
  			<h1 className="text-center page-title">About</h1>
  			<p><strong>Skycast Weather</strong> is weather application, where users can search weathers by location and gain current weather and 7 days forecasts.</p>
  			<p>
  				<strong>Here are some of the tools I have used:</strong>
  			</p>

  			<ul>
  				<li>
  					<a href="https://facebook.github.io/react/">React</a> - This was the JavaScript framework used to build this application.
  				</li>

  				<li>
  					<a href="https://developers.google.com/maps/">Google Map API - Geolocation API</a> - I used Google Map API - geolocation API to retrieve location information of the inputter location in the search bar.
  				</li>

          <li>
            <a href="https://developer.forecast.io">Dark Sky API (Weather API)</a> - I used Dark Sky API, weather API to retrieve current and future weather conditions of the inputted location.
          </li>
  			</ul>
  		</div>
  	)
}

module.exports = About;
