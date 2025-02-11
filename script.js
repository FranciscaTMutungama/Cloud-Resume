$(document).ready(function () {
    const $win = $(window); // Cache the window object
    const $navbar = $('#header'); // Cache the navbar element
    const $toggle = $('.toggle-button'); // Cache the toggle button
    let navbarWidth = $navbar.width();

    // Initial toggle setup
    toggleOnClick($win, $navbar, navbarWidth);

    // Resize event listener
    $win.resize(function () {
        navbarWidth = $navbar.width(); // Update width on resize
        toggleOnClick($win, $navbar, navbarWidth);
    });

    // Toggle button click event
    $toggle.click(function () {
        $navbar.toggleClass("toggle-left");
    });

    // Function to handle toggle based on window width
    function toggleOnClick($win, $navbar, width) {
        if ($win.width() <= 768) {
            $navbar.css({ left: `-${width}px` });
        } else {
            $navbar.css({ left: '0px' });
        }
    }

    // Typed.js initialization for multiple text animations
    const typedStrings = ['Cloud Engineer', 'Cloud Architect', 'DevOps Engineer'];

    new Typed('#typed', {
        strings: typedStrings,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    new Typed('#typed_2', {
        strings: typedStrings,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fetch counter value and update the counter element
    const counter = document.querySelector(".counter-number");
    async function updateCounter() {
        try {
            const response = await fetch(
                "https://wwjcx7tyxrbjmbkf3vc3teo3mu0qrvhq.lambda-url.ca-central-1.on.aws/"
            );

            if (!response.ok) throw new Error("Failed to fetch data");

            const data = await response.json();
            counter.innerHTML = `👀 Views: ${data}`;
        } catch (error) {
            console.error("Error updating counter:", error);
            counter.innerHTML = "👀 Views: Error";
        }
    }
    updateCounter();
});
