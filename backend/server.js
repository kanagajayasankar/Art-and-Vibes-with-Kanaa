const express = require("express");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");

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

// Create a Nodemailer transporter using Resend
const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 587,
  secure: false,
  auth: {
    user: "apikey", // Literal string required by Resend
    pass: process.env.RESEND_API_KEY // Your Resend API key from environment variable
  }
});

// POST endpoint for enquiry form submission
app.post("/send-enquiry", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill out all fields." });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, // Must be a verified sender in Resend
    to: "art-and-vibes-with-kanaa@outlook.com", // The email to receive enquiries
    subject: "New Enquiry from Art and Vibes Website",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
    res.status(200).json({ message: "Enquiry sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    // Optionally, log error.response if available
    res.status(500).json({ error: "Failed to send enquiry. " + error.message });
  }
});

// Serve about.html correctly
app.get("/about", (req, res) => {
  res.sendFile("/opt/render/project/src/frontend/about.html");
});

// Serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile("/opt/render/project/src/frontend/index.html");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
