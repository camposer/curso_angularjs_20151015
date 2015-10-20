Ejercicio #1
============

##Objetivo

Repasar los conceptos básicos de JavaScript y orientación a objetos

##Actividades

1.- Cree una clase Producto con los siguientes atributos: id, nombre, precio y cantidad. 

2.- Cree una clase ProductoUtil que ofrezca las 4 operaciones CRUD+ (Create-Update-Read-Delete-List) sobre Producto: 
	- agregar(p : Producto) : void
	- modificar(p : Producto) : void
	- eliminar(id : Long) : void
	- obtener(id : Long) : Producto
	- obtenerTodos() : Producto[]

Pista:
```
function ProductoUtil() {
	var productos = [];

	this.obtenerProductos = function() { 
		return productos; 	
	};
		
	// ...
}
```

3.- Implementar el CRUD+ de producto siguiendo el mockup (ejercicio2.pdf)

4.- Eliminar la clase Producto. Refactorizar el código para que ahora los objetos de datos sigan el formato JSON. Por ejemplo:

```
var productoUtil = new ProductoUtil();
productoUtil.agregar({
	nombre: 'TV',
	precio: 700
});
```
