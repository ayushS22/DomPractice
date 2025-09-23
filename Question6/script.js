 const form = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const errorMsg = document.getElementById('errorMsg');
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission

      const email = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
      } else {
        errorMsg.style.display = 'none';
        successMsg.style.display = 'block';

        
      }
    });