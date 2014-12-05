/** @jsx React.DOM */
var MapController = require('./MapController');
/* jshint ignore:start */
module.exports = React.createClass({

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