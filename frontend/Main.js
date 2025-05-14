let show = false
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if(show == false) {
        navLinks.style.translate = "100% 0%"
        show = true
    } else {
        navLinks.style.translate = "-100%  0%"
        show = false
    }
  }