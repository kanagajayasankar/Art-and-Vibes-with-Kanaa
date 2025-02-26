const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
    res.json({
        message: "Backend is working!",
        activities: ["Van Gogh Painting", "Turkish Mosaic Art", "Tote Bag Painting"]
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
