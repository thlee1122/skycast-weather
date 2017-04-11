var React = require('react');
var { hashHistory } = require('react-router');

var Login = React.createClass({
  //onSubmiit function to get inputted username information and initiate "this.props.handleSubmit" function, located in Main.jsx
  onSubmit: function (e) {
    e.preventDefault();
    var username = this.refs.username.value;
    
    //if there is inputted username, initiate "this.props.handleSubmit" and set the user ID input box to be empty
    if (username.length > 0) {
      this.refs.username.value = '';
      this.props.handleSubmit(username)
    }
    //hash history to redirect to the main page
    hashHistory.push("/");
  },

  render: function () {
   return (
     <div id="login-page">
        <form onSubmit={this.onSubmit}>
               <label><strong>Login</strong><input type="search" ref="username" placeholder="Type Login ID" id="login"></input></label>
               <label><strong>Password</strong><input type="password" ref="password" placeholder="Type Password" id="password"></input></label>
               <button className="button expanded hollow">Sign In</button>
        </form>
      </div>
   )
  }
});


module.exports = Login;