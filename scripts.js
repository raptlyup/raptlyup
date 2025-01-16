// Get the modal and the button to open it
const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactButton");
const span = document.getElementsByClassName("close")[0];

// When the user clicks the "Contact" link, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks the close button, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle the form submission (for now, just log it to the console)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // You can add form submission logic here (e.g., sending data to a server)
});
