// script.js
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const normalElement = document.querySelectorAll('#normalanim');
  const leftToRightElement = document.querySelectorAll('#lefttoright');
  const bottomToTopElement = document.querySelectorAll("#bottomtotop");
  const topToBottomElement = document.querySelectorAll("#toptobottom");
  // normal animation 
  const normalAnim =   new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('normalanim'); // Add the class when visible
      } else { }
    });
  }, {
    threshold: 0.5, // Trigger when 50% of the element is visible
  });
  // left to right animation
 const leftToRight =   new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('lefttoright'); // Add the class when visible
      } else {      }
    });
  }, {
    threshold: 0.5, // Trigger when 50% of the element is visible
  });
 const topToBottom =   new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('toptobottom'); // Add the class when visible
      } else {      }
    });
  }, {
    threshold: 0.5, // Trigger when 50% of the element is visible
  });
  // bottom to top animation
  const bottomToTop =   new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('bottomtotop'); // Add the class when visible
      } else {      }
    });
  }, {
    threshold: 0.5, // Trigger when 50% of the element is visible
  });
  topToBottomElement.forEach(c => topToBottom.observe(c))
  bottomToTopElement.forEach(c => bottomToTop.observe(c));
  leftToRightElement.forEach(c => leftToRight.observe(c));
  normalElement.forEach(c => normalAnim.observe(c));
});