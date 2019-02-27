function mostrar()
{
  var precioInicial = prompt("Cuanto sale la habitacion?");
  precioInicial = parseInt(precioInicial);
  var metodoPago = prompt("Cual es el metodo de pago?");
  var paquete = ("Que paquete quiere?");
  var precioFinal ;

  switch(metodoPago){
    case "visa":
    case "mercadoPago":
      precioInicial = precioInicial * 0.9;
      break;
    case "paypal":
      precioInicial = precioInicial * 0.85;
      break;
    case "efectivo":
      precioInicial = precioInicial * 0.8;
        break;
    default:
      precioInicial = precioInicial * 0.95;
      break;
  }


}
