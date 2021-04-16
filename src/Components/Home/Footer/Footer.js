import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterColmn from './FooterColmn/FooterColmn';

const Footer = () => {
    const LatestTweets = [
        { name: "FlashMart - Multipurpose Supermarket #OpenCart #Theme with Clean & Elegant Designs Save Now:" },
        { name: "Intro #Sale! Great chance to get powerful OpenCart theme FlashMart with only $19 - Best Price Ever!!! Multi Vendor Compatible Pro Built-in Modules" },
        { name: "Webkul Marketplace Designs" },
        { name: "eMarket - Multi-purpose MarketPlace OpenCart 3 Theme with 30+ Homepages & Mobile Layouts Included" }
    ]
    const ourAddress = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const info = [
        { name: "About us" },
        { name: "Blog" },
        { name: "Special offers" },
        { name: "F.A.Q" },
        { name: "Privacy policy Terms of us" },
        { name: "About us" },

    ]
    const services = [
        { name: "Nursing Home" },
        { name: "Plustic Surgery" },
        { name: "Cardio Monitoring" },
        { name: "Emergency Help" },
        { name: "Health Care Solutions" },
        { name: "Free Consultation" }

    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterColmn key={1} menuTitle={"Latest Tweets"} menuItems={LatestTweets} />
                    <FooterColmn key={2} menuTitle="Our Services" menuItems={services} />
                    <FooterColmn key={3} menuTitle="Information" menuItems={info} />
                    <FooterColmn key={4} menuTitle="Contact" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon className="media-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon className="media-icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon className="media-icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-white">Call now</h6>
                            <button className="btn btn-outline-light">+2025550295</button>
                        </div>
                    </FooterColmn>
                </div>
                <hr />
                <div className="copyRight text-center text-white">
                    <div className="d-flex justify-content-between">
                        <p>Copyright {(new Date()).getFullYear()} All Rights Reserved | Designed by<a href="#" class="text-link"> Injamul Alam</a></p>


                        <p>Get in Touch | <a href="#top" class="text-link text-white">Back to Top</a></p>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;