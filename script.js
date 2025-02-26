fetch("https://art-and-vibes.onrender.com/")
  .then(response => response.text()) // Change from JSON to text to debug
  .then(data => console.log("Backend response:", data))
  .catch(error => console.error("Error fetching backend:", error));


// Select all activity cards
const cards = document.querySelectorAll(".activity-card");

// Add click event to each card
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
        console.log("Card flipped:", card);  // 👈 Debugging Log
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Flip Card Logic
    const cards = document.querySelectorAll(".activity-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });

    // Ensure Images Load
    console.log("JavaScript Loaded. Checking images...");
});

