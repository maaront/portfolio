import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function HomePage() {
  
  const [showHeadline, setShowHeadline] = useState(false);
  const [showMaskText, setShowMaskText] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    setShowHeadline(true);
    setTimeout(() => setShowMaskText(true), 500); // Delay of 500ms
    setTimeout(() => setShowArrow(true), 1000); // Delay of 1000ms
  }, []);

  return (
    <div className="home-container">
      <CSSTransition in={showHeadline} timeout={1000} classNames="fade" unmountOnExit>
        <h1 className="headline">My name is Matt,<br></br>and I make</h1>
      </CSSTransition>
      <CSSTransition in={showMaskText} timeout={500} classNames="fade" unmountOnExit>
        <div className="mask-text">
          <h1 id="headline-2">DIGITAL <br></br>PRODUCTS</h1>
        </div>
      </CSSTransition>
      <CSSTransition in={showArrow} timeout={500} classNames="slide-down" unmountOnExit>
        <img className="home-arrow" src="/assets/down-arrow.svg" alt="arrow" />
      </CSSTransition>
    </div>
  );
}
