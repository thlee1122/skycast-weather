var React = require('react');

var WeatherMessage = React.createClass({
	
  	render: function () {
      //Receiving below variables/data which are set to props in Weather.jsx component
  		var {temp, city, summary, forecast, neighborhood, location} = this.props;

  		return (
  			<div id="weather-message">
	  			<h3 className="text-center">It's is {temp} °F in {location}, {neighborhood}. It is currently {summary.toUpperCase()}.</h3>
	  			<br/>
          <h3><strong>7 day forecasts:</strong></h3>
          
          <div className="row">
            <div className="small-4 large-4 columns">
              <h4>Day 1</h4>
              <ul>
                <li>
                  Max Temp: {forecast[0].temperatureMax.toString()} °F
                </li>
                <li>
                  Min Temp: {forecast[0].temperatureMin.toString()} °F
                </li>
                <li>
                  Humidity: {forecast[0].humidity.toString()}
                </li>
                <li>
                  Windspeed: {forecast[0].windSpeed.toString()}
                </li>
                <li>
                  Visibility: {forecast[0].visibility.toString()}
                </li>
              </ul>
            </div>

            <div className="small-4 large-4 columns">
              <h4>Day 2</h4>
              <ul>
                <li>
                  Max Temp: {forecast[1].temperatureMax.toString()} °F
                </li>
                <li>
                  Min Temp: {forecast[1].temperatureMin.toString()} °F
                </li>
                <li>
                  Humidity: {forecast[1].humidity.toString()}
                </li>
                <li>
                  Windspeed: {forecast[1].windSpeed.toString()}
                </li>
                <li>
                  Visibility: {forecast[1].visibility.toString()}
                </li>
              </ul>
            </div>
            
            <div className="small-4 large-4 columns">
              <h4>Day 3</h4>
              <ul>
                <li>
                  Max Temp: {forecast[2].temperatureMax.toString()} °F
                </li>
                <li>
                  Min Temp: {forecast[2].temperatureMin.toString()} °F
                </li>
                <li>
                  Humidity: {forecast[2].humidity.toString()}
                </li>
                <li>
                  Windspeed: {forecast[2].windSpeed.toString()}
                </li>
                <li>
                  Visibility: {forecast[2].visibility.toString()}
                </li>
              </ul>
            </div>
          </div>

          {/* Visibility forecast information is not available from day 4 */}
          <div className="row">
            <div className="small-3 large-3 columns">
              <h4>Day 4</h4>
              <ul>
                <li>
                  Max Temp: {forecast[3].temperatureMax.toString()} °F
                </li>
                <li>
                  Min Temp: {forecast[3].temperatureMin.toString()} °F
                </li>
                <li>
                  Humidity: {forecast[3].humidity.toString()}
                </li>
                <li>
                  Windspeed: {forecast[3].windSpeed.toString()}
                </li>
                <li>
                  Visibility: {forecast[3].visibility.toString()}
                </li>
              </ul>
            </div>

            
            <div className="small-3 large-3 columns">
              <h4>Day 5</h4>
              <ul>
                <li>
                  Max Temp: {forecast[4].temperatureMax.toString()} °F
                </li>
                <li>
                  Min Temp: {forecast[4].temperatureMin.toString()} °F
                </li>
                <li>
                  Humidity: {forecast[4].humidity.toString()}
                </li>
                <li>
                  Windspeed: {forecast[4].windSpeed.toString()}
                </li>
              </ul>
            </div>

            <div className="small-3 large-3 columns">
              <h4>Day 6</h4>
              <ul>
                <li>
                  Max Temp: {forecast[5].temperatureMax.toString()} °F
                </li>
                <li>
                  Min Temp: {forecast[5].temperatureMin.toString()} °F
                </li>
                <li>
                  Humidity: {forecast[5].humidity.toString()}
                </li>
                <li>
                  Windspeed: {forecast[5].windSpeed.toString()}
                </li>
              </ul>
            </div>

            <div className="small-3 large-3 columns">
              <h4>Day 7</h4>
              <ul>
                <li>
                  Max Temp: {forecast[6].temperatureMax.toString()} °F
                </li>
                <li>
                  Min Temp: {forecast[6].temperatureMin.toString()} °F
                </li>
                <li>
                  Humidity: {forecast[6].humidity.toString()}
                </li>
                <li>
                  Windspeed: {forecast[6].windSpeed.toString()}
                </li>
              </ul>
            </div>

          </div>


          <h3>Bar Graph on 7 Days Forecast Max Temparature</h3>
          <ul className="bargraph">
              <li className="reddeep" style={{width: forecast[0].temperatureMax + "%"}}>Day 1 {forecast[0].temperatureMax}°F</li>
              <li className="redpink" style={{width: forecast[1].temperatureMax + "%"}}>Day 2 {forecast[1].temperatureMax}°F</li>
              <li className="pink" style={{width: forecast[2].temperatureMax + "%"}}>Day 3 {forecast[2].temperatureMax}°F</li>
              <li className="orangered" style={{width: forecast[3].temperatureMax + "%"}}>Day 3 {forecast[3].temperatureMax}°F</li>
              <li className="orange" style={{width: forecast[4].temperatureMax + "%"}}>Day 4 {forecast[4].temperatureMax}°F</li>
              <li className="yellow" style={{width: forecast[5].temperatureMax + "%"}}>Day 5 {forecast[5].temperatureMax}°F</li>
              <li className="green" style={{width: forecast[6].temperatureMax + "%"}}>Day 6 {forecast[6].temperatureMax}°F</li>
          </ul>

          <br/>
          <h3>Bar Graph on 7 Days Forecast Min Temparature</h3>
          <ul className="bargraph">
              <li className="reddeep" style={{width: forecast[0].temperatureMin + "%"}}>Day 1 {forecast[0].temperatureMin}°F</li>
              <li className="redpink" style={{width: forecast[1].temperatureMin + "%"}}>Day 2 {forecast[1].temperatureMin}°F</li>
              <li className="pink" style={{width: forecast[2].temperatureMin + "%"}}>Day 3 {forecast[2].temperatureMin}°F</li>
              <li className="orangered" style={{width: forecast[3].temperatureMin + "%"}}>Day 3 {forecast[3].temperatureMin}°F</li>
              <li className="orange" style={{width: forecast[4].temperatureMin + "%"}}>Day 4 {forecast[4].temperatureMin}°F</li>
              <li className="yellow" style={{width: forecast[5].temperatureMin + "%"}}>Day 5 {forecast[5].temperatureMin}°F</li>
              <li className="green" style={{width: forecast[6].temperatureMin + "%"}}>Day 6 {forecast[6].temperatureMin}°F</li>
          </ul>
        </div>
      )
    }
});

module.exports = WeatherMessage;


// <h4>7 days forecast: {forecast[0].temperatureMax.toString()}</h4>
          // <h3>Bar Graph on 7 Days Forecast Max Temperature</h3>
          // <div className="graph">
          //   <div style={{height:'22px'}} className="bar"></div>
          //   <div style={{height:'22px'}} className="bar"></div>
          //   <div style={{height: "11px"}} className="bar"></div>
          //   <div style={{height: "6px"}} className="bar"></div>
          //   <div style={{height: "49px"}} className="bar"></div>
          //   <div style={{height: "28px"}} className="bar"></div>
          // </div>