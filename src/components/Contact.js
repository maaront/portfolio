import React from "react";

export default function Contact() {
  return (
    <div className="page-container" id="contact-container">
      <h2 className="headline" id="headline_contact">CONTACT</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="name">My name is </label>
        <input type="text" id="name" name="name" required />
        <span>, </span>
        

        <label htmlFor="email">my email is </label>
        <input type="email" id="email" name="email" required />
        <span>, </span>
        

        <label htmlFor="subject">and I’d like to talk about </label>
        <input type="text" id="subject" name="subject" required />
        <span>.</span>
        <br />

        <input className="btn" type="submit" value="SEND" />
      </form>
    </div>
  );
}
