// Initialize Lucide Icons if available
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// Countdown Timer Logic
// Set the target date to exactly midnight tonight
const countDate = new Date();
countDate.setHours(24, 0, 0, 0);
const targetTime = countDate.getTime();

const countdown = () => {
  const now = new Date().getTime();
  const gap = targetTime - now;

  if (gap <= 0) return; // Stop if it reaches 0

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (hoursEl) hoursEl.innerText = h < 10 ? '0' + h : h;
  if (minutesEl) minutesEl.innerText = m < 10 ? '0' + m : m;
  if (secondsEl) secondsEl.innerText = s < 10 ? '0' + s : s;
};

setInterval(countdown, 1000);
countdown(); // Run immediately

// Photo Carousel Functions
const photos = ['assets/shoes.jpg', 'assets/photo1.png', 'assets/photo2.jpg'];
let currentPhotoIndex = 0;

function prevPhoto() {
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  document.getElementById('carousel-img').src = photos[currentPhotoIndex];
}

function nextPhoto() {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  document.getElementById('carousel-img').src = photos[currentPhotoIndex];
}
