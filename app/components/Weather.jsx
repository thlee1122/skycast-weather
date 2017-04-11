var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
// var openWeatherMap = require('openWeatherMap');
var axios = require('axios');


var Weather = React.createClass({
    getInitialState: function () {
      return {
        isLoading: false,
        city: undefined,
        neighborhood: undefined,
        errorMessage: undefined,
        setLocation: undefined,
        temp: undefined,
        summary: undefined,
        forecast: undefined,
        location: undefined
      }
    },

  //take location from user input to output lat, lng, city, neighborhood info using Google GeoCode API.
  geocodeCall: function(location) {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyA9nh5crm_pn55Ryf_Tu6kbpvy4ywgrZVk`)
      .then((info) => {
        //store user location data returned from api call in res.locals

        var lat = info.data.results[0].geometry.location.lat;
        var lng = info.data.results[0].geometry.location.lng;
        var city = info.data.results[0].address_components[2].long_name;
        var neighborhood = info.data.results[0].address_components[2].long_name;
        
        this.setState({
          city: city,
          neighborhood: neighborhood,
          location: location
        })

        return {
          lat,
          lng,
          city,
          neighborhood
        }
        })
      //put the data into location variable aand pass it onto darkSky API
      .then((location) => {
        this.darkSkyCall(location)
      })
      .catch((err) => {
        console.log(err);
      });
  },

  //use data from geocodeCall funtion to plug into darksky api to get weather data for user's inputted location.
  darkSkyCall: function(location) {
    axios.post('/api/darksky', location)
    .then((res => res.data))
    .then((weather) => {
      //round temp to get rid of decimals for UX
        var temp = Math.round(weather.currently.temperature);
        var summary = weather.currently.summary;
        var forecast = weather.daily.data;

        console.log(forecast);
        
        this.setState({
          temp: temp,
          summary: summary,
          forecast: forecast,
          isLoading: false 
        })
    })
    .catch((err) => {
        console.log(err);
    })
  },

  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true,
    });

    this.geocodeCall(location)


  },

  // ***************Example Locations**************************************
  componentDidMount: function() {
    var location = this.props.location.query.location;

    //remove location query from the address bar after it has been ran
    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  //This will receive the new props (new location) that has been set up by search bar in the navigation bar
  //Without this, it would not update weather on the main page.
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;

    //remove location query from the address bar after it has been ran
    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  render: function () {
    var {isLoading, temp, errorMessage, summary, forecast, city, neighborhood, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp) {
        return <WeatherMessage temp={temp} summary={summary} forecast={forecast} city={city} neighborhood={neighborhood} location={location}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div id="weather-page">
        <h1 className="text-center page-title">Get Weather</h1>
        {/* Get the username information display on the screen with welcome message*/}
        <h3 className="text-center page-title">Welcome to Skycast Weather {this.props.userName}</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
