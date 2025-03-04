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

// Create a Nodemailer transporter for Resend
const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",  // Resend's SMTP host
  port: 587,
  secure: false,
  auth: {
    user: "apikey", // This literal string is required by Resend
    pass: process.env.RESEND_API_KEY // Your Resend API key (set in Render)
  }
});

// POST endpoint for enquiry form submission using Resend
app.post("/send-enquiry", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill out all fields." });
  }
  
  const mailOptions = {
    from: process.env.EMAIL_USER, // Ensure this is set to your sender email
    to: "art-and-vibes-with-kanaa@outlook.com", // The email to receive enquiries
    subject: "New Enquiry from Art and Vibes Website",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Enquiry sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send enquiry." });
  }
});

// Optional: Test email endpoint to verify your configuration
app.get("/test-email", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // For testing, send it to yourself
      subject: "Test Email from Art and Vibes",
      text: "This is a test email to verify Resend SMTP integration."
    });
    console.log("Test email sent:", info.response);
    res.send("Test email sent successfully!");
  } catch (error) {
    console.error("Error sending test email:", error);
    res.status(500).send("Failed to send test email.");
  }
});

// Serve about.html correctly
app.get("/about", (req, res) => {
  res.sendFile(path.join("/opt/render/project/src/frontend", "about.html"));
});

// Serve index.html for all other routes (Single Page Application fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join("/opt/render/project/src/frontend", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
