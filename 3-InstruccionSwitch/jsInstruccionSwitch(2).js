function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño){
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Ya pasamos el frio, hace un calor de cagarse lpm!!!");
            break;
        case "Julio":
        case "Agosto":
            alert("Abrigate que hace frio perro!!");
            break;
        default:            
            alert("Falta para el invierno");
            break;
    }
}//FIN DE LA FUNCIÓN