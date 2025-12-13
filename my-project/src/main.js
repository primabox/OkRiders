import './style.css'

// Questions accordion functionality
document.addEventListener('DOMContentLoaded', function() {
  const questionButtons = document.querySelectorAll('.question-button');
  
  questionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const questionItem = this.parentElement;
      const answer = questionItem.querySelector('.question-answer');
      const icon = this.querySelector('.question-icon');
      
      // Toggle active class
      questionItem.classList.toggle('active');
      answer.classList.toggle('active');
      icon.classList.toggle('active');
    });
  });

  // Hamburger menu functionality
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const menuOverlay = document.getElementById('menu-overlay');
  
  hamburgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking outside
  menuOverlay.addEventListener('click', function(e) {
    if (e.target === menuOverlay) {
      hamburgerBtn.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
});
