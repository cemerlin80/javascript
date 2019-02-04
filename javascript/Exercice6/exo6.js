function myFunction() {

  var premiernombre = document.getElementById('firstNumber').value;
  var deuxièmenombre = document.getElementById('secondNumber').value;
  result = parseInt(premiernombre) % parseFloat(deuxièmenombre);

  alert(result);
}
// querySelector nous permet de sélectionner la première occurrence d'un sélecteur CSS //
var bouton = documennt.querySelector('input[type="submit"]');
// On utilise la fonction sans les parenthèses car c'est l'événement qui déclenche l'exécution de la fonction. //
bouton.onclick = reste;
