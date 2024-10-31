var indexColour = 0;

function changeBackgroundColor() {
    const body = document.body;
    const currentMode = localStorage.getItem('colorMode') || 'dark';

    if (currentMode === 'dark') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('colorMode', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('colorMode', 'dark');
    }
}

function applySavedColorMode() {
    const savedMode = localStorage.getItem('colorMode') || 'dark';
    document.body.classList.add(savedMode + '-mode');
}

function setFontSize(size) {
    document.querySelectorAll('*').forEach(element => {
        element.style.fontSize = size;
    });
}

function updateDateTime() {
    const now = new Date();
    const options = { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
    };
    const formattedDateTime = now.toLocaleString('en-US', options);
    document.getElementById('currentDateTime').textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 60000);

document.getElementById('toggleDateTimeBtn').addEventListener('click', function() {
    const dateTimeBox = document.querySelector('.date-time-box'); 
    if (dateTimeBox.classList.contains('hidden')) {
        updateDateTime(); 
        dateTimeBox.classList.remove('hidden'); 
        this.textContent = 'Hide'; 
    } else {
        dateTimeBox.classList.add('hidden'); 
        this.textContent = 'Show'; 
    }
});

document.querySelectorAll('.accordion-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

function validateForm() {
    let isValid = true;
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });
    
    const performance = document.getElementById('performance').value;
    if (!performance) {
        document.getElementById('performanceError').textContent = 'Performance is required.';
        isValid = false;
    }
    
    const telegram = document.getElementById('telegram').value;
    if (!telegram) {
        document.getElementById('telegramError').textContent = "Leader's Telegram is required.";
        isValid = false;
    }
    
    const instruments = document.getElementById('instruments').value;
    if (!instruments) {
        document.getElementById('instrumentsError').textContent = 'Instruments are required.';
        isValid = false;
    }
    
    const message = document.getElementById('message').value;
    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }
    
    const date = document.getElementById('date').value;
    if (!date) {
        document.getElementById('dateError').textContent = 'Date selection is required.';
        isValid = false;
    }
    
    const time = document.getElementById('time').value;
    if (!time) {
        document.getElementById('timeError').textContent = 'Time selection is required.';
        isValid = false;
    }
    
    return isValid;
}

const stars = document.querySelectorAll('.stars');
const ratingMessage = document.getElementById('ratingMessage');

stars.forEach(star => {
    star.addEventListener('click', function() {
        const ratingValue = this.getAttribute('data-value');
        stars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < ratingValue; i++) {
            stars[i].classList.add('selected');
        }
        ratingMessage.textContent = `You rated: ${ratingValue} star(s)`;
    });
});

function changeBackgroundColor() {
    const body = document.body;
    const currentMode = localStorage.getItem('colorMode') || 'dark';

    if (currentMode === 'dark') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('colorMode', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('colorMode', 'dark');
    }
}

function applySavedColorMode() {
    const savedMode = localStorage.getItem('colorMode') || 'dark';
    document.body.classList.add(savedMode + '-mode');
}

document.addEventListener('DOMContentLoaded', function() {
    applySavedColorMode();
    displayGreeting();
    updateDateTime();
    setInterval(updateDateTime, 60000);
    initializeAuth();

    document.getElementById('toggleDateTimeBtn').addEventListener('click', toggleDateTime);
    document.getElementById('addMemberBtn').addEventListener('click', () => {
        musicClub.addMember();
    });

    document.getElementById('yourFormId').addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    if (document.querySelector('.upcoming-events')) {
        applyFilterSettings();
    }
});

function displayGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    document.getElementById("greeting").textContent = greeting;
}

function updateDateTime() {
    const now = new Date();
    const options = { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
    };
    const formattedDateTime = now.toLocaleString('en-US', options);
    document.getElementById('currentDateTime').textContent = formattedDateTime;
}

function toggleDateTime() {
    const dateTimeBox = document.querySelector('.date-time-box');
    const button = this;

    if (dateTimeBox.classList.contains('hidden')) {
        updateDateTime();
        dateTimeBox.classList.remove('hidden');
        button.textContent = 'Hide';
    } else {
        dateTimeBox.classList.add('hidden');
        button.textContent = 'Show';
    }
}

function initializeAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');
    const authDiv = document.createElement('div');
    authDiv.className = 'auth-container ml-3';

    if (isLoggedIn) {
        authDiv.innerHTML = `
            <span class="text-white mr-2">Welcome, ${username}</span>
            <button class="btn btn-outline-light" onclick="logout()">Logout</button>
        `;
    } else {
        authDiv.innerHTML = `
            <button class="btn btn-outline-light" onclick="showLoginModal()">Login</button>
        `;
    }

    document.querySelector('#navbarNav').appendChild(authDiv);
}

function showLoginModal() {
    const username = prompt("Enter username:");
    if (username) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        location.reload();
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    location.reload();
}

const musicClub = {
    name: "AITU Music Club",
    members: 50,
    genres: ["Rock", "Jazz", "Pop", "Classical"],
    addMember: function() {
        this.members++;
        this.displayInfo();
    },
    displayInfo: function() {
        document.getElementById("clubInfo").textContent = `${this.name} has ${this.members} members. Genres include: ${this.genres.join(", ")}`;
    }
};

function validateForm() {
    let isValid = true;

    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });

    const performance = document.getElementById('performance').value;
    if (!performance) {
        document.getElementById('performanceError').textContent = 'Performance is required.';
        isValid = false;
    }

    return isValid;
}

function saveFilterSettings() {
    const filterSettings = {
        category: document.getElementById('categoryFilter').value,
        date: document.getElementById('dateFilter').value,
    };
    localStorage.setItem('eventFilters', JSON.stringify(filterSettings));
}

function applyFilterSettings() {
    const savedFilters = JSON.parse(localStorage.getItem('eventFilters'));
    if (savedFilters) {
        document.getElementById('categoryFilter').value = savedFilters.category;
        document.getElementById('dateFilter').value = savedFilters.date;
    }
}

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
let currentIndex = 0;

function setFocus(index) {
    navLinks.forEach(link => link.classList.remove('focused'));
    navLinks[index].focus();
    navLinks[index].classList.add('focused');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % navLinks.length;
        setFocus(currentIndex);
        event.preventDefault();
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
        setFocus(currentIndex);
        event.preventDefault();
    }
});

setFocus(currentIndex);
