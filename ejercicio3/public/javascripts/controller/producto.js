(function() {
	angular
		.module('tienda')
		.controller('ProductoController', [ '$scope', 'ProductoService', ProductoController ]);

	var ProductoController = function($scope, productoService) {

		var init = function() {
			console.log('init');
			productoService.obtenerTodos(function(productos) {
				console.log('callback');
				$scope.productos = productos;
				$scope.$apply();
			});
		};

		init();
	};
})();