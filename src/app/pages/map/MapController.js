var leaflet = require('leaflet'),
		map;

module.exports = {

	init: function () {
		require('leaflet-css');
		this.createMap();
	},

	createMap: function () {

		leaflet.Icon.Default.imagePath = './app/libs/leaflet/images';
		map = leaflet.map('leaflat-map').setView([51.505, -0.09], 13);

		leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		leaflet.marker([51.5, -0.09]).addTo(map).bindPopup('A CSS3 Popup. <br /> Easily Customizable.');

	}

};