document.addEventListener("DOMContentLoaded", function () {
  const bookingDetailsContainer = document.getElementById("bookingDetails");
  const paymentAmount = document.getElementById("paymentAmount");
  const proceedBtn = document.getElementById("proceedPayment");

  // Retrieve stored booking data
  const bookingData = JSON.parse(localStorage.getItem("bookingData"));

  if (!bookingData) {
    // If no booking data found, redirect back to booking page
    window.location.href = "booking.html";
  } else {
    // Display booking details
    bookingDetailsContainer.innerHTML = `
      <p><strong>Name:</strong> ${bookingData.name}</p>
      <p><strong>Email:</strong> ${bookingData.email}</p>
      <p><strong>Number of People:</strong> ${bookingData.numPeople}</p>
      <p><strong>Booking Date:</strong> ${bookingData.bookingDate}</p>
    `;

    // Calculate deposit (€20 per person)
    const depositAmount = bookingData.numPeople * 20;
    paymentAmount.textContent = `€${depositAmount}`;
  }

  // Handle Payment Button Click
  proceedBtn.addEventListener("click", function () {
    // Redirect to a payment gateway (Replace with actual gateway URL)
    alert("Redirecting to payment...");
    window.location.href = "https://your-payment-gateway.com/pay"; // Replace with your real payment link
  });
});
