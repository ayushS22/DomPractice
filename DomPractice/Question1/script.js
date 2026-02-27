const button = document.getElementById("btn");//selecting button
const paragraph = document.getElementById("para");

button.addEventListener("click",()=>{
  paragraph.textContent = "Hello, DOM!";

});
