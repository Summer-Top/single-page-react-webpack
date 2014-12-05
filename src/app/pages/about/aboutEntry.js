(function () {
	var AboutPage = require('./AboutPage'),
			React = require('react');
	React.renderComponent(new AboutPage(), document.getElementById('about-page'));
})();