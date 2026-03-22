import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";

export function Coimbatore() {
    return (
        <div>
      
            {/* Hero Section with Coimbatore Image */}
            <section className="places-hero">
                <div className="hero-image" style={{ backgroundImage: "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/coimbatore-1655457800_34798ae22c8994d3131c.webp')" }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <div className="container">
                            <h1 className="hero-title">Coimbatore</h1>
                            <p className="hero-subtitle">Manchester of South India</p>
                            <p className="hero-description">Known as the Manchester of South India, Coimbatore offers a perfect blend of industrial growth, natural beauty, and spiritual significance.</p>
                            <div className="hero-stats">
                                <div className="stat">
                                    <i className="fas fa-industry"></i>
                                    <span>Industrial Hub</span>
                                </div>
                                <div className="stat">
                                    <i className="fas fa-temperature-low"></i>
                                    <span>22°C - 35°C</span>
                                </div>
                                <div className="stat">
                                    <i className="fas fa-sun"></i>
                                    <span>Best: Sep-Mar</span>
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
                        <p className="section-subtitle">Experience the best activities in Coimbatore</p>
                    </div>

                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-water"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Visit Kovai Kutralam Falls</h3>
                                <p>Enjoy a refreshing dip at the beautiful Kovai Kutralam Falls, a popular picnic spot surrounded by lush greenery.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/kovai-kutralam-1655968563_8c2462eb35307a1f3b6f.webp"
                                    alt="Kovai Kutralam Falls" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-pray"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Visit Perur Pateeswarar Temple</h3>
                                <p>Explore this ancient temple dedicated to Lord Shiva, known for its intricate architecture and spiritual significance.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/9a5CRtz29mZvG1eUxQnUw9hCvuU8OkEFzqS_9Ir3TIE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2U2L1Bl/cnVyX1RlbXBsZV9D/b2ltYmF0b3JlLmpw/Zy8xMjgwcHgtUGVy/dXJfVGVtcGxlX0Nv/aW1iYXRvcmUuanBn"
                                    alt="Perur Pateeswarar Temple" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-tree"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Explore Botanical Garden</h3>
                                <p>Stroll through the beautiful botanical gardens and enjoy the diverse collection of plants and flowers.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/7hE1iXgl41evpkE6Y9L5AazSujqZ2NQJJI98o02eSxE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aW5kaWF0aW1lcy5j/b20vcGhvdG8vMjAx/Ny81LzUvY29pbWJh/dG9yZS1nYXJkZW4t/aW4tYmxvb20uanBn"
                                    alt="Botanical Garden" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-shopping-bag"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Shop for Textiles</h3>
                                <p>Coimbatore is famous for its textile industry. Shop for high-quality cotton fabrics and traditional wear.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/M0VdzpYb0i2u62Ph2tOZ5Q7Zz-UbT91b_8w4l8jLJh0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY2l0eS50b2Rh/eW8uY29tL21lZGlh/L2ltYWdlcy85Mjdf/MzUvY29pbWJhdG9y/ZV80LmpwZw"
                                    alt="Textile Shopping" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-mountain"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Visit Marudhamalai Temple</h3>
                                <p>Located on a scenic hill, this ancient temple dedicated to Lord Murugan offers panoramic views of the city.</p>
                            </div>
                            <div className="activity-image">
                                <img src="./Images/Marudhamali.jpg"
                                    alt="Marudhamalai Temple" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-hiking"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Trekking at Western Ghats</h3>
                                <p>Experience trekking adventures in the nearby Western Ghats ranges with stunning natural beauty.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Trekking" />
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
                        <p className="section-subtitle">Must-visit places in Coimbatore</p>
                    </div>

                    <div className="attractions-grid">
                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/9a5CRtz29mZvG1eUxQnUw9hCvuU8OkEFzqS_9Ir3TIE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2U2L1Bl/cnVyX1RlbXBsZV9D/b2ltYmF0b3JlLmpw/Zy8xMjgwcHgtUGVy/dXJfVGVtcGxlX0Nv/aW1iYXRvcmUuanBn"
                                    alt="Perur Pateeswarar Temple" />
                            </div>
                            <div className="attraction-content">
                                <h3>Perur Pateeswarar Temple</h3>
                                <p className="attraction-description">This ancient Shiva temple, built during the Chola period, features stunning architecture with intricate carvings. The temple is known for its beautiful sculptures and serene atmosphere.</p>
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
                                <img src="https://imgs.search.brave.com/IlSpGGj4AyQD42GUNlFbBB-K4hxkQKTFukYbQKeq-X4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/NDU0MzA4L3Bob3Rv/L3ZpZXctb2YtY29p/bWJhdG9yZS1jaXR5/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz05NWRpdVUzUlpK/ekJvN0VhWWllS3hs/MEJ6R1RKTTk2ZHlF/WnUwVWpNeFFJPQ"
                                    alt="VOC Park and Zoo" />
                            </div>
                            <div className="attraction-content">
                                <h3>VOC Park and Zoo</h3>
                                <p className="attraction-description">A popular recreational spot featuring a zoo, aquarium, and amusement park. Perfect for family outings with children.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 9:00 AM - 6:00 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry: ₹20-50</span>
                                </div>
                                <a href="#" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/RPbnBCA5XY2kMT20tU26xWFa0C_d3UEN7nEbsEhE13Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTQy/NzU5MDI4L3Bob3Rv/L3RoZS1jaGVubmFp/LXJlc2Vydm9pci1m/b3Jlc3QtYXQtY29p/bWJhdG9yZS1pbi1p/bmRpYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NGlFWWZW/OFZDRW5KcEZyVHVH/S3I3UGRTQkd2clRL/SEhJaDJiZmIySzlX/TT0"
                                    alt="Cauvery River" />
                            </div>
                            <div className="attraction-content">
                                <h3>Cauvery River</h3>
                                <p className="attraction-description">The sacred Cauvery River flows near Coimbatore, offering peaceful spots for relaxation and spiritual activities along its banks.</p>
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
                                <img src="https://imgs.search.brave.com/TVxWm-0K2hDn0phNpblUv7fclBCTfBq3yY1jWpG2i5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aW5kaWF0aW1lcy5j/b20vcGhvdG8vMjAx/OC8xMC9jb2ltYmF0/b3JlLWZyb20tYXJp/YWx1ci5qcGc"
                                    alt="Isha Yoga Center" />
                            </div>
                            <div className="attraction-content">
                                <h3>Isha Yoga Center</h3>
                                <p className="attraction-description">Located at the foothills of Velliangiri Mountains, this spiritual center founded by Sadhguru offers meditation programs and features the iconic 112-foot Adiyogi Shiva statue.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 6:00 AM - 8:00 PM</span>
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