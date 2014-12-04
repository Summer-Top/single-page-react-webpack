/** @jsx React.DOM */
var Content = require('./Content'),
		Footer = require('./Footer'),
		Header = require('./Header'),
		React = require('react');

/* jshint ignore:start */
module.exports = React.createClass({
	render: function () {
		return (
			<div className="root">
				<Header />
				<Content />
				<Footer />
			</div>
		);
	}
});
/* jshint ignore:end */