var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	onSearch: function(e) {
		e.preventDefault();
		
		var location = this.refs.search.value;
		var encodedLocation = encodeURIComponent(location);

		if(location.length > 0) {
			this.refs.search.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		}

	},

	render: function() {
		console.log('hasLoggedIn', this.props.hasLoggedIn)
		return (
		  	<div className="top-bar">
		  		<div className="top-bar-left">
		  			<ul className="menu">
		  				<li className="menu-text">Skycast Weather</li>
		  				<li>
		  					<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
		  				</li>
		  				<li>
		  					<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
		  				</li>

		  				<li>
		  					<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
		  				</li>

		  				{/* When hasLoggenIn property from the main.jxs is set to "false", it will show "login" button */}
		  				{!this.props.hasLoggedIn && <li>
		  						<Link to="/login" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Login</Link>
		  				</li>}

		  				{/* When hasLoggenIn property from the main.jxs is set to "true", it will show "logout" button */}
		  				{this.props.hasLoggedIn && <li>
		  						<Link to="/login" activeClassName="active" activeStyle={{fontWeight: 'bold'}} onClick={this.props.logout}>Logout</Link>
		  				</li>}
		  			</ul>
		  		</div>

		  		<div className="top-bar-right">
		  			<form onSubmit={this.onSearch}>
		  				<ul className="menu">
		  					<li>
		  						<input type="search" placeholder="Search Weather by City" ref="search"/>
		  					</li>

		  					<li>
		  						<input type="submit" className="button" value="Get Weather"/>
		  					</li>
		  				</ul>
		  			</form>
		  		</div>
		  	</div>
		);
	}
})

module.exports = Nav;




