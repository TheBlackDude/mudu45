(function() {
	'use strict';
	angular.module('mudu.controllers')
	.controller('AboutCtrl', ['$scope', 'Api', function($scope, Api){
		var vm = this;
		vm.info = Api.info;
	}]);
	
})();