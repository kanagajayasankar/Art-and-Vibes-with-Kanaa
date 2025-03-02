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


/*THE GALLERY SCROLLING CODE HERE  */

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector('.gallery');
    const galleryLeftArrow = document.getElementById('galleryLeftArrow');
    const galleryRightArrow = document.getElementById('galleryRightArrow');

    if (!gallerySlider || !galleryLeftArrow || !galleryRightArrow) return;

    function scrollGallerySlider(direction) {
        const scrollAmount = gallerySlider.clientWidth * 0.5; // scroll half the container width
        gallerySlider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }

    function updateGalleryArrows() {
        galleryLeftArrow.style.display = gallerySlider.scrollLeft > 10 ? 'block' : 'none';
        galleryRightArrow.style.display = (gallerySlider.scrollLeft + gallerySlider.clientWidth < gallerySlider.scrollWidth - 10) ? 'block' : 'none';
    }

    galleryLeftArrow.addEventListener('click', () => scrollGallerySlider(-1));
    galleryRightArrow.addEventListener('click', () => scrollGallerySlider(1));
    
    gallery.addEventListener('scroll', updateGalleryArrows);
    window.addEventListener('resize', updateGalleryArrows);
    setTimeout(updateGalleryArrows, 500);
});

/*THE review SCROLLING CODE HERE  */
document.addEventListener("DOMContentLoaded", function () {
    // Review slider arrow functionality
    const reviewSlider = document.querySelector('.review-slider');
    const reviewLeftArrow = document.getElementById('reviewLeftArrow');
    const reviewRightArrow = document.getElementById('reviewRightArrow');

    if (!reviewSlider || !reviewLeftArrow || !reviewRightArrow) return;

    function scrollReviewSlider(direction) {
        const scrollAmount = reviewSlider.clientWidth * 0.5;
        reviewSlider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }

    function updateReviewArrows() {
        reviewLeftArrow.style.display = reviewSlider.scrollLeft > 10 ? 'block': 'none';
        reviewRightArrow.style.display = reviewSlider.scrollLeft + reviewSlider.clientWidth < reviewSlider.scrollWidth - 10 ? 'block' : 'none';
    }

    reviewLeftArrow.addEventListener('click', () => scrollReviewSlider(-1));
    reviewRightArrow.addEventListener('click', () => scrollReviewSlider(1));

    reviewSlider.addEventListener('scroll', updateReviewArrows);
    window.addEventListener('resize', updateReviewArrows);
    setTimeout(updateReviewArrows, 500);
});

/*condition to allow external links*/
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (!href.startsWith("#")) return; // Allow external links
        e.preventDefault();
        const targetSection = document.getElementById(href.substring(1));
        if (targetSection) {
            window.scrollTo({ top: targetSection.offsetTop - 80, behavior: "smooth" });
        }
    });
});

