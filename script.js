document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // Smooth Scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Flip Card Effect
    document.querySelectorAll('.activity-card').forEach(card => {
        card.addEventListener("click", function () {
            card.classList.toggle("flipped");
        });
    });

    // Fetch data from backend
    fetch("https://art-and-hobby.onrender.com/api/data")
        .then(response => response.json())
        .then(data => console.log("Backend Response:", data))
        .catch(error => console.error("Error fetching data:", error));
});
