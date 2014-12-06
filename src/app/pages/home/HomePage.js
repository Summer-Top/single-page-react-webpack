/** @jsx React.DOM */
var React = require('react');
/* jshint ignore:start */
var HomePage = React.createClass({

	render: function () {
		return (
			<div className='home'>
				Im Home
			</div>
		);
	}

});
/* jshint ignore:end */
React.renderComponent(new HomePage(), document.getElementById('home-page'));