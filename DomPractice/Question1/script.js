const button = document.getElementById("btn");
const paragraph = document.getElementById("para");

button.addEventListener("click",()=>{
  paragraph.textContent = "Hello, DOM!";
});