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
                    <p class="activity-name">${activity.name}</p>
                </div>
                <div class="card-back">
                    <h3>${activity.name}</h3>
                    <p>${activity.description}</p>
                    <button class="book-now" data-activity="${activity.name}">Book Now</button>
                </div>
            </div>
        `;

        // If the device supports touch, add click event for mobile
        if ('ontouchstart' in window || navigator.maxTouchPoints) {
            card.addEventListener("click", () => {
                card.classList.toggle("flipped");
            });
        }
        
        // Attach event listener to the Book Now button
        const bookNowButton = card.querySelector(".book-now");
        bookNowButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent flipping when clicking the button
            const activityName = event.target.getAttribute("data-activity");

            // Redirect to booking page with the activity name as a query parameter
            window. location.href = `booking.html?activity=${encodeURIComponent(activityName)}`;
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

    if (!gallery || !galleryLeftArrow || !galleryRightArrow) return;

    function scrollGallery(direction) {
        const scrollAmount = gallery.clientWidth * 0.5; // scroll half the container width
        gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }

    function updateGalleryArrows() {
        galleryLeftArrow.style.display = gallery.scrollLeft > 10 ? 'block' : 'none';
        galleryRightArrow.style.display = (gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth - 10) ? 'block' : 'none';
    }

    galleryLeftArrow.addEventListener('click', () => scrollGallery(-1));
    galleryRightArrow.addEventListener('click', () => scrollGallery(1));

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
/*toggle the mobile menu*/
document.getElementById('hamburger').addEventListener('click', function() {
  var menu = document.getElementById('navMenu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});

// Enquiry form submission
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Retrieve input values
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();

    // Basic client-side validation
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("/send-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        contactForm.reset();
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while sending your enquiry.");
    }
  });
});



