import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer--message">
          Please note that this online platform as well as the entirety of its
          content is purely for educational purposes and should not in any way
          substitute the opinion or advice of a certified financial advisor. If
          you seek counselling or advices concerning a personal situation, you
          should contact an independent certified professional.
        </div>
        <nav className="footer--navbar">
          <ul>
            <li>
              <Link to="/About">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/terms">Terms of service</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
        <div className="footer--copyright">Wealthface&nbsp;@2019</div>
      </footer>
    );
  }
}

export default Footer;
