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