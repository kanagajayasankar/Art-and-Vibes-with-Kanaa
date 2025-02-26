const API_URL = "https://artandvibes-api.onrender.com"; // Replace with your Render URL

fetch(`${API_URL}/api/activities`)
    .then(response => response.json())
    .then(data => {
        console.log("Fetched activities:", data);
        // TODO: Update frontend to display activities dynamically
    })
    .catch(error => console.error("Error fetching activities:", error));
