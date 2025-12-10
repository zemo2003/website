// Yalla! Durham Food Truck Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Menu item hover effects
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.menu-item, .about-card, .location-card, .contact-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Basic validation
            if (!formObject.name || !formObject.email || !formObject.message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formObject.email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showFormMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }

    // Form message display
    function showFormMessage(message, type) {
        const form = document.getElementById('contact-form');
        const existingMessage = form.querySelector('.form-message');
        
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message';
        messageDiv.style.cssText = `
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            text-align: center;
            font-weight: 600;
            ${type === 'success' 
                ? 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' 
                : 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
            }
        `;
        messageDiv.textContent = message;
        
        form.appendChild(messageDiv);
        
        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            messageDiv.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                messageDiv.remove();
            }, 500);
        }, 5000);
    }

    // Performance optimization: Lazy load images
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Console welcome message
    console.log(`
        🚚 Welcome to Yalla! Durham Food Truck Website
        ===========================================
        
        Authentic Kosher Middle Eastern Food
        Serving Duke University & Durham Community
        
        Order on DoorDash: https://www.doordash.com/store/yalla!-durham-durham-36399175/
    `);
});

// DoorDash Integration Functions
function orderOnDoorDash(item) {
    // DoorDash store URL - opens in new tab
    const doordashUrl = 'https://www.doordash.com/store/yalla!-durham-durham-36399175/81499175/';
    
    // Track the order click (if analytics is set up)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'order_click', {
            'event_category': 'engagement',
            'event_label': item,
            'value': 1
        });
    }
    
    // Open DoorDash in new tab
    window.open(doordashUrl, '_blank', 'noopener,noreferrer');
}

// Smooth scroll to order section
function scrollToOrder() {
    const orderSection = document.getElementById('order');
    if (orderSection) {
        const offsetTop = orderSection.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Add click handlers to all order buttons
document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.btn-order, .btn-order-item, [href="#order"]');
    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('btn-order-item')) {
                // Handle menu item order buttons
                const menuItem = this.closest('.menu-item');
                if (menuItem) {
                    const itemName = menuItem.dataset.item || 'menu-item';
                    orderOnDoorDash(itemName);
                }
            } else if (this.getAttribute('href') === '#order') {
                // Handle navigation order links
                e.preventDefault();
                scrollToOrder();
            }
        });
    });
});

// Add animation classes
const fadeInElements = document.querySelectorAll('.menu-item, .about-card, .location-card');
fadeInElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }, index * 100);
});


