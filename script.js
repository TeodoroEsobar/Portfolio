document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(function(section) {
                section.style.display = "none";
            });

            targetSection.style.display = "block";
        });
    });
});