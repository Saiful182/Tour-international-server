import React from 'react';

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-area">

            <h3>Peoples Care Hospital</h3>

            <div className="important-links">
                <div>
                    <h3>About Us</h3>
                    <p>House #16, Road # 2,</p>
                    <p> Dhanmondi R/A, Dhaka-1205, Bangladesh</p>
                    <p>Phone : 09613 787801, 09666 787801</p>
                    <p> E-mail : info@populardiagnostic.com</p>
                </div>
                <div className="importantLinks">
                    <h3>Important Links</h3>
                    <p><a href="#">Carier</a></p>
                    <p><a href="#">Management Team</a></p>
                    <p><a href="#">WHO</a></p>
                    <p><a href="#">UNICEFF</a></p>
                    <p><a href="#">UNO</a></p>

                </div>
                <div className="importantLinks">
                    <h3>Quick Links</h3>
                    <p><a href="#">Servies</a></p>
                    <p><a href="#">Facility</a></p>
                    <p><a href="#">User Profile</a></p>
                    <p><a href="#">Pachaint review</a></p>
                    <p><a href="#">Call For Appoinment</a></p>
                </div>
            </div>
        </div >
    );
};

export default Footer;