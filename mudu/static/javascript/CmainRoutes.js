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