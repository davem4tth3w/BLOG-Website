function toggleMenu() {
  var navbarMenu = document.getElementById("navbarMenu");
  var isActive = navbarMenu.classList.toggle("active");
  var navbarBurger = document.querySelector(".navbar-burger");
  navbarBurger.classList.toggle("active");
  
  if (isActive) {
    navbarMenu.style.height = navbarMenu.scrollHeight + "px";
  } else {
    navbarMenu.style.height = "0";
  }
}

// Function to reset menu height on window resize
function handleResize() {
  var navbarMenu = document.getElementById("navbarMenu");
  if (window.innerWidth > 768) {
    navbarMenu.style.height = "auto"; // Reset height on desktop view
  } else if (!navbarMenu.classList.contains("active")) {
    navbarMenu.style.height = "0"; // Keep height 0 if not active in mobile view
  }
}

// Add event listener for window resize
window.addEventListener("resize", handleResize);
