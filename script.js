document.addEventListener('DOMContentLoaded', () => {
    const glow = document.getElementById('glow');

    // Listen for mouse movement across the entire document
    document.addEventListener('mousemove', (e) => {
        // Update the position of the glow element to follow the cursor
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
});
