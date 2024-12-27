document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card_select');

  cards.forEach(card => {
      card.addEventListener('click', function() {
          // Remove 'active' class from all cards
          cards.forEach(c => c.classList.remove('active'));

          // Add 'active' class to the clicked card
          card.classList.add('active');
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const colorElements = document.querySelectorAll('.select_color');

  colorElements.forEach(colorElement => {
      colorElement.addEventListener('click', function() {
          // Remove 'active' class from all color elements
          colorElements.forEach(el => el.classList.remove('active'));

          // Add 'active' class to the clicked color element
          colorElement.classList.add('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card_amar');

  cards.forEach(card => {
      card.addEventListener('click', function() {
          // Remove 'active' class from all cards
          cards.forEach(c => {
              if (c !== card) {
                  c.classList.remove('active');
              }
          });

          // Toggle 'active' class for the clicked card
          card.classList.toggle('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('checkbox');
  checkbox.addEventListener('click', function(event) {
      event.preventDefault();
  });
});