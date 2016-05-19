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