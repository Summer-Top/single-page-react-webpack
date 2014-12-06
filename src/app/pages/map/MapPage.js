/** @jsx React.DOM */
var MapController = require('./MapController'),
		React = require('react');
	
require('styl/map.styl');
	
/* jshint ignore:start */
var MapPage = React.createClass({

	componentDidMount: function () {
		MapController.init();
	},

	render: function () {
		return (
			<div id='leaflat-map'/>
		);
	}

});
/* jshint ignore:end */

React.renderComponent(new MapPage(), document.getElementById('map-page'));