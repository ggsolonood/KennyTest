document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can expand this as needed)
    if (username && password) {
        alert('Login successful!');
        // You can add further login logic here, e.g., send data to the server
    } else {
        alert('Please fill in both fields.');
    }
});
