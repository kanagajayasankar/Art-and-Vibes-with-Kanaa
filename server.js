const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so frontend can communicate with backend
app.use(cors());
app.use(express.json());

// Sample Activity Data (Replace this with database later)
const activities = [
    { id: 1, name: "Van Gogh Painting", price: 1500 },
    { id: 2, name: "Ceramic Painting", price: 1200 },
    { id: 3, name: "Glass Painting", price: 1300 },
    { id: 4, name: "Glow in the Dark Painting", price: 1400 }
];

// API Route to Fetch Activities
app.get("/api/activities", (req, res) => {
    res.json(activities);
});

// Test Route (Check if backend is running)
app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
