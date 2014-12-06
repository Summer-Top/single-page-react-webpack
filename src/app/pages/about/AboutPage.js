/** @jsx React.DOM */
var React = require('react');
/* jshint ignore:start */
var AboutPage = React.createClass({

	render: function () {
		return (
			<div className='about'>
				About Me
			</div>
		);
	}

});

React.render(<AboutPage />, document.getElementById('about-page'));
/* jshint ignore:end */