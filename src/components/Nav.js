import React from 'react';


//Function to keep the highlight div the same width as the <a> tag
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



// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {
  return (
    <div class="nav-container">
    <ul className="nav">
      <li className="nav-item">
      <div id="highlight"></div>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          HOME
        </a>
      </li>
      <li className="nav-item">
        <div id="highlight"></div>
        <a
          href="#work"
          onClick={() => handlePageChange('Work')}
          // Check to see if the currentPage is `Work`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
        >
          WORK
        </a>
      </li>
      <li className="nav-item">
      <div id="highlight"></div>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          ABOUT
        </a>
      </li>
      {/* <li className="nav-item">
      <div id="highlight"></div>
        <a
          href="#referrals"
          onClick={() => handlePageChange('Referrals')}
          // Check to see if the currentPage is `Referrals`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Referrals' ? 'nav-link active' : 'nav-link'}
        >
          REFERRALS
        </a>
      </li> */}
      <li className="nav-item">
      <div id="highlight"></div>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          CONTACT
        </a>
      </li>
    </ul>
    </div>
  );
}

export default Nav;
