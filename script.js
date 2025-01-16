window.addEventListener('load', () => {
    // Set a timeout to remove the loading screen after the camera click animation completes
    setTimeout(() => {
        // Remove the loading screen
        document.getElementById('loading-screen').style.display = 'none';
    }, 3000); // Camera animation lasts for 3 seconds
});
