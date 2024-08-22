document.getElementById('menu-icon').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }
});

window.onload = function () {
    document.getElementById('loader').style.display = 'none';
}

// document.getElementById('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const formData = new FormData(this);
//     const scriptURL = 'AKfycbzEAvC_BULj3t6taapamwqG6E4ZOnE5OYPZWy5K4mM0'; // Replace with your Google Apps Script URL

//     fetch(scriptURL, {
//         method: 'POST',
//         body: formData,
//     })
//     .then(response => alert('Form successfully submitted!'))
//     .catch(error => alert('Error submitting form: ' + error.message));
// });






























// Optional JavaScript for handling file uploads or form submission
document.addEventListener('DOMContentLoaded', function () {
    // Form submission handling (if needed)
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Gather form data
      const formData = new FormData(contactForm);
  
      // Send form data to Google Sheets
      fetch(contactForm.action, {
        method: 'POST',
        body: formData, // Use FormData to handle file uploads
      })
        .then(response => response.text())
        .then(result => {
          alert('Thank you for your message!');
          contactForm.reset(); // Reset the form fields
        })
        .catch(error => {
          console.error('Error:', error);
          alert('There was a problem with your submission. Please try again.');
        });
    });
  });