(function (win, doc) {

	var React = require('react'),
			Application = require('./components/Application');

	require('styl/app.styl');

	var launch = function () {
		React.renderComponent(new Application(), doc.body);
	};

	win.requestAnimationFrame = (function () {
  	return win.requestAnimationFrame ||
      win.webkitRequestAnimationFrame ||
      win.mozRequestAnimationFrame ||
      win.oRequestAnimationFrame ||
  		win.msRequestAnimationFrame;
  })();

  if (win.requestAnimationFrame) {
    win.requestAnimationFrame(launch);
  } else if (doc.readyState === "loaded") {
    launch();
  } else {
    win.onload = launch;
  }

})(window, document);