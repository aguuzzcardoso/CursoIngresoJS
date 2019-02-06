function mostrar()
{
//tomo la edad  
var edad = document.getElementById("edad").value;
    if (edad > 17)
        alert("Es mayor de edad");
    if (edad > 12 && edad < 18)
        alert("es adolescente")
    else 
        alert("es menor de edad")
    


}//FIN DE LA FUNCIÓN