/** @jsx React.DOM */
var React = require('react');
require('styl/header.styl');
/* jshint ignore:start */
module.exports = React.createClass({
	render: function () {
		return (
			<div className="application-header">
				<div className="application-links">
					<a href='#/' className='application-page-link'>Home</a>
					<a href='#/map' className='application-page-link'>Leaflet Map</a>
					<a href='#/about' className='application-page-link'>About</a>
				</div>
			</div>
		);
	}
});
/* jshint ignore:end */