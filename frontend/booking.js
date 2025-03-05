// booking.js

document.addEventListener("DOMContentLoaded", function () {
  const decrementBtn = document.getElementById("decrement");
  const incrementBtn = document.getElementById("increment");
  const numPeopleInput = document.getElementById("numPeople");

  // Increment/Decrement for Number of People
  decrementBtn.addEventListener("click", function () {
    let currentValue = parseInt(numPeopleInput.value, 10);
    if (currentValue > 1) {
      numPeopleInput.value = currentValue - 1;
    }
  });

  incrementBtn.addEventListener("click", function () {
    let currentValue = parseInt(numPeopleInput.value, 10);
    numPeopleInput.value = currentValue + 1;
  });

  // Booking form submission
  const bookingForm = document.getElementById("bookingForm");
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Collect booking data
    const bookingData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      numPeople: parseInt(document.getElementById("numPeople").value, 10),
      bookingDate: document.getElementById("bookingDate").value,
    };

    // Save bookingData to localStorage
    localStorage.setItem("bookingData", JSON.stringify(bookingData));

    // Redirect to payment page
    window.location.href = "payment.html";
  });
});
