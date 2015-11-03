'use strict';

(function() {
	angular
		.module('tienda')
		.controller('CarritoController', [ '$scope', 'CarritoService', CarritoController ]);

	function CarritoController($scope, carritoService) {
		var init = function() {
			$scope.carrito = carritoService.obtenerProductos();
		};

		init();
	};

})();