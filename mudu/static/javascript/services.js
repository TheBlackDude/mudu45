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