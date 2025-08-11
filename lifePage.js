document.addEventListener("DOMContentLoaded", function() {

    // hamburger menu logic
    var icon = document.getElementById("icon");
    var icon1 = document.getElementById("a");
    var icon2 = document.getElementById("b");
    var icon3 = document.getElementById("c");
    var navbar = document.getElementById('navbar');

    icon.addEventListener('click', function() {
        icon1.classList.toggle('a');
        icon2.classList.toggle('c');
        icon3.classList.toggle('b');
        navbar.classList.toggle('show');
    });
});

// fullpage js logic
$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['welcome-page', 'main', 'about', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        navigationToolTips: ['Welcome', 'Intro', 'About Me', 'Contact Me'],
        showActiveTooltip: true,
        scrollOverflow: true
    });
});