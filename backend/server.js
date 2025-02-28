const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000; // Ensure single port declaration

app.use(cors());
app.use(express.json());
app.use(express.static("frontend")); // Serve static files (HTML, CSS, JS)

// Sample activities data
const activities = [
    {
        id: 1,
        name: "Van Gogh Painting",
        image: "https://art-and-vibes.netlify.app/images/van_gogh_painting.jpg",
        description: "Recreate Van Gogh's masterpieces on canvas.",
        price: "₹1500"
    },
    {
        id: 2,
        name: "Turkish Mosaic Art",
        image: "https://art-and-vibes.netlify.app/images/mosaic_art.jpg",
        description: "Create a beautiful mosaic piece with colorful tiles.",
        price: "₹1300"
    },
    {
        id: 3,
        name: "Tote Bag Painting",
        image: "https://art-and-vibes.netlify.app/images/tote_bag_painting.jpg",
        description: "Design and paint your own tote bag.",
        price: "₹1100"
    }
];

// API endpoint for activities
app.get("/activities", (req, res) => {
    res.json(activities);
});

// Root route for checking if backend is working
app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});

// Route to serve the About page
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
