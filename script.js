document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('notify-form');
    const emailInput = document.getElementById('email-input');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (e) => {
        // Prevent the page from refreshing on submit
        e.preventDefault();

        // Check if the input is not empty
        if (emailInput.value.trim() !== '') {
            // Hide the form and show the success message
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            // Note: If you want to actually collect these emails, 
            // you will need to link this form to a backend service 
            // like Formspree, Mailchimp, or your own server later.
        }
    });
});
