// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const eventCards = document.querySelectorAll('.event-card');
const buttons = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');
const footer = document.querySelector('footer');

// Toggle dark mode class
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  eventCards.forEach(card => card.classList.toggle('dark-mode'));
  buttons.forEach(btn => btn.classList.toggle('dark-mode'));
  inputs.forEach(input => input.classList.toggle('dark-mode'));
  footer.classList.toggle('dark-mode');
});
