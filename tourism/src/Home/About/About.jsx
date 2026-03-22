
import './About.css'; 
import Beast from'../../Images/Beast.jpg'
import Gokil from'../../Images/Gokil.jpg'
export function About() {
    return (
        <div>
        
            
            {/* About Hero Section */}
            <section className="about-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">About Tamil Nadu Tourism</h1>
                        <p className="hero-subtitle">Discover the Soul of Incredible India</p>
                        <p className="hero-description">Welcome to the land of vibrant culture, ancient temples, stunning beaches, and majestic hill stations.</p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision">
                <div className="container">
                    <div className="mv-grid">
                        <div className="mv-card mission-card">
                            <div className="mv-icon">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h3>Our Mission</h3>
                            <p>To promote Tamil Nadu as a premier tourist destination by showcasing its rich cultural heritage, natural beauty, and diverse experiences while ensuring sustainable tourism development.</p>
                        </div>
                        
                        <div className="mv-card vision-card">
                            <div className="mv-icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3>Our Vision</h3>
                            <p>To position Tamil Nadu as the most preferred tourist destination in India, offering world-class facilities while preserving our cultural and environmental heritage for future generations.</p>
                        </div>
                        
                        <div className="mv-card values-card">
                            <div className="mv-icon">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h3>Our Values</h3>
                            <p>We believe in sustainable tourism, cultural preservation, exceptional visitor experiences, and promoting local communities through tourism development.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Content Section */}
            <section className="about-content">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="content-main">
                            <h2 className="section-title">Welcome to Tamil Nadu</h2>
                            <div className="content-text">
                                <p>Tamil Nadu, located in the southern part of India, is a land of diverse landscapes, rich cultural heritage, and ancient traditions. Known as the "Land of Temples," it boasts over 33,000 ancient temples that showcase magnificent Dravidian architecture.</p>
                                
                                <p>The state offers a unique blend of experiences - from the serene beaches of Marina and Covelong to the misty hills of Ooty and Kodaikanal, from the spiritual aura of Madurai and Rameswaram to the vibrant culture of Chennai and Coimbatore.</p>
                                
                                <div className="highlight-box">
                                    <h4><i className="fas fa-star"></i> Why Choose Tamil Nadu?</h4>
                                    <p>With UNESCO World Heritage Sites, pristine beaches, wildlife sanctuaries, hill stations, and a rich culinary tradition, Tamil Nadu offers something for every traveler.</p>
                                </div>
                            </div>
                            
                            <div className="stats-section">
                                <h3>Tamil Nadu Tourism in Numbers</h3>
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <div className="stat-number">33,000+</div>
                                        <div className="stat-label">Ancient Temples</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">1072 km</div>
                                        <div className="stat-label">Coastline</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">15</div>
                                        <div className="stat-label">Hill Stations</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">5</div>
                                        <div className="stat-label">UNESCO Sites</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="content-sidebar">
                            <div className="sidebar-card">
                                <h3><i className="fas fa-trophy"></i> Awards & Recognition</h3>
                                <ul className="awards-list">
                                    <li>Best State for Tourism - National Tourism Awards</li>
                                    <li>Most Tourist-Friendly State - India Today Survey</li>
                                    <li>Best Cultural Destination - Travel + Leisure</li>
                                    <li>Excellence in Sustainable Tourism</li>
                                </ul>
                            </div>
                            
                            <div className="sidebar-card">
                                <h3><i className="fas fa-calendar-check"></i> Popular Festivals</h3>
                                <ul className="festivals-list">
                                    <li>Pongal (Jan) - Harvest Festival</li>
                                    <li>Madurai Meenakshi Wedding (Apr)</li>
                                    <li>Mahabalipuram Dance Festival (Dec-Jan)</li>
                                    <li>Chennai Music Season (Dec)</li>
                                    <li>Karthigai Deepam (Nov-Dec)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Meet Our Team</h2>
                        <p className="section-subtitle">Dedicated professionals working to enhance your travel experience</p>
                    </div>
                    
                    <div className="team-grid">
                        <div className="team-card">
                            <div className="team-image">
                                <img src={Beast} alt="Tourism Director" />
                            </div>
                            <div className="team-info">
                                <h4>Dr. M.Poomani</h4>
                                <p className="team-role">Director of Tourism</p>
                                <p className="team-desc">Over 20 years of experience in tourism development and management.</p>
                            </div>
                        </div>
                        
                        <div className="team-card">
                            <div className="team-image">
                                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Cultural Advisor" />
                            </div>
                            <div className="team-info">
                                <h4>Riya Kannan</h4>
                                <p className="team-role">Cultural Heritage Advisor</p>
                                <p className="team-desc">Expert in Tamil culture, temple architecture, and traditional arts.</p>
                            </div>
                        </div>
                        
                        <div className="team-card">
                            <div className="team-image">
                                <img src={Gokil} alt="Eco Tourism Head" />
                            </div>
                            <div className="team-info">
                                <h4>Gokil</h4>
                                <p className="team-role">Eco Tourism Head</p>
                                <p className="team-desc">Specialized in sustainable tourism and wildlife conservation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="contact-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Need Help Planning Your Trip?</h2>
                        <p>Our tourism experts are here to help you create the perfect Tamil Nadu experience.</p>
                        <div className="cta-buttons">
                            <a href="/contact" className="cta-btn primary">
                                <i className="fas fa-envelope"></i> Contact Us
                            </a>
                            <a href="tel:+916369884978" className="cta-btn secondary">
                                <i className="fas fa-phone"></i> Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </div>
    );
}