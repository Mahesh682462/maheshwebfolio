// Wait until DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
    // Toggle menu
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Scroll sections
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector(`header nav a[href*=${id}]`)?.classList.add('active');
                });
            }
        });

        // Sticky header
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // Remove toggle icon and navbar when click navbar links (scroll)
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

   // Typing animation
    const typed = new Typed('.multiple-text', {
        strings: ['Front-End Developer','Web Designer', 'UI/UX Designer'],
        typeSpeed: 100,
         backSpeed: 90,
        backDelay: 10,
        loop: true

    
      
   });
        
    
});
