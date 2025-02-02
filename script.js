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

// Page 2: Open Calendly with a fixed date when confirming
document.getElementById('confirmButton').addEventListener('click', function() {
    const selectedActivity = document.getElementById('activityPicker').value;
    const selectedDate = "2025-02-14"; // Fixed date

    if (selectedActivity) {
        // Show confirmation message
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.textContent = `You've chosen a ${selectedActivity}. Now, pick a time below! 💖`;
        confirmationMessage.style.display = 'block';

        // Open Calendly pop-up with a specific date
        Calendly.initPopupWidget({
            url: `https://calendly.com/YOUR-USERNAME?hide_event_type_details=1&date=${selectedDate}`
        });
    } else {
        alert("Please select an activity!");
    }
});
