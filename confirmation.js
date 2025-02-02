// Retrieve the selected activity from local storage
const selectedActivity = localStorage.getItem('selectedActivity');

if (selectedActivity) {
  // Display the selected activity
  document.getElementById('activity-display').textContent = `You chose: ${selectedActivity}`;
} else {
  document.getElementById('activity-display').textContent = 'No activity selected.';
}

