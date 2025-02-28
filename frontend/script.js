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
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default behavior

        const href = this.getAttribute("href"); // Get href value

        // If it's an external link (not an anchor link), let the browser handle it
        if (!href.startsWith("#")) {
            window.location.href = href;
            return;
        }

        const targetSection = document.getElementById(href.substring(1)); // Remove '#' to get ID

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust offset for fixed header
                behavior: "smooth"
            });
        }
    });
});

/* --------------------------------------- */
/* ✅ ADD THE GALLERY SCROLLING CODE HERE  */
/* --------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector('.gallery');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    if (!gallery || !leftArrow || !rightArrow) return; // Ensure elements exist

    // Scroll Amount (adjust if needed)
    const scrollAmount = 300;

    // Function to Scroll
    function scrollGallery(direction) {
        gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }

    // Show/Hide Arrows
    function updateArrows() {
        leftArrow.style.display = gallery.scrollLeft > 0 ? 'block' : 'none';
        rightArrow.style.display = gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth ? 'block' : 'none';
    }

    // Event Listeners
    leftArrow.addEventListener('click', () => scrollGallery(-1));
    rightArrow.addEventListener('click', () => scrollGallery(1));
    gallery.addEventListener('scroll', updateArrows);

    // Initial Arrow Update
    updateArrows();
});
