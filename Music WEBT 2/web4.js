
var indexColour = 0;

    document.addEventListener("DOMContentLoaded", () => {
      indexColour = localStorage.getItem("indexColour") ? parseInt(localStorage.getItem("indexColour")) : 0;
      applyBackgroundColor();

      // Load filter type and value
      const savedFilterType = localStorage.getItem("filterType") || "name";
      const savedFilterValue = localStorage.getItem("filterValue") || "";

      // Set saved filter type and value
      const filterTypeSelect = document.getElementById("filter-type");
      filterTypeSelect.value = savedFilterType; // Set the selected filter type
      document.getElementById("filter-input").value = savedFilterValue; // Set the input value

      // Update placeholder based on saved filter type
      updateFilterInputPlaceholder();
    });

    function changeBackgroundColor() {
      indexColour = indexColour === 0 ? 1 : 0;
      localStorage.setItem("indexColour", indexColour);
      applyBackgroundColor();
    }

    function applyBackgroundColor() {
      if (indexColour === 0) {
        document.body.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 1) 4%, rgb(102, 0, 140) 80%)";
        document.body.style.color = "#333";
        setFontSize("1em");
      } else {
        document.body.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 1) 4%, rgb(255, 105, 180) 80%)";
        document.body.style.color = "#fff";
        setFontSize("1.1em");
      }
    }

    function setFontSize(size) {
      document.body.style.fontSize = size;
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

        document.addEventListener("DOMContentLoaded", function() {
            const readMoreBtn = document.getElementById('readMoreBtn');
            const additionalContent = document.getElementById('additionalContent');

            readMoreBtn.addEventListener('click', function() {
                if (additionalContent.style.display === "none" || additionalContent.style.display === "") {
                    additionalContent.style.display = "block"; 
                    readMoreBtn.textContent = "Read Less"; 
                    alert("Hello");
                } else {
                    additionalContent.style.display = "none"; 
                    readMoreBtn.textContent = "Read More";
                }
            });
        });



        

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

displayGreeting();


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

var addMemberBtn = document.getElementById('addMemberBtn');
addMemberBtn.addEventListener('click', function(){
    musicClub.addMember();
    musicClub.displayInfo();
});

const themeToggleBtn = document.getElementById("theme-toggle");
const filterInput = document.getElementById("filter-input");
const authSection = document.getElementById("auth-section");
const preferencesSection = document.getElementById("preferences-section");
const filterSection = document.getElementById("filter-section");

// Light/Dark Mode Toggle
themeToggleBtn.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  applyTheme();
});

function applyTheme() {
  const theme = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("light-mode", theme === "light");
  document.body.classList.toggle("dark-mode", theme === "dark");
}

function updateFilterInputPlaceholder() {
    const filterType = document.getElementById("filter-type").value;
    const filterInput = document.getElementById("filter-input");
    filterInput.placeholder = filterType === "name" ? "Enter name" : "Enter date (e.g., YYYY-MM-DD)";
  }

  // Apply and save the selected filter, then reload the page
  function applyFilter() {
    const filterType = document.getElementById("filter-type").value;
    const filterValue = document.getElementById("filter-input").value.trim();

    // Save filter type and value in local storage
    localStorage.setItem("filterType", filterType);
    localStorage.setItem("filterValue", filterValue);

    // Reload the page to apply the filter
    location.reload();
  }