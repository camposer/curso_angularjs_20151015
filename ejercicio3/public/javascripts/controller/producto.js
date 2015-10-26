'use strict';

(function() {
	angular
		.module('tienda')
		.controller('ProductoController', [ '$scope', 'ProductoService', ProductoController ]);

	function ProductoController($scope, productoService) {
		$scope.init = function() {
			productoService.obtenerTodos(function(productos) {
				$scope.productos = productos;
				$scope.$apply(); // actualiza la vista para los cambios realizados sobre el scope!
			});
		};
	};

})();