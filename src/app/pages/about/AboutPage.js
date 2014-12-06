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
/* jshint ignore:end */
React.renderComponent(new AboutPage(), document.getElementById('about-page'));