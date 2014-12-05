(function () {

	var HomePage = require('./HomePage'),
			React = require('react');

	React.renderComponent(new HomePage(), document.getElementById('home-page'));

})();