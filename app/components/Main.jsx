var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  //Set initial state for userName & hasLoggedIn
  getInitialState: function () {
    return {
      userName: '',
      hasLoggedIn: false,
      historyLog: []
    }
  },

  //when a user type in the login Id in the login Id input box and press sign in button, it will trigger this handlesubmit function
  //it will set the userName to inputted login Id and set the hasLoggedIn to true
  handleSubmit: function (name) {
    this.setState({
      userName: name,
      hasLoggedIn: true
    })
  },

  //When a user click on the logout button in the nav bar, it will set the hasLoggedIn to 'false' and username to empty
  logout: function () {
    this.setState({
      hasLoggedIn: false,
      userName: ''
    })
  },

  updateHistoryLog: function(location) {
    this.setState((prevState, props) => {
      const historyLog = prevState.historyLog;
      const time = new Date();
      historyLog.push({location, time});
      return { historyLog: historyLog }
    })
  }, 

  render: function() {
    // it is a replacement for {this.props.children}; this renders all child elements of a component
    // it adds the props of the parent element, when it renders the child component; each child component has the access to the state of the parent component
    var childrenWithParentProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        userName: this.state.userName,
        historyLog: this.state.historyLog,
        handleSubmit: this.handleSubmit,
        updateHistoryLog: this.updateHistoryLog
      })
    })

  	return (

  		<div>
        	<Nav hasLoggedIn={this.state.hasLoggedIn} logout={this.logout} />

        	<div className="row">
        		<div className="columns medium-6 large-4 small-centered">
        			{childrenWithParentProps}
        		</div>
        	</div>
        	
      	</div>
  	) 
  }
})

module.exports = Main;
