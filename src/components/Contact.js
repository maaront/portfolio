import React, { useState } from "react";

export default function Contact() {
  const [inputWidth, setInputWidth] = useState("auto"); // Initial width of the input field

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const textWidth = inputValue.length > 0 ? event.target.scrollWidth + "px" : "auto"; // Set the width based on content or to auto if the field is empty

    setInputWidth(textWidth);
  };

  return (
    <div className="page-container" id="contact-container">
      <h2 className="headline" id="headline_contact">
        CONTACT
      </h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="name">My name is </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          style={{ width: inputWidth }}
          onChange={handleInputChange}
        />
        <span>, </span>

        <label htmlFor="email">my email is </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          style={{ width: inputWidth }}
          onChange={handleInputChange}
        />
        <span>, </span>

        <label htmlFor="subject">and I’d like to talk about </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          style={{ width: inputWidth }}
          onChange={handleInputChange}
        />
        <span>.</span>
        <br />

        <input className="btn" type="submit" value="SEND" />
      </form>
    </div>
  );
}
