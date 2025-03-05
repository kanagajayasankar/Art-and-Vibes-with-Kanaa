// booking.js

// People Control Buttons
const increaseBtn = document.getElementById("increasePeople");
const decreaseBtn = document.getElementById("decreasePeople");
const numPeopleInput = document.getElementById("numPeople");
const proceedPaymentBtn = document.getElementById("proceedPayment");
const paymentSection = document.getElementById("paymentSection");
const bookingSummary = document.getElementById("bookingSummary");

// Increase number of people
increaseBtn.addEventListener("click", () => {
  let current = parseInt(numPeopleInput.value);
  numPeopleInput.value = current + 1;
});

// Decrease number of people
decreaseBtn.addEventListener("click", () => {
  let current = parseInt(numPeopleInput.value);
  if (current > 1) {
    numPeopleInput.value = current - 1;
  }
});

// When "Proceed with Payment" is clicked, show the payment section and update details.
proceedPaymentBtn.addEventListener("click", () => {
  const name = document.getElementById("customerName").value;
  const email = document.getElementById("customerEmail").value;
  const numPeople = parseInt(numPeopleInput.value);
  const date = document.getElementById("bookingDate").value;

  // Calculate deposit: €20 per person
  const deposit = numPeople * 20;

  bookingSummary.innerHTML = `
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Date:</strong> ${date}<br>
    <strong>Number of People:</strong> ${numPeople}<br>
    <strong>Total Deposit:</strong> €${deposit}
  `;
  paymentSection.style.display = "flex";
});

// Simulate Payment Gateway
document.getElementById("payDeposit").addEventListener("click", () => {
  // Replace with your actual payment gateway integration
  alert("Redirecting to payment gateway...");
  window.location.href = "https://paymentgateway.example.com";
});

// Toggle Admin Panel for managing available dates
const adminToggle = document.getElementById("adminToggle");
const adminSection = document.getElementById("adminSection");

adminToggle.addEventListener("click", () => {
  adminSection.style.display = adminSection.style.display === "block" ? "none" : "block";
});

// Admin form submission to update available dates (dummy function)
document.getElementById("adminForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const dates = document.getElementById("availableDates").value;
  console.log("Available Dates Updated:", dates);
  alert("Available dates updated!");
});
