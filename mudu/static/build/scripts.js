(function() {
	'use strict';

	/**
	* mudu Module
	*
	* Description
	*/
	angular.module('mudu', [
		'mudu.config',
		'mudu.routes',
		'mudu.snack',
		'mudu.services',
		'mudu.controllers'
		]);

	angular.module('mudu.config', []);
	angular.module('mudu.routes', ['ui.router']);
	angular.module('mudu.snack', []);
	angular.module('mudu.services', []);
	angular.module('mudu.controllers', []);
	
})();
(function() {
	'use strict';
	angular.module('mudu.config')
	.config(['$locationProvider', function($locationProvider) {
		$locationProvider.html5Mode('true');
	}])
	.run(['$http', function($http){
		$http.defaults.xsrfHeaderName = 'X-CSRFToken';
		$http.defaults.xsrfCookieName = 'csrftoken';
	}]);

})();
(function() {
	'use strict';
	angular.module('mudu.routes')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
		    .state('/', {
		    	url: '/',
		    	templateUrl: '/static/templates/home.html',
		    	controller: 'HomeCtrl',
		    	controllerAs: 'vm'
		    })
		    .state('about', {
		    	url: '/about',
		    	templateUrl: '/static/templates/about.html',
		    	controller: 'AboutCtrl',
		    	controllerAs: 'vm'
		    })
		    .state('contact', {
		    	url: '/contact',
		    	templateUrl: '/static/templates/contact.html',
		    	controller: 'ContactCtrl',
		    	controllerAs: 'vm'
		    });
		$urlRouterProvider.otherwise('/');
	}]);

})();
(function($, _) {
	'use strict';
	angular.module('mudu.snack')
	.factory('Snackbar', [function() {
		var Snackbar = {
			show: show,
			error: error
		}

		function _snackbar(content, options) {
			options = _.extend({timeout: 3000}, options);
			options.content = content;

			$.snackbar(options);
		}

		function error (content, options) {
			_snackbar("Error: " + content, options);
		}

		function show (content, options) {
			_snackbar(content, options);
		}

		return Snackbar;

	}]);

})($, _);
(function() {
	'use strict';
	angular.module('mudu.controllers')
	.controller('HomeCtrl', ['$scope', function($scope){
		var vm = this;
		vm.text = 'Hi, I am MuDu45 or You Can Call Me TheBlackDude';
	}]);

})();
(function() {
	'use strict';
	angular.module('mudu.services')
	.factory('Api', ['$http', 'Snackbar', function($http, Snackbar){
		var Api = {
			get: get,
			post: post,
			info: []
		};

		function get() {
			return $http.get('/api/about/').success(function(data){
				angular.copy(data, Api.info);
			});
		}

		function post(content) {
			return $http.post('/api/about/', content).success(function(data) {
				Snackbar.show('message sent successfully');
			}).error(function(err) {
				Snackbar.error(error);
			});
		}
	}]);

})();