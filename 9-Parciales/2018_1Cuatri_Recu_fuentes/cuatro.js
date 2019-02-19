function mostrar()
{
    var cantLibros = prompt("Cuantos libros son?");
    cantLibros = parseInt(cantLibros);
    var primerImp = prompt("Cual es el total sin descuentos?");
    primerImp = parseInt(primerImp);
    var segundoImp = 0;
    var tarjeta = prompt("Paga con tarjeta? Si o No");
    var importe = 0;

    if (cantLibros > 1 ){
        segundoImp = primerImp * 0.9;
        importe = segundoImp;

        if (primerImp > 1999){
            importe = segundoImp - (primerImp - (primerImp * 0.85));
        }
    }

    else {
        importe = primerImp;
    }
    
    if (tarjeta == "Si"){
        importe = importe * 1.1;
    }

    alert("En total debe pagar "+ importe);
    


}
