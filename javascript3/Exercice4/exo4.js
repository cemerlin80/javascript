var motdepasse1 = document.querySelector("#password").value;
var motdepasse2 = document.querySelector("#confirmPassword").value;

function checkPassword(mdp1, mdp2)
{
  if (mdp1 == mdp2)
  {
    return true;
  }
  else
  {
    retrun false;
  }

}
function changeBorder()
{
  if (checkPassword(motdepasse1.value, motdepasse2.value))
  {
    motdepasse1.style.border = "2px solid green";
    motdepasse2.style.border = "2px solid green";
  }
  else
  {
    motdepasse1.style.border = "2px solid red";
    motdepasse2.style.border = "2px solid red";
  }
}
