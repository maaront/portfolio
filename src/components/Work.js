import React from "react";

export default function Work() {
  return (
    <div className="page-container" >
      <h2 className="headline">WORK</h2>
      <div id="work-container">
<div className="card-container" id="yard-to-table">
      <a href="https://hidden-beyond-87879-91f0e9d6f69e.herokuapp.com/" >
        <div className="overlay">
          <div className="items"></div>
          <div className="items head">
            <h3>Yard To Table</h3>
          </div>
          <div className="items tech">
            <p>REACT // MONGOOSE // NODE // TAILWIND</p>
          </div>
        </div>
      </a>
      </div>
      <div className="card-container" id="leaf-link">
        <div className="overlay">
          <div className="items"></div>
          <div className="items head">
            <h3>LeafLink</h3>
          </div>
          <div className="items tech">
            <p>NODE // EXPRESS // TAILWIND // SEQUELIZE // HANDLEBARS</p>
          </div>
        </div>
      </div>

      <div className="work-grid">
        <div className="card-container" id="baseball-schedule">
          <div className="overlay">
            <div className="items"></div>
            <div className="items head">
              <h3>Baseball Tracker</h3>
            </div>
            <div className="items tech">
              <p>OPEN WEATHER // ESPN STATS // JS</p>
            </div>
          </div>
        </div>

  
      </div>
    </div>
    </div>
  );
}
