(function() {
	'use strict';

	/**
	* mudu Module
	*
	* Description
	*/
	angular.module('mudu', [
		'mudu.routes',
		'mudu.config',
		'mudu.services',
		'mudu.controllers'
		]);

	angular.module('mudu.routes', ['ui.router']);
	angular.module('mudu.config', []);
	angular.module('mudu.services', []);
	angular.module('mudu.controllers', []);
	
})();