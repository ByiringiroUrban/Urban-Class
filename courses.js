// script.js

// Add click event for enroll button
document.getElementById("enroll-btn").addEventListener("click", function() {
  alert("Thank you for enrolling in the Python course! You'll receive an email with further instructions.");
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
  });
});
