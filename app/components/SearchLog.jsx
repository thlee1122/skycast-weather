var React = require('react');

var SearchLog = React.createClass({

  render: function () {
    return (
        <div id="searchLog-page">
            <h1 class="text-center page-title">Search History</h1>
            <ol id="search-logs">
                
                {this.props.historyLog.map((search, index) => {
                    const location = search.location;
                    const time = search.time.toString();
                    return <li key={index}><strong>Location:</strong> {location} <br/> <strong>Searched At:</strong> {time.substring(0,25)} EST</li>
                })}
            
            </ol>
        </div>
        )
    }
});


module.exports = SearchLog;