const backendURL = "https://art-and-vibes.onrender.com/";
 // Replace with your Render URL

fetch(`${backendURL}api/your-endpoint`)
  .then(response => response.json())
  .then(data => console.log(data));


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

