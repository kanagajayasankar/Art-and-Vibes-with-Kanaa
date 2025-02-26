document.addEventListener("DOMContentLoaded", async function () {
    const activitiesContainer = document.querySelector(".card-container");

    try {
        const response = await fetch("https://art-and-vibes.onrender.com/activities");
        const activities = await response.json();

        activities.forEach(activity => {
            const card = document.createElement("div");
            card.classList.add("activity-card");

            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <img src="${activity.image}" alt="${activity.name}">
                    </div>
                    <div class="card-back">
                        <h3>${activity.name}</h3>
                        <p>${activity.description}</p>
                        <p><strong>Price:</strong> ${activity.price}</p>
                    </div>
                </div>
            `;

            card.addEventListener("click", () => {
                card.classList.toggle("flipped");
            });

            activitiesContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading activities:", error);
    }
});
