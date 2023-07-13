import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Nav from "./Nav";
import Referrals from "./Referrals";
import Work from "./Work";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("Home");

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
          addEndListener={(node, done) => { // this tells react to listen to the `transitionend` event
            node.addEventListener("transitionend", done, false); // this tells react when the transition is done
          }}
          classNames='fade' // gives a class name to the transition for css to use
        >
          {renderPage()}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
