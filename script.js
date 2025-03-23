    // Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
       navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
       link.addEventListener('click', () => {
          navLinks.classList.remove('active');
       });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
       contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          // Here you would normally send the form data to a server
          alert('Thank you for your message! We will get back to you soon.');
          contactForm.reset();
       });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
             window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
             });
          }
       });
    });
    
    // Dark/Light Mode Detection
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
       document.documentElement.classList.add('dark');
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
       if (event.matches) {
          document.documentElement.classList.add('dark');
       } else {
          document.documentElement.classList.remove('dark');
       }
    });