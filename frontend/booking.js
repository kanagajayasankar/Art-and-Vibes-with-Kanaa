// booking.js

document.addEventListener("DOMContentLoaded", function () {
  // Increment/Decrement for Number of People
  const decrementBtn = document.getElementById("decrement");
  const incrementBtn = document.getElementById("increment");
  const numPeopleInput = document.getElementById("numPeople");

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
      numPeople: document.getElementById("numPeople").value,
      bookingDate: document.getElementById("bookingDate").value,
    };

    // For demonstration, save bookingData to localStorage
    localStorage.setItem("bookingData", JSON.stringify(bookingData));

    // Redirect to payment page (assume payment.html exists)
    window.location.href = "payment.html";
  });
});
