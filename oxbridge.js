// ========== MENU ==========
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

// ========== DROPDOWN ==========
function toggleDropdown(e) {
  e.stopPropagation();
  const dropdown = e.target.nextElementSibling;
  dropdown.classList.toggle("show");
}

// ✅ Updated: works for multiple dropdowns, hover on desktop, click on mobile
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', toggleDropdown);

  // Optional: handle hover for desktop
  if (window.matchMedia("(hover: hover)").matches) {
    const panel = toggle.nextElementSibling;
    toggle.parentElement.addEventListener('mouseenter', () => {
      panel.classList.add('show');
    });
    toggle.parentElement.addEventListener('mouseleave', () => {
      panel.classList.remove('show');
    });
  }
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  dropdownToggles.forEach(toggle => {
    const dropdown = toggle.nextElementSibling;
    if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
});

// ========== FADE ANIMATION ==========
const fadeElements = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fadeElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


function openModal() {
  document.getElementById("videoModal").style.display = "block";
  document.getElementById("campusVideo").play();
}

// Close Modal
function closeModal() {
  document.getElementById("videoModal").style.display = "none";
  document.getElementById("campusVideo").pause();
  document.getElementById("campusVideo").currentTime = 0;
}

// Agar modal ke bahar click kare to band ho jaye
window.onclick = function(event) {
  let modal = document.getElementById("videoModal");
  if (event.target == modal) {
    closeModal();
  }
}

    

 // ✅ Show/Hide details per card
  document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      let details = this.nextElementSibling;
      details.style.display = details.style.display === "block" ? "none" : "block";
    });
  });


  function toggleDetails(btn) {
      const details = btn.nextElementSibling;
      if (details.style.display === "block") {
        details.style.display = "none";
        btn.innerText = "View Details";
      } else {
        details.style.display = "block";
        btn.innerText = "Hide Details";
      }
    }
      // ===== Preloader Logic =====
   // ===== Preloader Logic =====
    window.addEventListener('load', function() {
      setTimeout(function() {
        const preloader = document.getElementById('preloader');
        preloader.classList.add('hidden');
        
        // Remove preloader from DOM after transition completes
        setTimeout(function() {
          preloader.style.display = 'none';
        }, 500);
      }, 1500); // Show preloader for at least 1.5 seconds
});
const form = document.querySelector(".contact-form form");

form.parentNode.appendChild(successMsg);

// Show success
function showSuccess() {
  successMsg.style.display = "block";
  setTimeout(() => {
    successMsg.style.opacity = "1";
    successMsg.style.transform = "translateY(0)";
  }, 50);

  setTimeout(() => {
    successMsg.style.opacity = "0";
    successMsg.style.transform = "translateY(-10px)";
  }, 2500);

  setTimeout(() => {
    successMsg.style.display = "none";
  }, 3000);
}

// Error functions
function showError(input, message) {
  let error = input.parentNode.querySelector(".error-msg");
  if (error) error.remove();

  error = document.createElement("small");
  error.className = "error-msg";
  error.textContent = message;
  error.style.cssText = `
    color: red;
    font-size: 13px;
    display: block;
    margin-top: 5px;
  `;
  input.parentNode.appendChild(error);
}

function removeError(input) {
  let error = input.parentNode.querySelector(".error-msg");
  if (error) error.remove();
}

// Email validation
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// Number validation (only digits allowed, min length 7)
function isValidNumber(number) {
  const re = /^[0-9]{7,15}$/; // 7 to 15 digits
  return re.test(number);
}

// Button click event
button.addEventListener("click", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll(".input");
  let isValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      showError(input, "This field is required");
      isValid = false;
    } 
    else if (input.type === "email" && !isValidEmail(input.value)) {
      showError(input, "Please enter a valid email");
      isValid = false;
    } 
    else if (input.type === "number" && !isValidNumber(input.value)) {
      showError(input, "Please enter a valid phone number (7-15 digits)");
      isValid = false;
    } 
    else {
      removeError(input);
    }
  });

  if (!isValid) return;

  // Agar sab sahi hai
  showSuccess();
  form.reset();
});
