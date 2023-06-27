// Gets the elements of the navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementById('navbar-links')[0]

// Toggles on and off the navbar for smaller size screen
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
