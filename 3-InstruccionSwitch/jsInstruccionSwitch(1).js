function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño) {
        case "Enero":
            alert("que comiences bien el año!!!.");
            break;
        case "Marzo":
            alert("a clases!!");
            break
        case "Julio":
            alert("se vienen las vacaciones")
            break
        case "Diciembre":
            alert("Felices fiestas");
        default:
            alert("El año no termina mas la puta madre!!1")
    }
}