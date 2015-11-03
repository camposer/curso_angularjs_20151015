'use strict';

(function() {
	angular
		.module('tienda')
		.config([ '$routeProvider', RouteConfig ]);	

	function RouteConfig($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'catalogo.html',
			controller: 'CatalogoController'
		});

		$routeProvider.when('/producto', {
			templateUrl: 'producto.html',
			controller: 'ProductoController'
		});

		$routeProvider.when('/carrito', {
			templateUrl: 'carrito.html'
		});

		$routeProvider.otherwise('/');
	}
})();