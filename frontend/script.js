document.addEventListener("DOMContentLoaded", async function () {
    // Fetch activities from backend
    const response = await fetch("https://art-and-vibes.onrender.com/activities");
    const activities = await response.json();

    const cardContainer = document.querySelector(".card-container");

    activities.forEach(activity => {
        const card = document.createElement("div");
        card.classList.add("activity-card");

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${activity.image}" alt="${activity.name}" class="activity-image">
                    <p class="activity-name">${activity.name}</p> <!--inside card front -->
                </div>
                <div class="card-back">
                    <h3>${activity.name}</h3>
                    <p>${activity.description}</p>
                    <button class="book-now">Book Now</button>
                </div>
            </div>
            
        `;

        // Flip effect
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });

        cardContainer.appendChild(card);
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        // Allow external navigation (e.g., About Me page)
        if (!href.startsWith("#")) {
            return; // Let the browser handle navigation
        }
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust to ensure section is fully visible
                behavior: "smooth"

        event.preventDefault(); // Only prevent default for internal links
        document.querySelector(href).scrollIntoView({
            behavior: "smooth"
        });
    });
});
