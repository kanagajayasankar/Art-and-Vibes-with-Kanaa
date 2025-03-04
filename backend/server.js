const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static("/opt/render/project/src/frontend"));

// API endpoint for activities
app.get("/activities", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Van Gogh Painting",
      image: "/images/van_gogh_painting.jpg",
      description: "Recreate Van Gogh's masterpieces on canvas.",
      price: "₹1500"
    },
    {
      id: 2,
      name: "Turkish Mosaic Art",
      image: "/images/mosaic_art.jpg",
      description: "Create a beautiful mosaic piece with colorful tiles.",
      price: "₹1300"
    },
    {
      id: 3,
      name: "Tote Bag Painting",
      image: "/images/tote_bag_painting.jpg",
      description: "Design and paint your own tote bag.",
      price: "₹1100"
    }
  ]);
});

// Serve booking.html for the booking page
app.get("/booking", (req, res) => {
  res.sendFile("/opt/render/project/src/frontend/booking.html");
});

// Serve about.html correctly
app.get("/about", (req, res) => {
  res.sendFile("/opt/render/project/src/frontend/about.html");
});

// Serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile("/opt/render/project/src/frontend/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
