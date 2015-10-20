function ProductoUtil() {
	var productos = [];
	var contador = 1;

	this.agregar = function(p) {
		p.id = contador++;
		productos.push(p);
	};

	var buscarPos = function(id) {
		for (var i in productos)
			if (productos[i].id == id)
				return i;
	};

	this.modificar = function(p) {
		var pos = buscarPos(p.id);
		if (pos)
			productos[pos] = p;
	};

	this.eliminar = function(id) {
		var pos = buscarPos(id);
		if (pos)
			productos.splice(pos, 1);
	};

	this.obtener = function(id) {
		var pos = buscarPos(id);
		if (pos)
			return productos[pos];
	};

	this.obtenerTodos = function() { 
        	return productos;   
	};

}
