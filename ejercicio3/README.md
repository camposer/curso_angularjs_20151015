Ejercicio #3
============

##Objetivo

Repasar los conceptos de AJAX y AngularJS.

##Instrucciones

- Este ejercicio3 tiene una API Rest implementada con NodeJS sobre Express
- Para iniciar el proyecto en Windows:
```
C:EJERCICIO3> node_64.exe app
```
- Para ver cómo funciona la API puede consultar el fichero curl.sh
- Un mockup (espantoso) del ejercicio puede conseguirlo en ejercicio3.pdf

##Actividades


###Parte 1

0. Refactorice el código de producto-json.html (ejercicio 2) para que ahora utilice la API Rest de /productos con jQuery.

NOTA:
- Para ver cómo utilizar la API con jQuery
	http://localhost:3000/ajax.html
- Los ficheros producto.html y sus JS deberá copiarlos dentro de la carpeta public/producto del ejercicio3
- Cambiar el nombre de producto-jquery.html a index.html
- Para ejecutar el proyecto ahora deberá introducir en el navegador:
	http://localhost:3000/producto

###Parte 2

0. Refactorizar el ejercicio 2 utilizando AngularJS y Bootstrap. Debe crear al menos un módulo y un controlador asociado. Los métodos de productoUtil deberá moverlos al controlador (o servicio).
0. Incluir dos directivas, una para el formulario y otra para la vista.

###Parte 3

0. Refactorizar el ejercicio3-parte2 para que utilice la API Rest con jQuery como en el ejercicio3-parte1. IMPORTANTE: Para reflejar los cambios en las vistas sobre los controladores realizados en callbacks, deberá refrescar el scope ($scope.$apply).

###Parte 4

0. Refactorizar el ejercicio3-parte3 para que utilice la API Rest con el servicio $http de AngularJS. Además, se sugiere crear un nuevo principal Tienda que reciba como parámetro (de inyección) el módulo Producto con todas sus dependencias.

###Parte 5

0. Tienda. Ahora debe agregar las pantallas Inicio y Carrito, además del CRUD de producto que ya hicimos en el ejercicio anterior.
0. Para la lógica de almacenamiento del carrito debe utilizar el sessionStorage
NOTA: 
	- Primero implemente la parte visual y luego la parte funcional (sessionStorage)
0. Registre las compras y muestre en el 3er tab un gráfico de tarta (angularjs-chart). Modelo del objeto a enviar:
```
GET /compras
POST /compras
{
	"productoId": 1,
	"nombre": "TV",
    "cantidad": 2
}

POST /compras
{
	"productoId": 2,
	"nombre": "DVD",
    "cantidad": 3
}
```
