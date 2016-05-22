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