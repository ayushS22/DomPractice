   let count = 0;

    function updateDisplay() {
      document.getElementById('count').textContent = count;
    }

    function increment() {
      count++;
      updateDisplay();
    }

    function decrement() {
      count--;
      updateDisplay();
    }