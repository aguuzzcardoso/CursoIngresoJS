/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno = document.getElementById("numeroUno").value;
    var numeroDos = document.getElementById("numeroDos").value;
    var resultado = parseInt(numeroUno) + parseInt(numeroDos);
    alert(resultado);
}

