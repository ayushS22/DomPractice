 const input = document.getElementById("myInput");

    input.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        alert("You typed: " + input.value);
      }
    });

/*     Adds an event listener to the input field.

It listens for the "keydown" event, which occurs when a key is pressed down.

The function(event) is the callback function that runs when the event occurs.

The event parameter contains information about the key press. */

/* Checks if the key that was pressed is the "Enter" key.

If it is, then the code inside the block runs. */