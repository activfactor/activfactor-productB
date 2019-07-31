import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">

                <div className="_footer-notes">
                    Please note that this online platform as well as the entirety of its
                    content is purely for educational purposes and should not in any way
                    substitute the opinion or advice of a certified financial advisor. If
                    you seek counselling or advices concerning a personal situation, you
                    should contact an independent certified professional.
                </div>

                <div className="footer-nav-links">
                    <div className="_item"><Link to="/About">About us</Link></div>
                    <div className="_item"><Link to="/contact">Contact us</Link></div>
                    <div className="_item"><Link to="/faq">FAQ</Link></div>
                    <div className="_item"><Link to="/terms">Terms of service</Link></div>
                    <div className="_item"><Link to="/privacy">Privacy Policy</Link></div>
                </div>

                <div className="footer-legal-copyright">Wealthface&nbsp;@2019</div>

            </footer>
        );
    }
}

export default Footer;
