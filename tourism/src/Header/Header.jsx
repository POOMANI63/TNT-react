import icon from '../Images/tamilnadu2.jpg';
import './Header.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img className="logo1" src={icon} alt="Tamil Nadu Logo" />
                <h2>TN <br />Tourism</h2>
            </div>
            <nav>
                <ul>
                    <li className="nav-item">
                        <span className="nav-text">Destinations <i className="fas fa-chevron-down"></i></span>
                        <div className="dropdown destinations-dropdown">
                            <div className="dropdown-content">
                                <Link to="/destinations/ooty">
                                    <h5><i className="fas fa-map-marker-alt"></i> Ooty</h5>
                                </Link>
                                <Link to="/destinations/madurai">
                                    <h5><i className="fas fa-map-marker-alt"></i> Madurai</h5>
                                </Link>
                                <Link to="/destinations/coimbatore">
                                    <h5><i className="fas fa-map-marker-alt"></i> Coimbatore</h5>
                                </Link>
                                <Link to="/destinations/chennai">
                                    <h5><i className="fas fa-map-marker-alt"></i> Chennai</h5>
                                </Link>
                                <Link to="/destinations/kanyakumari">
                                    <h5><i className="fas fa-map-marker-alt"></i> Kanyakumari</h5>
                                </Link>
                                <Link to="/destinations/rameswaram">
                                    <h5><i className="fas fa-map-marker-alt"></i> Rameswaram</h5>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <span className="nav-text">Experiences <i className="fas fa-chevron-down"></i></span>
                        <div className="dropdown experiences-dropdown">
                            <div className="dropdown-content">
                                <Link to="/experiences/culinary-tours">
                                    <h5><i className="fas fa-utensils"></i> Culinary Tours</h5>
                                </Link>
                                <Link to="/experiences/adventure-sports">
                                    <h5><i className="fas fa-hiking"></i> Adventure Sports</h5>
                                </Link>
                                <Link to="/experiences/spiritual-journeys">
                                    <h5><i className="fas fa-hands-praying"></i> Spiritual Journeys</h5>
                                </Link>
                                <Link to="/experiences/heritage-walks">
                                    <h5><i className="fas fa-landmark"></i> Heritage Walks</h5>
                                </Link>
                                <Link to="/experiences/eco-tourism">
                                    <h5><i className="fas fa-leaf"></i> Eco Tourism</h5>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <span className="nav-text">Virtual Tour <i className="fas fa-chevron-down"></i></span>
                        <div className="dropdown virtual-dropdown">
                            <div className="dropdown-content">
                                <Link to="/virtual/360-temples">
                                    <h5><i className="fas fa-vr-cardboard"></i> 360° Temples</h5>
                                </Link>
                                <Link to="/virtual/video-tours">
                                    <h5><i className="fas fa-video"></i> Video Tours</h5>
                                </Link>
                                <Link to="/virtual/photo-gallery">
                                    <h5><i className="fas fa-camera"></i> Photo Gallery</h5>
                                </Link>
                                <Link to="/virtual/audio-guides">
                                    <h5><i className="fas fa-headset"></i> Audio Guides</h5>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <span className="nav-text">Plan your Trip <i className="fas fa-chevron-down"></i></span>
                        <div className="dropdown plan-dropdown">
                            <div className="dropdown-content">
                                <Link to="/plan/accommodation">
                                    <h5><i className="fas fa-hotel"></i> Accommodation</h5>
                                </Link>
                                <Link to="/plan/transportation">
                                    <h5><i className="fas fa-bus"></i> Transportation</h5>
                                </Link>
                                <Link to="/plan/itinerary-builder">
                                    <h5><i className="fas fa-calendar-alt"></i> Itinerary Builder</h5>
                                </Link>
                                <Link to="/plan/packages">
                                    <h5><i className="fas fa-tag"></i> Packages & Deals</h5>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <span className="nav-text">Gallery <i className="fas fa-chevron-down"></i></span>
                        <div className="dropdown gallery-dropdown">
                            <div className="dropdown-content">
                                <Link to="/gallery/photo-gallery">
                                    <h5><i className="fas fa-images"></i> Photo Gallery</h5>
                                </Link>
                                <Link to="/gallery/video-gallery">
                                    <h5><i className="fas fa-video"></i> Video Gallery</h5>
                                </Link>
                                <Link to="/gallery/user-uploads">
                                    <h5><i className="fas fa-camera-retro"></i> User Uploads</h5>
                                </Link>
                                <Link to="/gallery/featured-collections">
                                    <h5><i className="fas fa-star"></i> Featured Collections</h5>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <span className="nav-text">More <i className="fas fa-chevron-down"></i></span>
                        <div className="dropdown more-dropdown">
                            <div className="dropdown-content">
                                <Link to="/More/about">
                                    <h5><i className="fas fa-info-circle"></i> About Us</h5>
                                </Link>
                                <Link to="/contact">
                                    <h5><i className="fas fa-envelope"></i> Contact Us</h5>
                                </Link>
                                <Link to="/news">
                                    <h5><i className="fas fa-newspaper"></i> News & Updates</h5>
                                </Link>
                                <Link to="/faqs">
                                    <h5><i className="fas fa-question-circle"></i> FAQs</h5>
                                </Link>
                                <Link to="/terms">
                                    <h5><i className="fas fa-file-alt"></i> Terms & Conditions</h5>
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}