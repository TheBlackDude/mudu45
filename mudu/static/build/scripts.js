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
		'mudu.services',
		'mudu.controllers'
		]);

	angular.module('mudu.config', []);
	angular.module('mudu.routes', ['ui.router']);
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
		    });
		$urlRouterProvider.otherwise('/');
	}]);

})();
(function() {
	'use strict';
	angular.module('mudu.controllers')
	.controller('HomeCtrl', ['$scope', function($scope){
		var vm = this;
		vm.text = 'Hi, I am MuDu45 or You Can Call Me TheBlackDude';
	}]);

})();