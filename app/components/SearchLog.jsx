var React = require('react');

var SearchLog = React.createClass({

  render: function () {
    return (
        <div id="searchLog-page">
            <h2>Search History</h2>
            <ol id="search-logs">
                <li>
                </li>
            </ol>
        </div>
        )
    }
});


module.exports = SearchLog;