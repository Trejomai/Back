/*
estructura de una funcion 
function nombreFuncion(){
    codigo a ejecutar por la funcion
}
*/

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;
let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                = resta(suma(500, iva(500)), 50);
                = resta(suma(500, 105), 50);
                = resta(605, 50);
                = 555;
