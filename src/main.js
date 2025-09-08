// Countdown Timer (50 minutes)
function startCountdown() {
  let totalSeconds = 50 * 60; // 50 minutes in seconds
  const timeElement = document.getElementById("time");

  function updateTimer() {
    if (totalSeconds <= 0) {
      timeElement.textContent = "00:00";
      return;
    }

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    timeElement.textContent =
      String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

    totalSeconds--;
  }

  updateTimer(); // Initial call
  setInterval(updateTimer, 1000); // Update every second
}

// Brazilian Date Format (dd/mm/yyyy)
function setBrazilianDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  const brazilianDate = `${day}/${month}/${year}`;
  document.getElementById("data").textContent = brazilianDate;
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", function () {
  startCountdown();
  setBrazilianDate();
});
