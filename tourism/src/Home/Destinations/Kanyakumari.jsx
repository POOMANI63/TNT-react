import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';

export function Kanyakumari() {
    return (
        <div>
  
            {/* Hero Section with Kanyakumari Image */}
            <section className="places-hero">
                <div className="hero-image" style={{ backgroundImage: "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kanyakumari-1655458156_4c7d8e9f0a1b2c3d4e5f.webp')" }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <div className="container">
                            <h1 className="hero-title">Kanyakumari</h1>
                            <p className="hero-subtitle">Land of Sunsets</p>
                            <p className="hero-description">Picture-perfect sunsets, enchanting full moon nights, scrumptious coastal food, walk by the beach - Kanniyakumari has it all.</p>
                            <div className="hero-stats">
                                <div className="stat">
                                    <i className="fas fa-water"></i>
                                    <span>3 Seas Meet</span>
                                </div>
                                <div className="stat">
                                    <i className="fas fa-temperature-low"></i>
                                    <span>22°C - 32°C</span>
                                </div>
                                <div className="stat">
                                    <i className="fas fa-sun"></i>
                                    <span>Best: Oct-Mar</span>
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
                        <p className="section-subtitle">Experience the best activities in Kanyakumari</p>
                    </div>

                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-sun"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Witness Sunset & Sunrise</h3>
                                <p>Experience the spectacular sunset and sunrise at the same beach, a unique phenomenon at the southern tip of India.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/UmYXkGEkzf8JF8WUJzul_d9V6VWvsQ4YiHBJlRCvvtE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbS5o/dW50LmluL2NnL3Ru/L0thbnlha3VtYXJp/L0NpdHktR3VpZGUv/TXV0dG9tLUJlYWNo/LmpwZw"
                                    alt="Sunset at Kanyakumari" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-monument"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Visit Vivekananda Rock Memorial</h3>
                                <p>Take a ferry to this iconic memorial where Swami Vivekananda meditated, offering stunning ocean views.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/3t2rK8nM7vB1cX4zV9yW2qL5nP8jR6tY0uI3oE9aA7/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q4L1ZpdmVrYW5h/bmRhX1JvY2tfTW9u/dW1lbnQuanBn"
                                    alt="Vivekananda Rock Memorial" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-pray"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Explore Thiruvalluvar Statue</h3>
                                <p>Admire the 133-foot statue of the famous Tamil poet Thiruvalluvar, symbolizing cultural heritage.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/5hY8nM9pK2lQ3wE4rT6yU7iI0oP1zA2sD3fG4hJ5kL/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL1RoaXJ1dmFs/bHV2YXJfc3RhdHVl/LmpwZw"
                                    alt="Thiruvalluvar Statue" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-umbrella-beach"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Relax at Beach</h3>
                                <p>Enjoy peaceful walks along the rocky beach and collect unique seashells.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/UmYXkGEkzf8JF8WUJzul_d9V6VWvsQ4YiHBJlRCvvtE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbS5o/dW50LmluL2NnL3Ru/L0thbnlha3VtYXJp/L0NpdHktR3VpZGUv/TXV0dG9tLUJlYWNo/LmpwZw"
                                    alt="Kanyakumari Beach" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-fish"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Taste Seafood Delicacies</h3>
                                <p>Savor fresh seafood including fish curry, prawns, and local coastal specialties.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/k5L6nM7oP8qR9sT0uV1wX2yZ3aB4cD5eF6gH7iJ8kL/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzQ2LzQ3LzE3/LzM2MF9GXzQ0NjQ3/MTA4XzRUM0lXQ3dz/UlhPbU9OaVJidFhj/TVpqSFN1NkFYNE9h/LmpwZw"
                                    alt="Seafood" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-camera"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Photography Tour</h3>
                                <p>Capture stunning sunrise, sunset, and the confluence of three oceans in your lens.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/1aB2cD3eF4gH5iJ6kL7mN8oP9qR0sT1uV2wX3yZ4aB/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8yNy8xNC8wMi9r/YW55YWt1bWFyaS0y/MjE2MTI1XzY0MC5q/cGc"
                                    alt="Photography" />
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
                        <p className="section-subtitle">Must-visit places in Kanyakumari</p>
                    </div>

                    <div className="attractions-grid">
                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/3t2rK8nM7vB1cX4zV9yW2qL5nP8jR6tY0uI3oE9aA7/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q4L1ZpdmVrYW5h/bmRhX1JvY2tfTW9u/dW1lbnQuanBn"
                                    alt="Vivekananda Rock Memorial" />
                            </div>
                            <div className="attraction-content">
                                <h3>Vivekananda Rock Memorial</h3>
                                <p className="attraction-description">Built in 1970, this memorial stands on a rock where Swami Vivekananda meditated in 1892. The ferry ride offers spectacular views of the ocean meeting point.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 8:00 AM - 4:00 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Ferry: ₹50-100</span>
                                </div>
                                <a href="#" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/5hY8nM9pK2lQ3wE4rT6yU7iI0oP1zA2sD3fG4hJ5kL/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL1RoaXJ1dmFs/bHV2YXJfc3RhdHVl/LmpwZw"
                                    alt="Thiruvalluvar Statue" />
                            </div>
                            <div className="attraction-content">
                                <h3>Thiruvalluvar Statue</h3>
                                <p className="attraction-description">Standing 133 feet tall, this statue honors the famous Tamil poet Thiruvalluvar. The 133 feet represents the 133 chapters of his work Thirukkural.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 8:00 AM - 4:00 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Included in ferry ticket</span>
                                </div>
                                <a href="#" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/4dE5fG6hH7iI8jJ9kK0lL1mM2nN3oO4pP5qQ6rR7sS/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI4L0thbnlha3Vt/YXJpX3RlbXBsZS5q/cGc"
                                    alt="Kanyakumari Temple" />
                            </div>
                            <div className="attraction-content">
                                <h3>Kanyakumari Bhagavathy Temple</h3>
                                <p className="attraction-description">Dedicated to Goddess Kanyakumari, this ancient temple is one of the 108 Shakti Peethas. The temple's diamond nose ring is said to shine across the ocean.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 4:30 AM - 12:00 PM, 4:00 PM - 8:00 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry Free</span>
                                </div>
                                <a href="#" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/8Zbrh6d37KxAof4Cc8DU5g_-U0s1LvbPkSJBpNTgF2Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MTcvYzMvYzMvMTIv/cGluZS1mb3Jlc3Qt/cm9zZS1nYXJkZW4u/anBn"
                                    alt="Gandhi Memorial" />
                            </div>
                            <div className="attraction-content">
                                <h3>Gandhi Memorial</h3>
                                <p className="attraction-description">Built at the spot where Mahatma Gandhi's ashes were kept before immersion. The architecture is designed so that sunlight falls on the spot on October 2nd, his birthday.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 7:00 AM - 7:00 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry Free</span>
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