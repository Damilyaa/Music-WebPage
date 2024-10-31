
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

    // Function to show the current step
    function showStep(step) {
        steps.forEach((s, index) => {
            s.style.display = index === step ? 'block' : 'none';
        });
    }

    // Next button functionality
    nextBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    // Back button functionality
    backBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    // Show the first step initially
    showStep(currentStep);

    // Handle form submission
    document.getElementById('multiStepForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        // You can handle the form data here
    });
});
function notification(){
    var sound = new Audio('level-up-191997.mp3');
    sound.currentTime = 0; // Reset sound to the beginning
    sound.play();
}
