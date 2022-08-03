/*  ENTRADA

    PROCESO

    SALIDA
*/


// Declaro un objeto con las monedas y su valor de cambio

const monedas = {
    dolar: 138.5,
    euro: 134.4,
    real: 25.05,
    cop: 32.6,
    clp: 14.5,
};


// Entrada de datos

let moneda = prompt('Ingrese el tipo de moneda a la que desea convertir: \n (DOLAR-EURO-REAL-COP-CLP) ').toUpperCase;
let cantidad = parseFloat(prompt("Ingrese la cantidad que desea convertir: "));



// Funcion para sacar el total sin impuestos

function convertir() {
    if(moneda == "DOLAR"){
        (monedas.dolar * cantidad) * 1.65;
        return;
    } else if (moneda == "EURO"){
        (monedas.euro * cantidad) * 1.65;
    } else if (moneda == "REAL"){
        (monedas.real * cantidad) * 1.65;
    } else if (moneda == "COP") {
        (monedas.cop * cantidad) * 1.65;
    } else if (moneda === "CLP") {
        (monedas.clp * cantidad) * 1.65;
    }
}

console.log(convertir());
alert("El total a pagar con impuestos es " + convertir() );


