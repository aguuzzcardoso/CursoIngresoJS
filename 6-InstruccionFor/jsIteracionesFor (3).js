function mostrar()
{

    var repeat = prompt("ingrese el número de repeticiones");
    repeat = parseInt(repeat);
    var cont; 

    if(!(isNaN(repeat) || repeat < 0)){

        for(cont=0; cont < repeat; cont++){
            alert("Hola UTN FRA")
        }
    }

    else{
        while (isNaN(repeat) || repeat < 0){
        
        repeat = prompt("Ingrese un numero positivo");
        repeat = parseInt(repeat);
        
        for(cont=0; cont < repeat; cont++){
            alert("Hola UTN FRA")
            }
        }   
    }
}