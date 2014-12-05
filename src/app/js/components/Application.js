/* @jsx React.DOM */
var Router = require('utils/Router'),
		routes = require('utils/Routes'),
		Content = require('./Content'),
		Footer = require('./Footer'),
		Header = require('./Header'),
		React = require('react');

/* jshint ignore:start */
module.exports = React.createClass({

	getInitialState: function () {
		return {
			page: routes.home
		}
	},

	componentDidMount: function (){

		AppRouter = new Router();
		AppRouter.add(routes.map, this.routeChanged);
		AppRouter.add(routes.home, this.routeChanged);
		AppRouter.add(routes.about, this.routeChanged);
		AppRouter.start();

	},

	render: function () {
		return (
			<div className="root">
				<Header />
				<Content page={this.state.page} />
				<Footer />
			</div>
		);
	},

	routeChanged: function (route) {
		for (var key in routes) {
			if (routes[key] === route) {
				this.setState({ page: routes[key] });
			}
		}
	}


});
/* jshint ignore:end */