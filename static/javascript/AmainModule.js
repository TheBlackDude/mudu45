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