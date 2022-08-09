// Declaro un Array con las monedas disponibles

const arrayMonedas = ["DOLAR", "EURO", "REAL"];
let buscarMoneda = prompt("Ingrese la moneda que desea cambiar para validar que se encuentre en el sistema").toUpperCase();
let posMoneda = arrayMonedas.indexOf(buscarMoneda);

// Condicional para checkear que la moneda se encuentra disponible

if(posMoneda > -1){
    alert("La moneda " + buscarMoneda + " se encuentra disponible para la consulta")
}else{
    alert("La moneda que ingresó no se encuentra en nuestro sistema!");
}
console.log(buscarMoneda);
console.log(posMoneda);
console.log(typeof buscarMoneda);
console.log(typeof posMoneda);
// Declaro el objeto constructor

function monedas (var1, var2){
    this.moneda = var1;
    this.cantidad = var2;
}

// Declaro las variables

let currency = prompt("Ingrese el tipo de moneda (DOLAR, EURO, REAL)").toUpperCase()
let cantidad = parseFloat(prompt("Ingrese la cantidad que desea cambiar"));
let impuesto = 1.65;
console.log(currency);
console.log(cantidad);

// Declaro el new objeto
const moneda1 = new monedas(currency, cantidad);


// Declaro la variable de la función y la función que realiza la conversión
let conversor = 0;

function convertir(conversor) {
    if (currency == "DOLAR") {
       conversor = (cantidad * 138.50) * impuesto;
    }else if (currency == "EURO"){
        conversor = (cantidad * 134.40) * impuesto;
    }else if (currency == "REAL"){
        conversor = (cantidad * 25.05) * impuesto;
    }else{
        alert("No ingreso los datos correspondientes!");
    }
    return conversor;
}

// Salida de datos con el total de la operación

alert("El total a pagar con impuestos incluidos es de $" + convertir(conversor));
