import React, { Component } from "react";
import { Link } from 'react-router-dom';
import classes from './Footer.module.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={classes.message}>
          Please note that this online platform as well as the entirety of its
          content is purely for educational purposes and should not in any way
          substitute the opinion or advice of a certified financial advisor. If
          you seek counselling or advices concerning a personal situation, you
          should contact an independent certified professional.
        </div>
        <nav className={classes.navbar}>
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
        <div className={classes.copyright}>Wealthface&nbsp;@2019</div>
      </footer>
    );
  }
}

export default Footer;
