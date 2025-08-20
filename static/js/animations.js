/**
 * Dog Breed Identifier - Custom JS
 * Developer: Janith Deshan
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: false,
        mirror: true
    });
    
    // Initialize particles
    createParticles();
    createPawPrints();
    
    // File upload handling
    initFileUpload();
    
    // Navbar scroll effect
    initNavbarScroll();
    
    // Update time display
    updateTimeDisplay();
    setInterval(updateTimeDisplay, 1000);
    
    // Progress bar animation for results
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const confidenceText = document.querySelector('.confidence-text').textContent;
        const match = confidenceText.match(/(\d+(\.\d+)?)%/);
        
        if (match) {
            const percentage = parseFloat(match[1]);
            progressBar.style.width = percentage + '%';
        }
    }
    
    // Smooth scrolling for navigation
    initSmoothScrolling();
});

/**
 * Create background particles
 */
function createParticles() {
    const container = document.querySelector('.particle-container');
    if (!container) return;
    
    const colors = ['rgba(74, 111, 165, 0.3)', 'rgba(255, 139, 94, 0.3)', 'rgba(84, 209, 189, 0.3)'];
    
    // Create particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = 3 + Math.random() * 8;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 15 + Math.random() * 30;
        
        // Set styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.left = `${left}vw`;
        particle.style.top = '100vh';
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        container.appendChild(particle);
    }
}

/**
 * Create paw print animations
 */
function createPawPrints() {
    const container = document.querySelector('.paw-prints');
    if (!container) return;
    
    // Create paw prints
    for (let i = 0; i < 15; i++) {
        const paw = document.createElement('div');
        paw.classList.add('paw');
        
        // Random properties
        const size = 15 + Math.random() * 15;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const rotation = Math.random() * 360;
        
        // Set styles
        paw.style.width = `${size}px`;
        paw.style.height = `${size}px`;
        paw.style.left = `${left}vw`;
        paw.style.top = `${top}vh`;
        paw.style.transform = `rotate(${rotation}deg)`;
        
        container.appendChild(paw);
    }
}

/**
 * Initialize file upload functionality
 */
function initFileUpload() {
    const fileInput = document.querySelector('.file-input');
    const uploadArea = document.querySelector('.upload-area');
    const browseBtn = document.querySelector('.browse-btn');
    const selectedFileContainer = document.querySelector('.selected-file');
    
    if (!fileInput || !uploadArea) return;
    
    // Click the hidden file input when browse button is clicked
    if (browseBtn) {
        browseBtn.addEventListener('click', function() {
            fileInput.click();
        });
    }
    
    // Click the hidden file input when upload area is clicked
    uploadArea.addEventListener('click', function(e) {
        // Prevent clicking on the file input itself from triggering this
        if (e.target !== fileInput) {
            fileInput.click();
        }
    });
    
    // Handle file selection
    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            const fileName = this.files[0].name;
            displayFileName(fileName);
            
            // Add visual feedback
            uploadArea.classList.add('file-selected');
        }
    });
    
    // Handle drag and drop
    ['dragover', 'dragenter'].forEach(event => {
        uploadArea.addEventListener(event, function(e) {
            e.preventDefault();
            e.stopPropagation();
            uploadArea.classList.add('drag-over');
        });
    });
    
    ['dragleave', 'dragend'].forEach(event => {
        uploadArea.addEventListener(event, function(e) {
            e.preventDefault();
            e.stopPropagation();
            uploadArea.classList.remove('drag-over');
        });
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.remove('drag-over');
        
        if (e.dataTransfer.files.length > 0) {
            fileInput.files = e.dataTransfer.files;
            const fileName = e.dataTransfer.files[0].name;
            displayFileName(fileName);
            
            // Add visual feedback
            uploadArea.classList.add('file-selected');
        }
    });
    
    // Add loading state when form is submitted
    const form = document.getElementById('upload-form');
    if (form) {
        form.addEventListener('submit', function() {
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                submitBtn.disabled = true;
            }
        });
    }
    
    // Helper function to display file name
    function displayFileName(fileName) {
        if (selectedFileContainer) {
            selectedFileContainer.innerHTML = `
                <div class="selected-file-info">
                    <i class="fas fa-file-image"></i>
                    <span>${fileName}</span>
                </div>
            `;
        }
    }
}

/**
 * Initialize navbar scroll effect
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.app-header');
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
        }
    });
}

/**
 * Update time display in footer
 */
function updateTimeDisplay() {
    const timeDisplay = document.getElementById('current-time');
    if (!timeDisplay) return;
    
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0');
    const day = String(now.getUTCDate()).padStart(2, '0');
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    
    timeDisplay.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} UTC`;
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            // Get navbar height for offset
            const navbar = document.querySelector('.app-header');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            
            // Calculate scroll position
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile nav if open
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
            
            // Update active state in nav
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Update active nav item on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const navbar = document.querySelector('.app-header');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 10;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = section.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}