document.addEventListener('DOMContentLoaded', () => {
  // Page 1 Elements
  const yesButton = document.getElementById('yes');
  const noButton = document.getElementById('no');
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');
  const backgroundMusic = document.querySelector('audio');

  // Preload the audio file
  backgroundMusic.load();

  // Function to move the "No" button randomly
  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  };

  // Move the "No" button when hovered
  noButton.addEventListener('mouseover', moveNoButton);

  // Play music and move the "No" button when clicked
  noButton.addEventListener('click', () => {
    backgroundMusic.play(); // Play music after user interaction
    moveNoButton(); // Move the button randomly
  });

  // Play music and show Page 2 when "Yes" is clicked
  yesButton.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
    backgroundMusic.play(); // Play music after user interaction
  });

  // Page 2 Logic
  const confirmButton = document.getElementById('confirm');
  confirmButton.addEventListener('click', () => {
    const activity = document.getElementById('activity').value;

    // Store the selected activity in local storage
    localStorage.setItem('selectedActivity', activity);

    // Redirect to Calendly
    const calendlyLink = `https://calendly.com/bernardjbalinas`;
    window.location.href = calendlyLink;
  });

  // Clear local storage on page load
  localStorage.removeItem('selectedActivity');
});
