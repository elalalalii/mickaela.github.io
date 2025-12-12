// =========================================
// MICKAELA Portfolio - Interactive Features
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================
    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    // =========================================
    const navLinks = document.querySelectorAll('.nav-link, .footer-link, .hero-cta a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply smooth scroll to anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    updateActiveNavLink(targetId);
                }
            }
        });
    });
    
    // =========================================
    // ACTIVE NAVIGATION LINK ON SCROLL
    // =========================================
    function updateActiveNavLink(sectionId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Observe sections and update active link
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        if (current) {
            updateActiveNavLink(current);
        }
    });
    
    // =========================================
    // NAVBAR SHADOW ON SCROLL
    // =========================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // =========================================
    // CARD ANIMATION ON SCROLL
    // =========================================
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                // Trigger animation
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        cardObserver.observe(card);
    });
    
    // =========================================
    // MOBILE MENU TOGGLE (FOR FUTURE USE)
    // =========================================
    // Add this functionality when implementing responsive menu
    
    // =========================================
    // FORM VALIDATION (IF YOU ADD CONTACT FORM)
    // =========================================
    const contactForm = document.querySelector('#contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add your form validation and submission logic here
            const formData = new FormData(contactForm);
            
            console.log('Form submitted with data:', Object.fromEntries(formData));
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // =========================================
    // SMOOTH SCROLL TO TOP BUTTON (OPTIONAL)
    // =========================================
    function createScrollToTopButton() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '↑';
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--color-accent-teal);
            color: white;
            border: none;
            font-size: 24px;
            cursor: pointer;
            display: none;
            z-index: 999;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        
        document.body.appendChild(scrollBtn);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollBtn.style.display = 'block';
            } else {
                scrollBtn.style.display = 'none';
            }
        });
        
        // Scroll to top on click
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover effect
        scrollBtn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--color-accent-orange)';
            this.style.transform = 'translateY(-5px)';
        });
        
        scrollBtn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--color-accent-teal)';
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Uncomment to enable scroll-to-top button
    // createScrollToTopButton();
    
    // =========================================
    // CONSOLE MESSAGE
    // =========================================
    console.log('%c👋 Welcome to MICKAELA\'s Portfolio!', 'color: #0A7EA4; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with ❤️ using HTML, CSS, and JavaScript', 'color: #666666; font-size: 14px;');
    
});
