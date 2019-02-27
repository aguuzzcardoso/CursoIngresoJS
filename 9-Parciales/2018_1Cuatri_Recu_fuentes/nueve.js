function mostrar()
{
  var animal;
  var temp;
  var peso;

  var tempPar= 0;
  var animalPesado;
  var tempAnimalPesado;
  var cantBajoCero;
  var promTemp;
  var pesoMaxBajoCero;
  var pesoMinBajoCero;


  while(animal != "no"){
    animal = prompt("Ingrese el nombre del animal, de lo contrario ingrese 'no'")
    peso = prompt("Ingrese el peso del animal");
    peso = parseInt(peso);
    temp = prompt("Ingrese la temperatura de habitat del animal");
    temp = parseInt(peso);

    if (peso % 0){
      tempPar++
    }

  }
}
