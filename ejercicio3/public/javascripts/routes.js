'use strict';

(function() {
	angular
		.module('tienda')
		.config([ '$routeProvider', RouteConfig ]);	

	function RouteConfig($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'inicio.html',
			controller: 'ProductoController'
		});

		$routeProvider.when('/producto', {
			templateUrl: 'producto.html',
			controller: 'ProductoController'
		});

		$routeProvider.when('/catalogo', {
			templateUrl: 'catalogo.html'
		});

		$routeProvider.when('/carrito', {
			templateUrl: 'carrito.html'
		});

		$routeProvider.otherwise('/');
	}
})();