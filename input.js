const btn = document.getElementById("btn");
const color = document.querySelector("#color");

btn.addEventListener("click", function(){
 const newColour = color.value; 
 document.querySelector("body").style.backgroundColor = "#" + newColour;
});