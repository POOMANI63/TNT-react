import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';

export function Rameswaram() {
    return (
        <div>
         
            {/* Hero Section with Rameswaram Image */}
            <section className="places-hero">
                <div className="hero-image" style={{ backgroundImage: "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/rameswaram-1655458291_5f6g7h8i9j0k1l2m3n4o.webp')" }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <div className="container">
                            <h1 className="hero-title">Rameswaram</h1>
                            <p className="hero-subtitle">Holy Island</p>
                            <p className="hero-description">A sacred pilgrimage site with magnificent temple architecture and serene beaches, located on an island connected by India's famous Pamban Bridge.</p>
                            <div className="hero-stats">
                                <div className="stat">
                                    <i className="fas fa-pray"></i>
                                    <span>Pilgrimage Site</span>
                                </div>
                                <div className="stat">
                                    <i className="fas fa-temperature-low"></i>
                                    <span>25°C - 35°C</span>
                                </div>
                                <div className="stat">
                                    <i className="fas fa-sun"></i>
                                    <span>Best: Oct-Apr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Things to Do Section */}
            <section className="things-to-do">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Things to do</h2>
                        <p className="section-subtitle">Experience the best activities in Rameswaram</p>
                    </div>

                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-water"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Take a Holy Dip at Agni Theertham</h3>
                                <p>Perform rituals and take a sacred bath at the sea-facing Agni Theertham, believed to wash away sins.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/kfSQ3iLMyV4O5nTlmav2W2JoEqlubyylRCeXG_Adc5E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MDU3ODg2MC9waG90/by9yYW1lc2h3YXJh/bS1pc2xhbmQtdGFt/aWwtbmFkdS1pbmRp/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SlBxNndkazJ4/M2Jld1Nlc1RtYnZI/Zzd3MHc4YkU2Um1N/Z3dBc1V3WUJrQT0"
                                    alt="Agni Theertham" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-pray"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Visit Ramanathaswamy Temple</h3>
                                <p>Explore one of the 12 Jyotirlinga temples with its famous 1,200-meter-long corridors and 22 sacred theerthams.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/kfSQ3iLMyV4O5nTlmav2W2JoEqlubyylRCeXG_Adc5E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MDU3ODg2MC9waG90/by9yYW1lc2h3YXJh/bS1pc2xhbmQtdGFt/aWwtbmFkdS1pbmRp/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SlBxNndkazJ4/M2Jld1Nlc1RtYnZI/Zzd3MHc4YkU2Um1N/Z3dBc1V3WUJrQT0"
                                    alt="Ramanathaswamy Temple" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-bridge"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Drive on Pamban Bridge</h3>
                                <p>Experience the thrilling drive on India's first sea bridge connecting Rameswaram to mainland.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/6aB7cD8eF9gH0iJ1kL2mN3oP4qR5sT6uV7wX8yZ9aB/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L1BhbWJhbl9C/cmlkZ2UuanBn"
                                    alt="Pamban Bridge" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-water"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Visit Dhanushkodi</h3>
                                <p>Explore the ghost town at the tip of the island, where the Indian Ocean and Bay of Bengal meet.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/9bC0dE1fG2hH3iI4jJ5kK6lL7mM8nN9oO0pP1qQ2rR/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL0RoYW51c2hr/b2RpX2JlYWNoLmpw/Zw"
                                    alt="Dhanushkodi" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-mosque"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Visit Kothandaramar Temple</h3>
                                <p>Explore the temple where Vibhishana surrendered to Lord Rama, located in Dhanushkodi.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/8cD1eF2gH3iJ4kL5mN6oP7qR8sT9uV0wX1yZ2aB3c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E1L0tvdGhhbmRh/cmFtYXJfVGVtcGxl/LmpwZw"
                                    alt="Kothandaramar Temple" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-camera"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Photography at Adam's Bridge</h3>
                                <p>Capture the natural limestone shoals that form the legendary bridge between India and Sri Lanka.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/1aB2cD3eF4gH5iJ6kL7mN8oP9qR0sT1uV2wX3yZ4aB/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L0FkYW1zX0Jy/aWRnZV9mcm9tX3Ro/ZV9haXIuanBn"
                                    alt="Adam's Bridge" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Attractions Section */}
            <section className="top-attractions">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Top Attractions</h2>
                        <p className="section-subtitle">Must-visit places in Rameswaram</p>
                    </div>

                    <div className="attractions-grid">
                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/kfSQ3iLMyV4O5nTlmav2W2JoEqlubyylRCeXG_Adc5E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MDU3ODg2MC9waG90/by9yYW1lc2h3YXJh/bS1pc2xhbmQtdGFt/aWwtbmFkdS1pbmRp/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SlBxNndkazJ4/M2Jld1Nlc1RtYnZI/Zzd3MHc4YkU2Um1N/Z3dBc1V3WUJrQT0"
                                    alt="Ramanathaswamy Temple" />
                            </div>
                            <div className="attraction-content">
                                <h3>Ramanathaswamy Temple</h3>
                                <p className="attraction-description">One of the 12 Jyotirlinga temples, famous for its longest corridor in the world (1,200 meters). The temple has 22 sacred theerthams where devotees perform rituals.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry Free (Special Darshan: ₹50-100)</span>
                                </div>
                                <a href="#" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/9bC0dE1fG2hH3iI4jJ5kK6lL7mM8nN9oO0pP1qQ2rR/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL0RoYW51c2hr/b2RpX2JlYWNoLmpw/Zw"
                                    alt="Dhanushkodi" />
                            </div>
                            <div className="attraction-content">
                                <h3>Dhanushkodi</h3>
                                <p className="attraction-description">A ghost town destroyed by the 1964 cyclone, now a tourist attraction where the Indian Ocean and Bay of Bengal meet. The ruins tell stories of its glorious past.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 6:00 AM - 6:00 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry Free (Jeep Ride: ₹200-300)</span>
                                </div>
                                <a href="#" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/8cD1eF2gH3iJ4kL5mN6oP7qR8sT9uV0wX1yZ2aB3c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E1L0tvdGhhbmRh/cmFtYXJfVGVtcGxl/LmpwZw"
                                    alt="Kothandaramar Temple" />
                            </div>
                            <div className="attraction-content">
                                <h3>Kothandaramar Temple</h3>
                                <p className="attraction-description">Located in Dhanushkodi, this temple is where Vibhishana surrendered to Lord Rama. The temple survived the 1964 cyclone and still stands as a testament to faith.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 6:00 AM - 12:00 PM, 4:00 PM - 8:00 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry Free</span>
                                </div>
                                <a href="#" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/1aB2cD3eF4gH5iJ6kL7mN8oP9qR0sT1uV2wX3yZ4aB/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L0FkYW1zX0Jy/aWRnZV9mcm9tX3Ro/ZV9haXIuanBn"
                                    alt="Adam's Bridge" />
                            </div>
                            <div className="attraction-content">
                                <h3>Adam's Bridge (Ram Setu)</h3>
                                <p className="attraction-description">A chain of limestone shoals between India and Sri Lanka, believed to be the bridge built by Lord Rama's army. A geological and mythological wonder.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> Visible during low tide</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> View from Dhanushkodi</span>
                                </div>
                                <a href="#" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}