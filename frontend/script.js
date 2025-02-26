document.addEventListener("DOMContentLoaded", async function () {
    console.log("JavaScript Loaded. Fetching activities...");

    const activityList = document.getElementById("activity-list");

    try {
        const response = await fetch("https://art-and-vibes.onrender.com/some-endpoint");
        

        const activities = await response.json();

        activities.forEach(activity => {
            const card = document.createElement("div");
            card.classList.add("activity-card");

            card.innerHTML = `
                <div class="front">
                    <img src="${activity.image}" alt="${activity.name}">
                </div>
                <div class="back">
                    <p>${activity.description}</p>
                </div>
            `;

            card.addEventListener("click", () => {
                card.classList.toggle("flipped");
            });

            activityList.appendChild(card);
        });

        console.log("Activities loaded successfully.");
    } catch (error) {
        console.error("Error fetching activities:", error);
    }
});
