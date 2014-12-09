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
<p>Once you have all the dependencies installed, before you can view it in the browser, you will need to run <code>npm run develop</code> or <code>npm run build</code> to generate the bundles the html and router is expecting to load.</p>
<h2>Development</h2>
<p>webpack is configured to run off of npm scripts but you can also just run webpack itself.  For development, run:</p>
<pre lang="text">
<code>npm run develop</code>
</pre>
<p>This will run webpack -p -d --watch. This minifies the bundle, generates source maps, and starts a watch for modified files to rerun webpack -p -d when something gets updated.</p>
<p>With webpack, just run <code>webpack</code>.</p>
<h2>Build</h2>
<p>To generate a build, run:</p>
<pre lang='text'>
<code>npm run build</code>
</pre>
<p>This runs webpack -p. So it will not include source maps or run a watch command. It will output the bundles and all necessary assets(html files, images, and libraries) into a build directory next to the src directory.</p>
<p>With webpack, set the ENV=prod and run with the minify flag.<code>ENV=prod webpack -p</code></p>
<h2>Adding more entry points and pages</h2>
<ol>
<li>Add a new route in the Routes.js file located in app/js/utils.</li>
<li>Add the route to the router in Application.js in app/js/components</li>
<li>Content.js in src/app/js/components is where to load the new bundle. Add a case to the switch statement in componentDidMount.</li>
<li>Add another entry in the webpack.config.js in the root directory of this project under module.exports.entry</li>
<li>Finally you will need to create a new React component and rebuild.
</li>
</ol>
<h2>Commons Chunk Plugin</h2>
<p>The commons chunk plugin is enabled but so far no pages have common modules.  As this develops and common modules start popping up.  Add a script tag to the index.html page in src/ and build/ pointing to '/app/bundles/common.js'. 