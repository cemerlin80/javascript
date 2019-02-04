function myFunction(){
var age = document.getElementById('age').value;
var age =prompt('Quel est votre âge ?'); // Ne pas oublier : il faut "parser" (cela consiste à analyser) la valeur renvoyée par prompt() pour avoir un nombre !

   if (age<=18) {

      alert("Vous êtes mineur.");

  } else if (age>=18) {

      alert('Vous êtes majeur.');
}
}
