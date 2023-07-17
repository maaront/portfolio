import React, { useState, useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Nav from "./Nav";
import Referrals from "./Referrals";
import Work from "./Work";
import Highlight from "../utils/highlight";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [lastPageChangeTime, setLastPageChangeTime] = useState(Date.now()); // This is for debouncing the scroll event

  // Define colors for the background of each page
  const pageBackgroundColors = {
    Home: `#ffffff`,
    Work: `#ffffff`,
    About: `#ffffff`,
    Referrals: `#ffffff`,
    Contact: `#f52c68`,
  };

  useEffect(() => {
    // Update the body background color to match the new page
    document.body.style.backgroundColor = pageBackgroundColors[currentPage];
  }, [currentPage]); //Re-run this effect when the currentPage changes

  const pages = ["Home", "Work", "About", "Contact"];
  // const pages = ["Home", "Work", "About", "Referrals", "Contact"]; // Removed referrals

  // This effect is for detecting when the user scrolls and changing the page accordingly
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault(); // Prevent page content from scrolling when changing pages

      // Begin "debouncing" to prevent the scroll event from firing too often
      const currentTime = Date.now(); // Get the current time
      if (currentTime - lastPageChangeTime < 1000) { // If the last page change was less than 1000ms ago (1 second)...
        return; //...do nothing. 
      }

      const currentIndex = pages.indexOf(currentPage); // Get the current page index
      if (event.deltaY > 0 && currentIndex < pages.length - 1) { // If the scroll is down and there is a next page...
        setLastPageChangeTime(currentTime); //...update the last page change time (for debouncing) and then...
        setCurrentPage(pages[currentIndex + 1]); //...go to next page.
      } else if (event.deltaY < 0 && currentIndex > 0) { // If the scroll is up and there is a previous page...
        setLastPageChangeTime(currentTime); //...update the last page change time (for debouncing) and then...
        setCurrentPage(pages[currentIndex - 1]); //...go to previous page.
      }
    };

    // Add event listener for scrolling
    window.addEventListener("wheel", handleScroll, { passive: false });

    // remove the event listener on unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentPage, lastPageChangeTime]); // Re-run the effect when `currentPage` changes


  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Work") {
      return <Work />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Referrals") {
      return <Referrals />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <SwitchTransition>
        <CSSTransition
          key={currentPage} // this tells react to switch components when the `currentPage` changes
          addEndListener={(node, done) => {
            // this tells react to listen to the `transitionend` event
            node.addEventListener("transitionend", done, false); // this tells react when the transition is done
          }}
          classNames="slide" // gives a class name to the transition for css to use
        >
          {renderPage()}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

Highlight();