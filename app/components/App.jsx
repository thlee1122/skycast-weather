// var React = require('react');
// var Login = require('Login');
// var Weather = require('Weather');


// var App = React.createClass({
//   getInitialState: function () {
//     return {
//       displayLogin: false,
//       displayWeather: true,
//       userName: ''
//     }
//   },

//   handleSubmit: function (e) {
//     e.preventDefault();

//     var name = this.refs.username.value;
    
//     this.setState({
//       userName: name
//     })
    
//     if (username.length > 0) {
//       this.refs.username.value = '';
//     }
//   },

//   render: function () {
//     console.log('****************', this.userName)
//    return (
//       <div>
//         {this.displayLogin && <Login onSumbit={this.handleSubmit}/>}

//         {this.displayWeather && <Weather/>}
//       </div>
//    )
//   }
// });


// module.exports = App;
