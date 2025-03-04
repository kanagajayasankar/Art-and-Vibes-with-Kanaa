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

// Create a Nodemailer transporter for Outlook
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, // Set to art-and-vibes-with-kanaa@outlook.com
    pass: process.env.EMAIL_PASS  // Your Outlook account password
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

app.get('/test-email', async (req, res) => {
    try {
        let info = await transporter.sendMail({
            from: `"Test Email" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Send test email to yourself
            subject: "Test Email from Server",
            text: "This is a test email to check if SMTP is working."
        });

        console.log("Test email sent:", info.response);
        res.send("Test email sent successfully!");
    } catch (error) {
        console.error("Error sending test email:", error);
        res.status(500).send("Failed to send test email.");
    }
});

transporter.verify(function(error, success) {
  if (error) {
    console.error("Transporter error:", error);
  } else {
    console.log("Server is ready to send messages");
  }
});


// POST endpoint for enquiry form submission
