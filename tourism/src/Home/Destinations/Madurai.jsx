import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';
import './Common.css'

export function Madurai() {
    return (
        <div>
          
            {/* Hero Section with Madurai Image */}
            <section className="places-hero">
                <div className="hero-image" style={{ backgroundImage: "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/madurai-1655457345_032e5ac5a592cab07465.webp')" }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <div className="container">
                            <h1 className="hero-title">Madurai</h1>
                            <p className="hero-subtitle">Athens of the East</p>
                            <p className="hero-description">Tranquil, graceful and steeped in Tamil culture, Madurai is the place to lose yourself in the staggering beauty of ancient temples and rich traditions.</p>
                            <div className="hero-stats">
                                <div className="stat">
                                    <i className="fas fa-temple"></i>
                                    <span>2,500+ Years Old</span>
                                </div>
                                <div className="stat">
                                    <i className="fas fa-temperature-high"></i>
                                    <span>25°C - 37°C</span>
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
                        <p className="section-subtitle">Experience the best activities in Madurai</p>
                    </div>

                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-pray"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Attend Evening Pooja at Meenakshi Temple</h3>
                                <p>Witness the spectacular evening ceremony at Meenakshi Amman Temple, a divine experience with traditional music, lamps, and rituals.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/8nnMlwpVYZdK2ohvQLhioKM5oGFIbdmU2kysaJN_dLU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z29kaWdpdC5jb20v/Y29udGVudC9kYW0v/Z29kaWdpdC9kaXJl/Y3Rwb3J0YWwvZW4v/bmFnYW5hdGhhbi1z/d2FteS10ZW1wbGUu/anBn"
                                    alt="Meenakshi Temple Pooja" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-shopping-bag"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Shop at Local Markets</h3>
                                <p>Explore the bustling markets of Madurai for traditional handicrafts, brassware, textiles, and the famous Madurai Sungadi sarees.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/6bxQGp6i1JQHCkOG3TjAUV2yNgtK7U6nIPfzssyEFEI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aW5kaWF0aW1lcy5j/b20vcGhvdG8vMjAx/OC8xMC9tYWR1cmFp/LXByaWRlLmpwZw"
                                    alt="Madurai Market" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-utensils"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Savor Madurai Cuisine</h3>
                                <p>Indulge in authentic Chettinad cuisine, famous Murugan Idli, Kari Dosa, and the traditional Madurai Jigarthanda.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/ljQLF-NlUFhV14nAHldEIL6WHDf3u7E_QQnIx4gPhRQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzQ2LzQ3LzE3/LzM2MF9GXzQ0NjQ3/MTA4XzRUM0lXQ3dz/UlhPbU9OaVJidFhj/TVpqSFN1NkFYNE9h/LmpwZw"
                                    alt="Madurai Food" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-landmark"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Explore Tirumalai Nayakkar Palace</h3>
                                <p>Visit the magnificent 17th-century palace known for its grand arches, stunning stucco work, and light & sound show.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/PzY_xsRgLVt7YlC5r-PmyR2Cekn4eR5fYf-kbTzgYRY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2M0L1RocmFfc2h1/bmRhcl9zaW5naC5q/cGc"
                                    alt="Tirumalai Nayakkar Palace" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-water"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Visit Vandiyur Mariamman Teppakulam</h3>
                                <p>Experience the massive temple tank, one of the largest in Tamil Nadu, especially beautiful during the Float Festival.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/RKXFS6Qr7gvC03KtXCbB_b2i-PUJVG1m20lHCdSshDo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/NDEwMTQ5L3Bob3Rv/L3RlbXBsZS10YW5r/LWF0LXZhbmRpeXVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz12aVJyWUxHM05t/YmhDSm5YNmh2RF90/ckZKY3pOVW1EUnc5/Ml9RRlBMMmhNPQ"
                                    alt="Vandiyur Mariamman Teppakulam" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-camera"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Photography Tour</h3>
                                <p>Capture the stunning temple architecture, vibrant street life, and colorful festivals of Madurai.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/GKZ1lK-C77OGT-SkZzUheUt_Qjmy2SQlCSZZ2PBgPmU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/NDEzNzYyL3Bob3Rv/L2Jvb2stc3RhbGwt/b2YtbWVlbmFrc2hp/LWFtbWFuLXRlbXBs/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9bXdDVURyZjBQ/MXp0SFFvTkxPSURZ/ZzFDb0JOVFhnU01t/dXpWQXUyVmhRVT0"
                                    alt="Madurai Photography" />
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
                        <p className="section-subtitle">Must-visit places in Madurai</p>
                    </div>

                    <div className="attractions-grid">
                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/8nnMlwpVYZdK2ohvQLhioKM5oGFIbdmU2kysaJN_dLU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z29kaWdpdC5jb20v/Y29udGVudC9kYW0v/Z29kaWdpdC9kaXJl/Y3Rwb3J0YWwvZW4v/bmFnYW5hdGhhbi1z/d2FteS10ZW1wbGUu/anBn"
                                    alt="Meenakshi Amman Temple" />
                            </div>
                            <div className="attraction-content">
                                <h3>Meenakshi Amman Temple</h3>
                                <p className="attraction-description">The iconic Meenakshi Amman Temple is the heart of Madurai, featuring 14 magnificent gopurams (towering gateways) adorned with thousands of colorful sculptures. The temple complex covers 14 acres and is dedicated to Goddess Meenakshi and Lord Sundareswarar.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 5:00 AM - 12:30 PM, 4:00 PM - 9:30 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry Free (Camera: ₹50)</span>
                                </div>
                                <a href="https://www.tamilnadutourism.tn.gov.in/destination/meenakshi-amman-temple" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/PzY_xsRgLVt7YlC5r-PmyR2Cekn4eR5fYf-kbTzgYRY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2M0L1RocmFfc2h1/bmRhcl9zaW5naC5q/cGc"
                                    alt="Tirumalai Nayakkar Palace" />
                            </div>
                            <div className="attraction-content">
                                <h3>Tirumalai Nayakkar Palace</h3>
                                <p className="attraction-description">Built in 1636 by King Tirumalai Nayak, this palace is a stunning example of Indo-Saracenic architecture. The grand courtyard, massive pillars, and the evening light & sound show make it a must-visit attraction.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 9:00 AM - 5:00 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry: ₹50 (Indians), ₹250 (Foreigners)</span>
                                </div>
                                <a href="#" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/RKXFS6Qr7gvC03KtXCbB_b2i-PUJVG1m20lHCdSshDo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/NDEwMTQ5L3Bob3Rv/L3RlbXBsZS10YW5r/LWF0LXZhbmRpeXVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz12aVJyWUxHM05t/YmhDSm5YNmh2RF90/ckZKY3pOVW1EUnc5/Ml9RRlBMMmhNPQ"
                                    alt="Vandiyur Mariamman Teppakulam" />
                            </div>
                            <div className="attraction-content">
                                <h3>Vandiyur Mariamman Teppakulam</h3>
                                <p className="attraction-description">This massive temple tank is one of the largest in Tamil Nadu, covering 16 acres. The annual Float Festival (Teppam) held here is a spectacular event with deities taken on a decorated float in the illuminated tank.</p>
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
                                <img src="https://imgs.search.brave.com/2U5Rxa5TwKCNsZ4G3O9_LsJd_UgjFhU_5S7AFL8QlFQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NkL0themltYXJh/LUJpZy1DYXItQ2Vs/ZWJyYXRpb24tMjAx/Ni5qcGc"
                                    alt="Kazimar Big Mosque" />
                            </div>
                            <div className="attraction-content">
                                <h3>Kazimar Big Mosque</h3>
                                <p className="attraction-description">One of the oldest mosques in Madurai, built in the 13th century. It's a significant religious site with beautiful Islamic architecture and peaceful surroundings.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> Open all day</span>
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