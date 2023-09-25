let arrayVariable = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let arrayLength = arrayVariable.length;

let temp;

for (i = 0; i < arrayLength; i++) {
  temp = document.createElement("div");
  temp.setAttribute('onclick', 'alert("You picked a number! If there were images, you would be redirected")');
  temp.className = "results";
  temp.innerHTML = arrayVariable[i];
  document.getElementById("div").appendChild(temp);
}
