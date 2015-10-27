'use strict';

(function() {
	angular
		.module('tienda')
		.controller('ProductoController', [ '$scope', 'ProductoService', ProductoController ]);

	function ProductoController($scope, productoService) {
		var listar = function() {
			productoService.obtenerTodos(function(productos) {
				$scope.productos = productos;
				$scope.$apply(); // actualiza la vista para los cambios realizados sobre el scope!
			});
		};

		var limpiarForm = function() {
			$scope.producto = {};
		};

		$scope.init = function() {
			listar();
		};

		$scope.guardar = function() {
			var callback = function() {
				limpiarForm();
				listar();
			};

			$scope.errores = [];
			if (!$scope.producto.nombre) // TODO mejorar validación
				$scope.errores.push('Nombre inválido')
			if (!$scope.producto.precio && !angular.isNumber($scope.producto.precio)) // TODO mejorar validación
				$scope.errores.push('Precio inválido')

			if ($scope.errores.length == 0) {
				var p = {
					nombre: $scope.producto.nombre,
					precio: $scope.producto.precio
				};
				if ($scope.producto.id) {
					p.id = $scope.producto.id;
					productoService.modificar(p, callback);
				} else {
					productoService.agregar(p, callback);
				}
			}

		};

		$scope.eliminar = function(id) {
			if (confirm('Eliminar?'))
				productoService.eliminar(id, listar);
		};

		$scope.mostrar = function(p) {
			$scope.producto = p;
		};
	};

})();