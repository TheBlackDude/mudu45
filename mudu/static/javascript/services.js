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

		function post(name,email,company,message) {
			return $http.post('/api/about/', {
				name: name,
				email: email,
				company: company,
				message: message
			}).success(function(data) {
				Snackbar.show('<p id="snackbar">message sent successfully</p>');

				setTimeout(function(){
					window.location = '/';
				}, 3000);
				
			}).error(function(err) {
				Snackbar.error(err);
			});
		}

		return Api;
	}]);

})();