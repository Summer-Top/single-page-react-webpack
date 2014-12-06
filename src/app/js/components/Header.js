/** @jsx React.DOM */
var React = require('react');
require('styl/header.styl');
/* jshint ignore:start */
module.exports = React.createClass({

	componentDidMount: function () {
		//alert(isMobile);
	},

	render: function () {
		return (
			<div className="application-header">
				<nav className="application-links">
					<a href='#/' className='application-page-link'>Home</a>
					<a href='#/map' className='application-page-link'>Map</a>
					<a href='#/about' className='application-page-link'>About</a>
				</nav>
			</div>
		);
	}
});
/* jshint ignore:end */