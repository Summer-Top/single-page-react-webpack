(function () {

	var MapPage = require('./MapPage'),
			React = require('react');

	require('styl/map.styl');
	React.renderComponent(new MapPage(), document.getElementById('map-page'));

})();