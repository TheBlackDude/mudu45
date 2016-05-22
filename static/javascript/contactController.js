(function() {
	'use strict';
	angular.module('mudu.controllers')
	.controller('ContactCtrl', ['$scope', 'Api', function($scope, Api){
		var vm = this;

		vm.post = post;

		function post() {
			Api.post(vm.name,vm.email,vm.company,vm.message);

			setTimeout(function(){
				vm.name = '';
				vm.email = '';
				vm.company = '';
				vm.message = '';
			}, 100)
		}

	}]);
})();