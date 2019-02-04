function myFunction(){
var premiernombre = document.getElementById('firstNumber').value;
var deuxièmenombre = document.getElementById('secondNumber').value;
// parseInt renvoie un entier; parseFloat permet de convertir une variable en nombre décimal //
result = parseInt(premiernombre) * parseFloat(deuxièmenombre);
alert(result);
}
