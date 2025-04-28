// File: js/app.js

$(document).ready(function() {
    // Initialize the application
    initApp();
    
    // Add fastclick to eliminate the 300ms delay on touch devices
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }
});

// Initialize various app components
function initApp() {
    // Page initialization
    $(document).on('pagecreate', function() {
        console.log('Page created');
        initNewsSlider();
        initProductFilter();
        initGallery();
        initContactForm();
        initSearch();
    });
    
    // Handle back button
    $(document).on('pageshow', function() {
        // Android back button handling
        if (navigator.userAgent.match(/Android/i)) {
            document.addEventListener('backbutton', function(e) {
                if ($.mobile.activePage.attr('id') === 'home') {
                    e.preventDefault();
                    navigator.app.exitApp();
                } else {
                    navigator.app.backHistory();
                }
            }, false);
        }
    });
}

// Initialize news slider with swipe functionality
function initNewsSlider() {
    let currentSlide = 0;
    const newsItems = $('.news-item');
    const totalSlides = newsItems.length;
    
    // Hide all slides except the first one
    newsItems.not(':first').hide();
    
    // Add swipe functionality
    $('.news-slider').on('swipeleft', function() {
        // Next slide
        newsItems.eq(currentSlide).fadeOut(300, function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            newsItems.eq(currentSlide).fadeIn(300);
        });
    }).on('swiperight', function() {
        // Previous slide
        newsItems.eq(currentSlide).fadeOut(300, function() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            newsItems.eq(currentSlide).fadeIn(300);
        });
    });
    
    // Auto-rotate slides every 5 seconds
    setInterval(function() {
        newsItems.eq(currentSlide).fadeOut(300, function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            newsItems.eq(currentSlide).fadeIn(300);
        });
    }, 5000);
}

// Initialize product filter functionality
function initProductFilter() {
    $('#category-filter').on('change', function() {
        const selectedCategory = $(this).val();
        
        // In a real app, you would filter products by category
        // For this demo, we'll just show a message
        if (selectedCategory) {
            alert('You selected category: ' + selectedCategory);
        } else {
            alert('Please select a category.');
        }
    });
}

// Placeholder for gallery initialization
function initGallery() {
    console.log('Gallery initialized');
    // Gallery logic goes here
}

// Placeholder for contact form initialization
function initContactForm() {
    console.log('Contact form initialized');
    // Contact form logic goes here
}

// Placeholder for search initialization
function initSearch() {
    console.log('Search initialized');
    // Search logic goes here
}
