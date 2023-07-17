

//Function to keep the highlight div the same width as the <a> tag
function Highlight () {

// Select all elements with the class "nav-item"
const navItems = document.querySelectorAll('.nav-item');

// Loop through each "nav-item"
navItems.forEach((item) => {
  // Get the highlight div and sibling <a> tag within the current "nav-item"
  const highlight = item.querySelector('#highlight');
  const link = item.querySelector('a');

  // Add event listener for when mouse enters the "nav-item"
  item.addEventListener('mouseenter', () => {
    // Set the width of the highlight div to match the width of the <a> tag
    highlight.style.width = `${link.offsetWidth}px`;
  });

  // Add event listener for when mouse leaves the "nav-item"
  item.addEventListener('mouseleave', () => {
    // Set the width of the highlight div back to 0
    highlight.style.width = '0';
  });
});
};

export default Highlight;