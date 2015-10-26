'use strict';

(function() {
	angular
		.module('tienda')
		.service('ProductoService', ProductoService);

	function ProductoService() {
		var URL_BASE = "/productos";

		this.agregar = function(p, callback) {
			$.ajax(URL_BASE, {
				type: "post",
				contentType: "application/json",
				data: JSON.stringify(p)
			}).done(callback);
		};

		this.modificar = function(p, callback) {
			$.ajax(URL_BASE + "/" + p.id, {
				type: "put",
				contentType: "application/json",
				data: JSON.stringify(p)
			}).done(callback);
		};

		this.eliminar = function(id, callback) {
			$.ajax(URL_BASE + "/" + id, {
				type: "delete"
			}).done(callback);
		};

		this.obtener = function(id, callback) {
			$.ajax(URL_BASE + "/" + id, { 
				type: 'GET',
				dataType: 'json' 
			}).done(callback);
		};

		this.obtenerTodos = function(llamamePaTras) { 
			$.ajax(URL_BASE, { 
				type: 'GET',
				dataType: 'json' 
			}).done(llamamePaTras);
		};
		
	};
})();