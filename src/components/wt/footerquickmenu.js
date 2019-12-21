import React from "react";

import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'


class Footerquickmenu extends React.Component {
  render() {
    return (
      <div className="row mb-5">
        <div className="col-md-12">
          <h3 className="footer-heading mb-4">Quick Menu</h3>
        </div>
        <div className="col-md-6 col-lg-6">
          <ul className="list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-6">
          <ul className="list-unstyled">
            
            <li>
              <a href="/upcomingmatches">Schedule</a>
            </li>
            <li>
              <a href="/previousmatches">Past Games</a>
            </li>
            {/**<li>
              <a href="#">Membership</a>
            </li>**/}
          </ul>
        </div>
      </div>
    );
  }
}

export default Footerquickmenu;
