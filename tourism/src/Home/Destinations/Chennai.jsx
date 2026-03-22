import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';

export function Chennai() {
    return (
        <div>
     
            {/* Hero Section with Chennai Image */}
            <section className="places-hero">
                <div className="hero-image" style={{ backgroundImage: "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/chennai-1655457725_d8c1a3f3d6c7e8f9a0b1.webp')" }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <div className="container">
                            <h1 className="hero-title">Chennai</h1>
                            <p className="hero-subtitle">Gateway to South India</p>
                            <p className="hero-description">The cultural capital of South India, Chennai blends ancient temples, colonial architecture, vibrant arts, and modern city life.</p>
                            <div className="hero-stats">
                                <div className="stat">
                                    <i className="fas fa-city"></i>
                                    <span>Metropolitan City</span>
                                </div>
                                <div className="stat">
                                    <i className="fas fa-temperature-high"></i>
                                    <span>24°C - 37°C</span>
                                </div>
                                <div className="stat">
                                    <i className="fas fa-sun"></i>
                                    <span>Best: Nov-Feb</span>
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
                        <p className="section-subtitle">Experience the best activities in Chennai</p>
                    </div>

                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-umbrella-beach"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Visit Marina Beach</h3>
                                <p>Enjoy the second longest urban beach in the world, perfect for evening walks, horse rides, and local snacks.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/lbE5Hh2wq4NKLQqyQ1o6UJYhWjq6XqxCvQx5I1JcR8U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I5L01hcmluYV9C/ZWFjaF9WaWV3Lmpw/Zw"
                                    alt="Marina Beach" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-pray"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Explore Kapaleeshwarar Temple</h3>
                                <p>Visit this ancient Dravidian-style temple in Mylapore, dedicated to Lord Shiva with stunning architecture.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/8nnMlwpVYZdK2ohvQLhioKM5oGFIbdmU2kysaJN_dLU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z29kaWdpdC5jb20v/Y29udGVudC9kYW0v/Z29kaWdpdC9kaXJl/Y3Rwb3J0YWwvZW4v/bmFnYW5hdGhhbi1z/d2FteS10ZW1wbGUu/anBn"
                                    alt="Kapaleeshwarar Temple" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-music"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Attend Music Concert</h3>
                                <p>Experience the rich Carnatic music tradition during the December Music Season, a cultural extravaganza.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/9hYvW8SgK5N8qQ3R7tT5xV1bH2jK9pL0mN4cX6zV8y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/My8wNy8xNC8wMS9i/aGFyYXRhbmF0eWFt/LTQwNDA5MjVfNjQw/LmpwZw"
                                    alt="Carnatic Music" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-shopping-bag"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Shop at T Nagar</h3>
                                <p>Experience the bustling shopping district famous for silk sarees, jewelry, and traditional wear.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/6bxQGp6i1JQHCkOG3TjAUV2yNgtK7U6nIPfzssyEFEI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aW5kaWF0aW1lcy5j/b20vcGhvdG8vMjAx/OC8xMC9tYWR1cmFp/LXByaWRlLmpwZw"
                                    alt="T Nagar Shopping" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-utensils"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Savor Authentic Chettinad Cuisine</h3>
                                <p>Indulge in spicy Chettinad chicken, filter coffee, and traditional Tamil cuisine at local restaurants.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/ljQLF-NlUFhV14nAHldEIL6WHDf3u7E_QQnIx4gPhRQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzQ2LzQ3LzE3/LzM2MF9GXzQ0NjQ3/MTA4XzRUM0lXQ3dz/UlhPbU9OaVJidFhj/TVpqSFN1NkFYNE9h/LmpwZw"
                                    alt="Chettinad Cuisine" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-landmark"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Visit Fort St. George</h3>
                                <p>Explore the first English fortress in India, now housing a museum showcasing colonial history.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/ZQp5Xp1kR6n8wT9yU4iK2lM7nB3vC8xZ0qW5eR9tY6/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRjL0ZvcnRfU3Qu/R2VvcmdlX2Zyb21f/dGhlX2Fpci5qcGc"
                                    alt="Fort St George" />
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
                        <p className="section-subtitle">Must-visit places in Chennai</p>
                    </div>

                    <div className="attractions-grid">
                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/8nnMlwpVYZdK2ohvQLhioKM5oGFIbdmU2kysaJN_dLU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z29kaWdpdC5jb20v/Y29udGVudC9kYW0v/Z29kaWdpdC9kaXJl/Y3Rwb3J0YWwvZW4v/bmFnYW5hdGhhbi1z/d2FteS10ZW1wbGUu/anBn"
                                    alt="Kapaleeshwarar Temple" />
                            </div>
                            <div className="attraction-content">
                                <h3>Kapaleeshwarar Temple</h3>
                                <p className="attraction-description">This 7th-century temple in Mylapore is a classic example of Dravidian architecture with a 37-meter gopuram. Dedicated to Lord Shiva, it's one of Chennai's most important spiritual sites.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 5:30 AM - 12:00 PM, 4:00 PM - 9:00 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry Free</span>
                                </div>
                                <a href="#" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/lbE5Hh2wq4NKLQqyQ1o6UJYhWjq6XqxCvQx5I1JcR8U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I5L01hcmluYV9C/ZWFjaF9WaWV3Lmpw/Zw"
                                    alt="Marina Beach" />
                            </div>
                            <div className="attraction-content">
                                <h3>Marina Beach</h3>
                                <p className="attraction-description">Stretching 13 km along the Bay of Bengal, Marina Beach is the second longest urban beach in the world. It's a popular spot for morning walks, evening gatherings, and local street food.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> Open 24 Hours</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry Free</span>
                                </div>
                                <a href="#" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/ZQp5Xp1kR6n8wT9yU4iK2lM7nB3vC8xZ0qW5eR9tY6/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRjL0ZvcnRfU3Qu/R2VvcmdlX2Zyb21f/dGhlX2Fpci5qcGc"
                                    alt="Fort St George" />
                            </div>
                            <div className="attraction-content">
                                <h3>Fort St. George</h3>
                                <p className="attraction-description">Built in 1644, this is the first English fortress in India. It now houses the Tamil Nadu Legislative Assembly and a museum displaying British colonial artifacts.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 9:00 AM - 5:00 PM (Closed Friday)</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry: ₹15</span>
                                </div>
                                <a href="#" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/LkfxDC0V0bAWjgnpGnegqcfOoysoDv-kVpX-dXnFW_w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9leHBl/cmllbmNla2VyYWxh/LmluL2ltYWdlLXVw/bG9hZHMvMTUxOTAy/MDQwOC42LmpwZw"
                                    alt="Government Museum" />
                            </div>
                            <div className="attraction-content">
                                <h3>Government Museum</h3>
                                <p className="attraction-description">Established in 1851, it's one of India's oldest museums featuring archaeological artifacts, bronze sculptures, and the famous collection from the prehistoric period.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 9:30 AM - 5:00 PM (Closed Friday)</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry: ₹15-25</span>
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