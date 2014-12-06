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

React.render(<HomePage />, document.getElementById('home-page'));
/* jshint ignore:end */