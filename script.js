// Page 1: Valentine's question
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
});

document.getElementById('noButton').addEventListener('click', function() {
    const noButton = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Page 2: Time picker, activity picker, and confirmation
document.getElementById('confirmButton').addEventListener('click', function() {
    const selectedTime = document.getElementById('timePicker').value;
    const selectedActivity = document.getElementById('activityPicker').value;

    if (selectedTime && selectedActivity) {
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.textContent = `You selected: ${selectedTime} for a ${selectedActivity}. Sounds perfect! 💖`;
        confirmationMessage.style.display = 'block';
    } else {
        alert("Please select both a time and an activity!");
    }
});