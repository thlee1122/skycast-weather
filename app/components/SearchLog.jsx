var React = require('react');

var SearchLog = React.createClass({

  render: function () {
    return (
        <div id="searchLog-page">
            <h2>Search History</h2>
            <ol id="search-logs">
                
                {this.props.historyLog.map((search, index) => {
                    const location = search.location;
                    const time = search.time.toString();
                    return <li key={index}>{location} {time}</li>
                })}
            
            </ol>
        </div>
        )
    }
});


module.exports = SearchLog;