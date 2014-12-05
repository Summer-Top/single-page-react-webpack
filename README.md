# Single Page Application with React.js and Leaflet, and built with webpack.

<h2>Installation</h2>
<p>You need to have nodejs and webpack installed.</p>
<h4>Installing node.js</h4>
<p>View the <a href='http://nodejs.org' target='_blank'>node.js</a> homepage.</p>
<h4>Installing webpack</h4>
<p>View <a href='http://webpack.github.io/docs/tutorials/getting-started/' target='_blank'>webpack getting started</a> for instructions.</p>
<p>To install all the remaining dependencies just clone the repo and run:</p>
<pre lang="text">
<code>npm install</code>
</pre>
<p>or if necessary:</p>
<pre lang="text">
<code>sudo npm install</code>
</pre>
<h2>Development</h2>
<p>webpack has been configured to run in two npm scripts.  The first is for develop.</p>
<pre lang="text">
<code>npm run develop</code>
</pre>
<p>This will run webpack with the -p -d --watch flags.  This will minify the bundle(-p), generate source maps(-d), and keep a watch for modified files to rerun webpack -p -d when something gets updated.</p>
<h4>Viewing the source code in the browser:</h4>
<p>Once the bundle's have been generated with <code>npm run develop</code>
then you can view the code on your local webserver. The code generates output in the src/ directory and can be run via the index.html in the /src directory.</p>
<h2>Production</h2>
<p>The second npm script is for generating a bulid in a separate directory so it is easy to zip up the built application and deploy it wherever. To generate a build, run:</p>
<pre lang='text'>
<code>npm run build</code>
</pre>
<p>This will run webpack with only the -p flag. So it will not include source maps or run a watch command. It will output the bundles and all necessary assets(html files, images, and libraries) into a build directory next to the src directory to make for easy deployment.</p>
<h4>Viewing the source code in the browser:</h4>
<p>Once the bundle's have been generated with <code>npm run build</code>
then you can view the code on your local webserver. The code can be run via the index.html in the /build directory.  Inside the directory you will see a structure like below</p>
<pre lang='text'><code>/build
/build/index.html
/build/app
</code></pre>
<p>If you are deploying some of the code then you need the index.html and all the contents in the app directory.</p>
<h2>Adding more entry points and pages</h2>
<p>You will need run through the following steps to add additional pages to the application.  Currently, for the example I have a homepage, a map page containing a leaflet map, and an about page.  You can use the below steps as a guide or look at how those three pages are added in for an example.</p>
<ol>
<li>Add a new route in the Routes.js file located in src/app/js/utils/Routes.js.</li>
<li>Add the route to the router in Application.js in src/app/js/components/Application.js like so:<p><pre><code>AppRouter.add(routes.about, this.routeChanged);</code></pre></p></li>
<li>Add a new page-container to the Content.js component in src/app/js/components/Content.js and a case to the switch case statement in `componentDidMount` function.  You will see three examples of the home, map, and about pages already there you can use as a reference.</li>
<li>Add another entry in the webpack.config.js in the root directory of this project.  Under module.exports.entry like below: <p><pre><code>entry: {
  bundle: "./src/app/js/App.js",
  mapBundle: "./src/app/pages/map/mapEntry.js",
  homeBundle: "./src/app/pages/home/homeEntry.js",
  aboutBundle: "./src/app/pages/about/aboutEntry.js"
}</code></pre></p></li>
<li>Finally we can add some code for the new page.  You will need to create an entry file and a top level React component.  View the src/app/pages directory to see more examples. If you look in src/app/pages/home you will see an entry file like so (this is the one your entry from step 4 is pointing to)<p><pre><code>(function () {
	var HomePage = require('./HomePage'),
		React = require('react');
	React.renderComponent(new HomePage(), document.getElementById('home-page'));
})();</code></pre></p> and then create your top level component(HomePage in this example).
<p><pre><code>/** @jsx React.DOM */
/* jshint ignore:start */
module.exports = React.createClass({
	render: function () {
		return (
			&lt;div className='home'>
				Im Home
			&lt;/div>
		);
	}
});
/* jshint ignore:end */
</code></pre></p>
</li>
<li>Rebuild and enjoy. This is a single page architecture so the header and footer are constant and never reloaded. The Content component replaces it's content with the correct page when that page's route is selected. The pages developed are the center panel of the site and do not need to include a header and footer.</li>
</ol>
<h2>Commons Chunk Plugin</h2>
<p>The commons chunk plugin is enabled but so far no pages have common modules.  As this develops and common modules start popping up.  Add a script tag to the index.html page in src/ and build/ pointing to '/app/bundles/common.js'. 