// Set the launch date and time
const launchDate = new Date().getTime() + (44 * 60 * 60 * 1000);

// Update the countdown every second
const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  // Calculate the days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById('timer').innerHTML = "EXPIRED";
  }
}, 1000);
