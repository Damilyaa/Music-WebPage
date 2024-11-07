
const modal = document.getElementById("popupForm");

const btn = document.getElementById("openFormBtn");


const span = document.getElementById("closeBtn");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    const nextBtns = document.querySelectorAll('.next-btn');
    const backBtns = document.querySelectorAll('.back-btn');
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((s, index) => {
            s.style.display = index === step ? 'block' : 'none';
        });
    }

    nextBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    backBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    
    showStep(currentStep);

    document.getElementById('multiStepForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        
    });
});
function notification(){
    var sound = new Audio('level-up-191997.mp3');
    sound.currentTime = 0; 
    sound.play();
}

const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const logoutBtn = document.getElementById("logout-btn");

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  checkAuthStatus();
  applyTheme();
  applyFilter();
});

// User Authentication
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  if (username) {
    localStorage.setItem("username", username);
    checkAuthStatus();
  }
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  checkAuthStatus();
});

function checkAuthStatus() {
  const username = localStorage.getItem("username");
  if (username) {
    loginForm.classList.add("hidden");
    logoutBtn.classList.remove("hidden");
    preferencesSection.classList.remove("hidden");
    filterSection.classList.remove("hidden");
  } else {
    loginForm.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
    preferencesSection.classList.add("hidden");
    filterSection.classList.add("hidden");
  }
}