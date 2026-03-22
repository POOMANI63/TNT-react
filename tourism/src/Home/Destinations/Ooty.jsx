import { Header } from "../../Header/Header";
import { Link } from "react-router-dom";
// import { Footer } from "../../Footer/Footer";    

export function Ooty() {
    return (
        <div>
        
            {/* Hero Section with Ooty Image */}
            <section className="places-hero">
                <div className="hero-image" style={{ backgroundImage: "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp')" }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <div className="container">
                            <h1 className="hero-title">Ooty</h1>
                            <p className="hero-subtitle">Queen of Hill Stations</p>
                            <p className="hero-description">An ideal destination for honeymooners, solo travellers, family
                                vacationers and also individuals seeking a peaceful retreat in the majestic Nilgiri hills.</p>
                            <div className="hero-stats">
                                <div className="stat">
                                    <i className="fas fa-mountain"></i>
                                    <span>2,240m Altitude</span>
                                </div>
                                <div className="stat">
                                    <i className="fas fa-temperature-low"></i>
                                    <span>5°C - 25°C</span>
                                </div>
                                <div className="stat">
                                    <i className="fas fa-sun"></i>
                                    <span>Best: Oct-Jun</span>
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
                        <p className="section-subtitle">Experience the best activities in Ooty</p>
                    </div>

                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-train"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Take a ride in the Toy Train</h3>
                                <p>Experience the charming Nilgiri Mountain Railway, a UNESCO World Heritage site, with
                                    breathtaking views of the hills.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/H5Fo9U_EJ0zjjiy2DrlJuM-gXIfvTkVsWRE1u40rSWY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aGVu/ZXN0aW5uLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9lbGVtZW50/b3IvdGh1bWJzL21v/dW50YWluX3JhaWx3/YXlfbmlsZ2lyaS1x/aXhqeHJ4Y2VwMW8z/OTdyNmJqbWljZ3g5/MDQ3ZmE0YTd3Y3kw/MmNtN2suanBn"
                                    alt="Toy Train" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-hiking"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Trekking</h3>
                                <p>Explore the beautiful trails and trekking routes through lush green forests and scenic
                                    mountain paths.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Trekking" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-ship"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Go Boating in TTDC Boat House</h3>
                                <p>Enjoy a peaceful boat ride at Ooty Lake in the TTDC Boat House with beautiful views of
                                    surrounding hills.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/jtFjv6rAXb2JMDbAxVuk8abStiCw6Xb1U8QWyT-2cXI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y29ubmVjdGluZ3Ry/YXZlbGxlci5jb20v/aW1hZ2VzL2xvY2Fs/dGlwLzE2MzM4OTM0/MjRpbWFnZXMlMjAo/MzQpLmpwZWc"
                                    alt="Boating" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-campground"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Camping</h3>
                                <p>Experience overnight camping under the stars in the beautiful campsites around Ooty.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Camping" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-bicycle"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Cycling</h3>
                                <p>Ride through the scenic routes of Ooty and enjoy the fresh mountain air.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/VAyNr4YBkzVZ2AOV6Odsim_2NQHXfYbo0eWcfs_xnAE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzE2LzAyLzYw/LzM2MF9GXzMxNjAy/NjA0OV9SdHhKamln/OGJxVnNXSDBneVE3/eGxabHRtRFhIUUkx/aS5qcGc"
                                    alt="Cycling" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="activity-icon">
                                <i className="fas fa-camera"></i>
                            </div>
                            <div className="activity-content">
                                <h3>Photography</h3>
                                <p>Capture the stunning landscapes and vibrant flora of Ooty with your camera.</p>
                            </div>
                            <div className="activity-image">
                                <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
                        <p className="section-subtitle">Must-visit places in Ooty</p>
                    </div>

                    <div className="attractions-grid">
                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/LkfxDC0V0bAWjgnpGnegqcfOoysoDv-kVpX-dXnFW_w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9leHBl/cmllbmNla2VyYWxh/LmluL2ltYWdlLXVw/bG9hZHMvMTUxOTAy/MDQwOC42LmpwZw"
                                    alt="Botanical Garden" />
                            </div>
                            <div className="attraction-content">
                                <h3>Government Botanical Garden, Ooty</h3>
                                <p className="attraction-description">The Government Botanical Garden in Ooty, spread over 55 acres,
                                    is a mesmerizing tourist site that has been attracting nature lovers and tourists for
                                    centuries. Established in 1848, it maintains a wide variety of exotic and indigenous species
                                    of plants.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 8:00 AM - 6:30 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry Fee: ₹30</span>
                                </div>
                                <a href="https://www.tamilnadutourism.tn.gov.in/destination/rose-garden" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/VQvD75NBAnaP2ebnGErrC3Y8xU1De1o46K7MU2sy7a0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YTIudGhyaWxsb3Bo/aWxpYS5jb20vaW1h/Z2VzL3Bob3Rvcy8w/MDAvMTQ4Lzc0NC9v/cmlnaW5hbC8xNTUy/OTgzNzIwXzYuanBn/P2dyYXZpdHk9Y2Vu/dGVyJndpZHRoPTc1/MiZoZWlnaHQ9NDUw/JmNyb3A9ZmlsbCZx/dWFsaXR5PWF1dG8m/ZmV0Y2hfZm9ybWF0/PWF1dG8mZmxhZ3M9/c3RyaXBfcHJvZmls/ZSZmb3JtYXQ9anBn/JnNpZ25fdXJsPXRy/dWU"
                                    alt="Ooty Lake" />
                            </div>
                            <div className="attraction-content">
                                <h3>Ooty Lake</h3>
                                <p className="attraction-description">The picturesque Ooty Lake, also known as the Ooty boat house,
                                    is a much sought-after tourist attraction located in the beautiful blue mountains.
                                    Constructed in 1824 by John Sullivan, the lake offers boating, cycling, and horse riding
                                    activities.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 9:00 AM - 6:00 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Boating: ₹150-300</span>
                                </div>
                                <a href="#" className="read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image">
                                <img src="https://imgs.search.brave.com/8Zbrh6d37KxAof4Cc8DU5g_-U0s1LvbPkSJBpNTgF2Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MTcvYzMvYzMvMTIv/cGluZS1mb3Jlc3Qt/cm9zZS1nYXJkZW4u/anBn"
                                    alt="Pine Forest" />
                            </div>
                            <div className="attraction-content">
                                <h3>Pine Forest</h3>
                                <p className="attraction-description">A journey of just 15 minutes from Ooty town centre will take
                                    you to the famed Pine Tree Forests of Ooty. These scenic forests with tall pine trees
                                    provide a perfect backdrop for photography and peaceful walks.</p>
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
                                <img src="https://imgs.search.brave.com/C7a9y2cfn7XUMSDBkQRQFWu7q-vwkOSU3ZhjdbMcOaA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDEv/NzY4Lzk0MS9zbWFs/bC9haS1nZW5lcmF0/ZWQtYmVhdXRpZnVs/LWJyaWdodC1iYWNr/Z3JvdW5kLW9mLWEt/c3VtbWVyLWdhcmRl/bi13aXRoLWEtZmxv/d2VyaW5nLXJvc2Ut/YnVzaC1mcmVlLXBo/b3RvLmpwZw"
                                    alt="Rose Garden" />
                            </div>
                            <div className="attraction-content">
                                <h3>Rose Garden</h3>
                                <p className="attraction-description">The Government Rose Garden is the largest rose garden in India
                                    with over 20,000 varieties of roses. It's a beautiful sight especially during the blooming
                                    season from April to June.</p>
                                <div className="attraction-info">
                                    <span className="info-item"><i className="fas fa-clock"></i> 8:00 AM - 6:00 PM</span>
                                    <span className="info-item"><i className="fas fa-rupee-sign"></i> Entry Fee: ₹30</span>
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