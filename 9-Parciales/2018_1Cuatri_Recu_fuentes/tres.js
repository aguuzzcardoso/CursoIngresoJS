function mostrar()
{
    var cantAmigos = prompt("Cuantos amigos son?");
    var precio = prompt("Cual es el precio total en la factura?");
    var precioPropina = (precio * 1.1) / cantAmigos;
    var precioSinIVA = (precio * 0.79) / cantAmigos;
    alert("Deben pagar " + precioPropina + " cada uno y el importe de cada uno sin IVA es "+ precioSinIVA);

}
