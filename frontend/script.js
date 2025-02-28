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
                </div>
                <div class="card-back">
                    <h3>${activity.name}</h3>
                    <p>${activity.description}</p>
                    <button class="book-now">Book Now</button>
                </div>
            </div>
            <p class="polaroid-title">${activity.name}</p>
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
    anchor.addEventListener("click", function (event) {
        const href = this.getAttribute("href");

        // Allow external navigation (e.g., About Me page)
        if (!href.startsWith("#")) {
            return; // Let the browser handle navigation
        }

        event.preventDefault(); // Only prevent default for internal links
        document.querySelector(href).scrollIntoView({
            behavior: "smooth"
        });
    });
});
