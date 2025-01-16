// Wait until the page fully loads
window.addEventListener('load', () => {
    // Set a timeout to remove the loading screen after the camera click animation
    setTimeout(() => {
        // Add the "loaded" class to body to trigger the transition and hide the loading screen
        document.body.classList.add('loaded');
    }, 3000); // Camera animation lasts for 3 seconds
});
