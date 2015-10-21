function ProductoUtil() {
	var URL_BASE = "/productos";

	this.agregar = function(p) {
		// TODO Implementar
	};

	this.modificar = function(p) {
		// TODO Implementar
	};

	this.eliminar = function(id) {
		// TODO Implementar
	};

	this.obtener = function(id) {
		// TODO Implementar
	};

	this.obtenerTodos = function(llamamePaTras) { 
		$.ajax(URL_BASE, { 
			type: 'GET',
			dataType: 'json' 
		}).done(llamamePaTras);
	};

}
