/* global define, module, exports, window, location, Event, history */
(function (win) {


	// NOTE:: Handle Required/Optional Parameters in Route

	/**
	*	Constructor
	*	@param {object} routes
	*/
	function Router(routes) {

		// Validate Required Options
		if (!('onhashchange' in win)) {
			throw new Error("Browser not supported. See documentation for supported browsers.");
		}

		// Keep Track of Routes Here
		this._routes = routes || {};

		// Cache which scripts have been loaded if routes callbacks are paths for scripts
		this._scriptCache = {};

		this._loaded = true;

		if (!this._routes.default) {
			this._routes.default = "/";
		}

	}

	Router.prototype.start = function () {
		
		// Setup the event
		win.addEventListener('hashchange', this.handleHashChange.bind(this));

		// Set the Base URL
		var url = location.href;
		if (url.search('#') > -1) {
			this.base = url.split('#')[0] + '#' + this._routes.default;
			win.dispatchEvent(new Event('hashchange'));
		} else {
			this.base = url + '#' + this._routes.default;
			location.href = this.base;
		}

	};

	/*
		listener for window onhashchange
	*/
	Router.prototype.handleHashChange = function () {		
		this.update(this._getRoute());
	};

	/*
		@param {object} route
		@param {function} callback
	*/
	Router.prototype.add = function (route, callback) {
		this._routes[route] = callback;
		return this;
	};

	/*
		@param {string} route
	*/
	Router.prototype.update = function (newRoute) {
		// If the route is blank, set it to default
		if (newRoute === '' || newRoute === undefined) {
			newRoute = this._routes.default;
		}

		// Get Matching Route Information
		var match = this._getMatch(newRoute);

		// Get Query Parameters if any and stash them 


		// Dispatch the callback
		if (typeof match.callback === "function") {
			match.callback.call(this, match.route, match.params);
		}

	};

	/*
		return Object match including newRoute, matched route, and callback
	*/
	Router.prototype._getMatch = function (newRoute) {
		// Get current route in Array
		var routes = [],
				candidates;

		// Get Configured Routes into an Array
		for (var route in this._routes) {
			if (route !== 'default' && this._routes.hasOwnProperty(route)) {
				routes.push(route);
			}
		}
		// Get potential candidates
		candidates = getCandidatesFromRoutes(routes, newRoute);
		// return Route Info for matching candidate
		return getRouteInfo(candidates, newRoute, this._routes);
	};

	// /*
	// 	@param {string} name
	// 	@param {string} value
	// */
	// Router.prototype._setParameter = function (name, value) {
		
	// };

	// /*
	// 	@param {string} name
	// 	@return String
	// */
	// Router.prototype._getParameter = function (name) {
		
	// };

	/* 
		return current route		
		@return String
	*/
	Router.prototype._getRoute = function () {
		return this._loaded ? location.href.split('#')[1] : new Error('Router not created.');
	};



	/* PRIVATE FUNCTIONS */
	function getCandidatesFromRoutes(routes, newRoute) {
		var newPieces = newRoute.split('/'),
				candidates = [],
				matchingFunction,
				routePieces;

		matchingFunction = function (piece, index) {
			// If the piece is the same, or the route in 
			// this section is a parameter, mark result true
			if (piece === newPieces[index]) { return true; }
			if (piece.charAt(0) === ':') { return true; }
			return false;
		};

		routes.forEach(function (route) {
			routePieces = route.split('/');
			if (routePieces.length !== newPieces.length) { return; }
			if (!routePieces.every(matchingFunction)) { return; }
			candidates.push(route);
		});
		return candidates;
	}

	/*
		@param {array} candidates array of potential matches
		@param {string} newRoute, newRoute
		@param {object}  routeConfig provided by user on instantiation
		return Object matching information to be used later by the router
	*/
	function getRouteInfo(candidates, newRoute, routeConfig) {
		// Go through all the candidates, whichever has the highest direct match count is the match
		// if there are no candidates, return the default information
		if (candidates.length === 0) {
			return {
				route: routeConfig.default,
				callback: routeConfig[routeConfig.default],
				params: {}
			};
		} else {

			var newPieces = newRoute.split('/'),
					highestMatchCount = -1,
					currentMatchCount,
					params,
					match;

			candidates.forEach(function (potential) {
				currentMatchCount = 0;
				params = {};
				potential.split('/').forEach(function (piece, index) {
					if (piece.charAt(0) !== ':') { 
						currentMatchCount++; 
					} else {
						params[piece.slice(1)] = newPieces[index];
					}
				});
				if (currentMatchCount > highestMatchCount) {
					match = {
						route: potential,
						callback: routeConfig[potential],
						params: params
					};
				}
			});
			return match;
		}
	}
	/* PRIVATE FUNCTIONS */

	
	
	module.exports = Router;

})(window);