var React = require('react');

var WeatherForm = React.createClass({
  //When the 'Get Weather' button is clicked, it would initiate the onFormSubmit function which triggers 
  //"onSearch" function that is located in Weather.jsx component
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
      this.props.updateHistoryLog(location);
    }
  },
  render: function () {
    return (
        <div>
          {/* Passed down from Weather component */}
          <form onSubmit={this.onFormSubmit}>
            <input type="search" ref="location" placeholder="Search Weather by City"/>
            <button className="button expanded hollow">Get Weather</button>
          </form>
        </div>
    );
  }
});

module.exports = WeatherForm;
