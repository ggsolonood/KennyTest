document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can expand this as needed)
    if (name && email && message) {
        alert('Message sent successfully!');
        // Clear the form fields
        document.getElementById('contactForm').reset();
        // Add further logic here, e.g., send data to the server
    } else {
        alert('Please fill in all fields.');
    }
});
