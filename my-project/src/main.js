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

  // Features section scroll animation
  const featuresContent = document.querySelector('.features-content');
  
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate all features elements
        const title = entry.target.querySelector('.features-title');
        const subtitle = entry.target.querySelector('.features-subtitle');
        const tags = entry.target.querySelectorAll('.feature-tag');
        const phones = entry.target.querySelector('.features-phones');
        
        if (title) title.classList.add('animated');
        if (subtitle) subtitle.classList.add('animated');
        tags.forEach(tag => tag.classList.add('animated'));
        if (phones) phones.classList.add('animated');
      }
    });
  }, observerOptions);

  if (featuresContent) {
    observer.observe(featuresContent);
  }

  // Download section scroll animation
  const downloadContent = document.querySelector('.download-content');

  const downloadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate all download elements
        const appLogo = entry.target.querySelector('.app-logo');
        const title = entry.target.querySelector('.download-title');
        const qrBoxes = entry.target.querySelectorAll('.qr-box');
        const image = entry.target.querySelector('.download-image');
        
        if (appLogo) appLogo.classList.add('animated');
        if (title) title.classList.add('animated');
        qrBoxes.forEach(box => box.classList.add('animated'));
        if (image) image.classList.add('animated');
      }
    });
  }, observerOptions);

  if (downloadContent) {
    downloadObserver.observe(downloadContent);
  }

  // Register section scroll animation
  const registerContent = document.querySelector('.register-content');

  const registerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate all register elements
        const image = entry.target.querySelector('.imac-image');
        const title = entry.target.querySelector('.register-title');
        const description = entry.target.querySelector('.register-description');
        const form = entry.target.querySelector('.register-form');
        
        if (image) image.classList.add('animated');
        if (title) title.classList.add('animated');
        if (description) description.classList.add('animated');
        if (form) form.classList.add('animated');
      }
    });
  }, observerOptions);

  if (registerContent) {
    registerObserver.observe(registerContent);
  }

  // Benefits section scroll animation
  const benefitsSection = document.querySelector('.benefits');

  const benefitsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate all benefits elements
        const title = entry.target.querySelector('.benefits-title');
        const subtitle = entry.target.querySelector('.benefits-subtitle');
        const description = entry.target.querySelector('.benefits-description');
        const promo = entry.target.querySelector('.benefits-promo');
        const cards = entry.target.querySelectorAll('.benefit-card');
        const footer = entry.target.querySelector('.benefits-footer');
        const button = entry.target.querySelector('.promo-button');
        
        if (title) title.classList.add('animated');
        if (subtitle) subtitle.classList.add('animated');
        if (description) description.classList.add('animated');
        if (promo) promo.classList.add('animated');
        cards.forEach(card => card.classList.add('animated'));
        if (footer) footer.classList.add('animated');
        if (button) button.classList.add('animated');
      }
    });
  }, observerOptions);

  if (benefitsSection) {
    benefitsObserver.observe(benefitsSection);
  }

  // Advertise section scroll animation
  const advertiseContent = document.querySelector('.advertise-content');

  const advertiseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const logo = entry.target.querySelector('.advertise-logo');
        const title = entry.target.querySelector('.advertise-title');
        const subheading = entry.target.querySelector('.advertise-subheading');
        const description = entry.target.querySelector('.advertise-description');
        const button = entry.target.querySelector('.advertise-button');
        const car = entry.target.querySelector('.advertise-car');

        if (logo) logo.classList.add('animated');
        if (title) title.classList.add('animated');
        if (car) car.classList.add('animated');
        if (subheading) subheading.classList.add('animated');
        if (description) description.classList.add('animated');
        if (button) button.classList.add('animated');
      }
    });
  }, observerOptions);

  if (advertiseContent) {
    advertiseObserver.observe(advertiseContent);
  }

  // Questions (FAQ) section scroll animation
  const questionsSection = document.querySelector('.questions');

  const questionsObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const title = entry.target.querySelector('.questions-title');
        const items = entry.target.querySelectorAll('.question-item');
        const footer = entry.target.querySelector('.questions-footer');

        if (title) title.classList.add('animated');
        items.forEach(item => item.classList.add('animated'));
        if (footer) footer.classList.add('animated');

        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  if (questionsSection) {
    questionsObserver.observe(questionsSection);
  }

  // Footer scroll animation
  const footer = document.querySelector('.footer');

  const footerObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        obs.unobserve(entry.target);
      }
    });
  }, {
    ...observerOptions,
    threshold: 0.1,
  });

  if (footer) {
    footerObserver.observe(footer);
  }

  // Functions section scroll animation
  const functionsSection = document.querySelector('.functions');

  // The functions section is very tall, so using a smaller threshold ensures
  // the observer triggers even on smaller viewports.
  const functionsObserverOptions = {
    ...observerOptions,
    threshold: 0.1,
  };

  const functionsTitleObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const title = entry.target.querySelector('.functions-title');
        if (title) title.classList.add('animated');
        obs.unobserve(entry.target);
      }
    });
  }, functionsObserverOptions);

  if (functionsSection) {
    functionsTitleObserver.observe(functionsSection);

    // Progressive animation: each function item animates when it comes into view
    const functionItems = functionsSection.querySelectorAll('.function-item');

    const functionItemObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const content = entry.target.querySelector('.function-content');
          if (content) content.classList.add('animated');
          obs.unobserve(entry.target);
        }
      });
    }, {
      ...observerOptions,
      threshold: 0.25,
    });

    functionItems.forEach(item => functionItemObserver.observe(item));
  }
});
