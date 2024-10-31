// const greetingElement = document.getElementById('greeting');
// const nameInput = document.getElementById('nameInput');
// const updateGreetingButton = document.getElementById('updateGreeting');
// const stars = document.querySelectorAll('.star');
// const toggleThemeButton = document.getElementById('toggleTheme');
// const body = document.body;
// const readMoreButton = document.getElementById('readMore');
// const moreContent = document.getElementById('moreContent');
// const showTimeButton = document.getElementById('showTime');
// const currentTimeDisplay = document.getElementById('currentTime');

// let isDay = true;

// updateGreetingButton.addEventListener('click', () => {
//     const name = nameInput.value.trim();
//     if (name) {
//         greetingElement.textContent = `Hello, ${name}!`;
//     } else {
//         alert("Please enter your name.");
//     }
// });

// stars.forEach(star => {
//     star.addEventListener('click', () => {
//         const rating = star.dataset.value;
//         stars.forEach(s => s.classList.remove('selected'));
//         for (let i = 0; i < rating; i++) {
//             stars[i].classList.add('selected');
//         }
//     });
// });

// toggleThemeButton.addEventListener('click', () => {
//     isDay = !isDay;
//     body.className = isDay ? 'day' : 'night';
// });

// readMoreButton.addEventListener('click', () => {
//     if (moreContent.style.display === "none") {
//         moreContent.style.display = "block";
//         moreContent.style.opacity = 1;
//     } else {
//         moreContent.style.display = "none";
//         moreContent.style.opacity = 0;
//     }
// });

// showTimeButton.addEventListener('click', () => {
//     const currentTime = new Date().toLocaleTimeString();
//     currentTimeDisplay.textContent = `Current Time: ${currentTime}`;
// });

// document.addEventListener('keydown', (event) => {
//     const stars = document.querySelectorAll('.star');
//     let currentIndex = [...stars].findIndex(star => star.classList.contains('selected'));
    
//     if (event.key === 'ArrowRight' && currentIndex < stars.length - 1) {
//         event.preventDefault();
//         stars[currentIndex + 1].click();
//     } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
//         event.preventDefault();
//         stars[currentIndex - 1].click();
//     }
// });
// const photos = [
//     'photo1.jpg',
//     'photo2.jpg',
//     'photo3.jpg',
//     'photo4.jpg',
//     'photo5.jpg'
// ];

// let currentIndex = 0;

// const currentPhoto = document.getElementById('currentPhoto');

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowRight') {
//         currentIndex = (currentIndex + 1) % photos.length;
//         currentPhoto.src = photos[currentIndex];
//     } else if (event.key === 'ArrowLeft') {
//         currentIndex = (currentIndex - 1 + photos.length) % photos.length;
//         currentPhoto.src = photos[currentIndex];
//     }
// });

