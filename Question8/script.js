    const paragraph = document.getElementById('myParagraph');
    const button = document.getElementById('changeBtn');

    button.addEventListener('click', function () {
      // Change color and font size
      paragraph.style.color = 'blue';
      paragraph.style.fontSize = '24px';
    });