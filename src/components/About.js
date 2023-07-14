import React from "react";
export default function About() {
  return (
    <div className="page-container">
      <h2 className="headline" id="">
        ABOUT
      </h2>
      <section id="about-content">
        <img
          className="headshot"
          src="assets/photos/referrals/matt-turner-nobg.png"
          alt="Matthew Turner headshot"
        />
        <section className="about-text">
          <p>
            I'm <span className="red">Matt Turner</span>, a creative and constructive project
            and product manager with 12 years experience leading teams.
          </p>
          <br></br>
          <p>
            My professional experience touches on almost all aspects of the
            software space, including development, design, content, marketing,
            product owner, scrum master, and project management.
          </p>
        </section>
      </section>
    </div>
  );
}
