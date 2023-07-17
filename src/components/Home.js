import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const headlines = ['DIGITAL PRODUCTS', 'WEB APPLICATIONS', 'MOBILE APPS', 'UI/UX DESIGNS'];

export default function HomePage() {
  const [showHeadline, setShowHeadline] = useState(false);
  const [showMaskText, setShowMaskText] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

  useEffect(() => {
    setShowHeadline(true);
    setTimeout(() => setShowMaskText(true), 500); // Delay of 500ms
    setTimeout(() => setShowArrow(true), 1000); // Delay of 1000ms

    const interval = setInterval(() => {
      setCurrentHeadlineIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % headlines.length;
        return newIndex === 0 ? headlines.length - 1 : newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <CSSTransition in={showHeadline} timeout={1000} classNames="fade" unmountOnExit>
        <h1 className="headline">My name is Matt,<br />and I make</h1>
      </CSSTransition>
      <CSSTransition in={showMaskText} timeout={500} classNames="fade" unmountOnExit>
        <div className="mask-text">
          <CSSTransition
            in={showMaskText}
            timeout={500}
            classNames="fade"
            unmountOnExit
            key={currentHeadlineIndex}
          >
            <h1 id="headline-2">{headlines[currentHeadlineIndex]}</h1>
          </CSSTransition>
        </div>
      </CSSTransition>
      <CSSTransition in={showArrow} timeout={500} classNames="slide-down" unmountOnExit>
        <img className="home-arrow" src="/assets/down-arrow.svg" alt="arrow" />
      </CSSTransition>
    </div>
  );
}
