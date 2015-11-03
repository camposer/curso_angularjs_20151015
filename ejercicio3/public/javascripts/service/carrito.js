'use strict';

(function() {
	angular
		.module('tienda')
		.service('CarritoService', [ '$rootScope', CarritoService ]);

	function CarritoService($rootScope) {
		this.agregarProducto = function(p) {
			if (!$rootScope.carrito)
				$rootScope.carrito = [];

			var encontrado = false;
			for (var i in $rootScope.carrito) {
				var c = $rootScope.carrito[i];

				if (c.id == p.id) {
					var total = c.cantidad + p.cantidad;

					if (total <= 0)
						$rootScope.carrito.splice(i, 1);
					else
						c.cantidad = total;

					encontrado = true;
					break;
				}
			}

			if (!encontrado)
				$rootScope.carrito.push(p);
		};
	};
})();