/** @jsx React.DOM */
var React = require('react'),
		routes = require('utils/Routes'),
		baseScriptPath = 'app/',
		pages = {};

function loadScript(src) {
	var s = document.createElement('script'),
			h = document.getElementsByTagName('head')[0];
	s.src = src;
	s.async = true;
	h.appendChild(s);	
}

/* jshint ignore:start */
module.exports = React.createClass({

	componentWillReceiveProps: function (nextProps) {

		/*
		 * If we have been here before, dont load the bundle
		 */
		if (pages[nextProps.page]) { return; }

		pages[nextProps.page] = true;

		switch (nextProps.page) {
			case routes.map:
				loadScript(baseScriptPath + '/bundles/mapBundle.js');
			break;
			case routes.home:
				loadScript(baseScriptPath + '/bundles/homeBundle.js');
			break;
			case routes.about:
				loadScript(baseScriptPath + '/bundles/aboutBundle.js');
			break;
		}

	},

	render: function () {
		return (
			<div className='application-page-container'>
				<div id='map-page' className={ 'application-page relative' + (this.props.page === routes.map ? '' : ' hidden') }></div>
				<div id='home-page' className={ 'application-page relative' + (this.props.page === routes.home ? '' : ' hidden') }></div>
				<div id='about-page' className={ 'application-page relative' + (this.props.page === routes.about ? '' : ' hidden') }></div>
			</div>
		);
	}

});
/* jshint ignore:end */