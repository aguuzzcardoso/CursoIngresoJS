/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()
{
    var numeroUno = document.getElementById("numeroUno").value;
    var numeroDos = document.getElementById("numeroDos").value;
    var resultado = parseInt(numeroUno) + parseInt(numeroDos);
    alert(resultado);
}

function restar()
{
    parseInt(numeroUno);
    parseInt(numeroDos);
    resultado = numeroUno - numeroDos;
    alert(resultado);

}

function multiplicar()
{
    parseInt(numeroUno);
    parseInt(numeroDos);
    resultado = numeroUno * numeroDos;
    alert(resultado);
}

function dividir()
{    
    parseInt(numeroUno);
    parseInt(numeroDos);
    resultado = numeroUno / numeroDos;
    alert(resultado);
}