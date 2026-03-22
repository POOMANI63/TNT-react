import './Footer.css'

export function Footer(){
    return(
         <footer className="footer-section">
                <div className="footer-container">
                    {/* Top Section */}
                    <div className="footer-top">
                        <div className="footer-brand">
                            <h2 className="footer-logo">Tamil Nadu Tourism</h2>
                            <p className="footer-tagline">Experience the soul of South India</p>
                            <div className="social-links">
                                <a href="#" className="social-link" aria-label="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-link" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="social-link" aria-label="Twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-link" aria-label="YouTube">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-links">
                            <h3 className="links-title">Quick Links</h3>
                            <ul className="links-list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Destinations</a></li>
                                <li><a href="#">Cultural Heritage</a></li>
                                <li><a href="#">Festivals</a></li>
                                <li><a href="#">Travel Guide</a></li>
                                <li><a href="#">Gallery</a></li>
                            </ul>
                        </div>

                        {/* Popular Destinations */}
                        <div className="footer-links">
                            <h3 className="links-title">Popular Destinations</h3>
                            <ul className="links-list">
                                <li><a href="#">Chennai</a></li>
                                <li><a href="#">Madurai</a></li>
                                <li><a href="#">Ooty</a></li>
                                <li><a href="#">Kanyakumari</a></li>
                                <li><a href="#">Rameswaram</a></li>
                                <li><a href="#">Coimbatore</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-contact">
                            <h3 className="links-title">Contact Us</h3>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Tamil Nadu Tourism Department,<br /> Chennai - 600009</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-phone"></i>
                                    <span>+91 44 2538 3333</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-envelope"></i>
                                    <span>info@tamilnadutourism.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-divider"></div>

                    {/* Bottom Section */}
                    <div className="footer-bottom">
                        <div className="footer-legal">
                            <p>&copy; 2024 Tamil Nadu Tourism. All rights reserved.</p>
                            <div className="legal-links">
                                <a href="#">Privacy Policy</a>
                                <span>|</span>
                                <a href="#">Terms of Service</a>
                                <span>|</span>
                                <a href="#">Cookie Policy</a>
                            </div>
                        </div>

                        <div className="footer-credits">
                            <p>Made with <i className="fas fa-heart"></i> for Tamil Nadu</p>
                            <div className="government-badges">
                                <span className="badge">Incredible India</span>
                                <span className="badge">Government of Tamil Nadu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}