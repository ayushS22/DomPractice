const toggleBtn = document.getElementById("btn");
const image = document.getElementById("myImage");

toggleBtn.addEventListener("click", function () {
  if (image.style.display === "none") {
    image.style.display = "block";
    toggleBtn.textContent = "Hide Image";
  } else {
    image.style.display = "none";
    toggleBtn.textContent = "Show Image";
  }
});
// explaination
/* if (image.style.display === "none")

This checks if the image is currently hidden using inline style display: none;

If it is hidden, then...

image.style.display = "block";

We show the image again by setting its display to "block" (or "inline" also works).

Now the image becomes visible. */