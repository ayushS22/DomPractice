const input = document.getElementById("input");
const button = document.getElementById("btn");//select button
const unorderedlist = document.getElementById("list");

// Add event listener to the button
button.addEventListener("click", ()=>{
    const storeValue = input.value.trim();//store input values
     // Only add if input is not empty also there should not be space adding thats why i use .trim() string method 
     if(storeValue !== ""){
     const listItem = document.createElement("li");// create element and store it in a variable
     listItem.textContent = storeValue;
     unorderedlist.appendChild(listItem);
      // Clear the input box
      input.value = "";
     }

});

