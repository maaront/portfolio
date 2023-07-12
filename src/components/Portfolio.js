import React, { useState } from "react";
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
      return <Hero />;
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
      {renderPage()}
    </div>
  );
}