const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock activity data
const activities = [
    {
        id: 1,
        name: "Van Gogh Painting",
        description: "Create a masterpiece in the style of Van Gogh.",
        image: "https://raw.githubusercontent.com/kanagajayasankar/art-and-hobby/main/images/van-gogh.jpg"
    },
    {
        id: 2,
        name: "Turkish Mosaic Art",
        description: "Design beautiful mosaic art inspired by Turkish culture.",
        image: "https://raw.githubusercontent.com/kanagajayasankar/art-and-hobby/main/images/turkish-mosaic.jpg"
    },
    {
        id: 3,
        name: "Tote Bag Painting",
        description: "Personalize your own tote bag with artistic designs.",
        image: "https://raw.githubusercontent.com/kanagajayasankar/art-and-hobby/main/images/tote-bag.jpg"
    }
];

// API to get activities
app.get("/api/activities", (req, res) => {
    res.json(activities);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
