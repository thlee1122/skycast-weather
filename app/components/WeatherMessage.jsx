var React = require('react');

var WeatherMessage = React.createClass({
	
  	render: function () {
      console.log(this.props);
  		var {temp, city, summary, forecast, neighborhood, location} = this.props;

  		return (
  			<div>
	  			<h3 className="text-center">It's is {temp} °F in {location} {neighborhood}. It is currently {summary.toUpperCase()}.</h3>
	  			
          <div class="row">
          </div>

          
  			</div>
  		)
  	}
});

module.exports = WeatherMessage;


// <h4>7 days forecast: {forecast[0].temperatureMax.toString()}</h4>