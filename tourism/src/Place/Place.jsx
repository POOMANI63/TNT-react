import './Place.css'

export function Place(){
    return(
         <section className="destinations-section">
                <div className="destinations-container">
                    <div className="section-header">
                        <h1 className="section-title">Places to visit</h1>
                        <p className="section-subtitle">Discover Tamil Nadu's unique destinations - from UNESCO World Heritage Sites to soothing beaches and hill stations.</p>
                    </div>

                    <div className="destinations-grid">
                        {/* Destination Card 1 */}
                        <div className="destination-card">
                            <div className="card-image">
                                <img src="https://imgs.search.brave.com/VP89N3DR2h1WR5kasbVxHBg0RBDDh-pzJ-xIqo-c5kQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zY2VuaWMtdmll/dy1tb3VudGFpbnMt/YWdhaW5zdC1za3lf/MTA0ODk0NC01Njkz/NzAyLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA"
                                    alt="Ooty" />
                                <div className="card-badge">Hill Station</div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">Ooty</h3>
                                <p className="card-description">An ideal destination for honeymooners, solo travellers, family vacationers and also individuals seeking a peaceful retreat in the lap of nature.</p>
                                <a href="#" className="card-link">Explore <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        {/* Destination Card 2 */}
                        <div className="destination-card">
                            <div className="card-image">
                                <img src="https://t3.ftcdn.net/jpg/17/81/00/82/240_F_1781008258_KKj3WXgIqYx77E8WKpR7Jg0ScIRutuQ0.jpg"
                                    alt="Madurai" />
                                <div className="card-badge">Cultural Hub</div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">Madurai</h3>
                                <p className="card-description">Tranquil, graceful and steeped in Tamil culture, Madurai is the place to lose yourself in the staggering beauty of ancient temples.</p>
                                <a href="#" className="card-link">Explore <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        {/* Destination Card 3 */}
                        <div className="destination-card">
                            <div className="card-image">
                                <img src="https://imgs.search.brave.com/XLiDVmGvaVSoWUpB1SVpwfU3tFDL7IY_PPCCh_eDhvM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/a2VyYWxhdG91cnBh/Y2thZ2VzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/My9rYW55YWt1bWFy/aS5qcGc"
                                    alt="Kanyakumari" />
                                <div className="card-badge">Coastal Paradise</div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">Kanniyakumari</h3>
                                <p className="card-description">Picture-perfect sunsets, enchanting full moon nights, scrumptious coastal food, walk by the beach - Kanniyakumari has it all.</p>
                                <a href="#" className="card-link">Explore <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        {/* Destination Card 4 */}
                        <div className="destination-card">
                            <div className="card-image">
                                <img src="https://imgs.search.brave.com/p0L-wGDBJBOXPxWOWeDh9FJC_00JBsui7Q2Nww8ZTw8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzczLzM5Lzg1/LzM2MF9GXzM3MzM5/ODUxN19meEhpRExy/d0pqRWppWXM5aG04/anRtVzZTM052T0gy/dC5qcGc"
                                    alt="Chennai" />
                                <div className="card-badge">Metropolitan</div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">Chennai</h3>
                                <p className="card-description">The cultural capital of South India, Chennai blends ancient temples, colonial architecture, vibrant arts, and modern city life.</p>
                                <a href="#" className="card-link">Explore <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        {/* Destination Card 5 */}
                        <div className="destination-card">
                            <div className="card-image">
                                <img src="https://images.unsplash.com/photo-1577720580479-7d839d829c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Coimbatore" />
                                <div className="card-badge">Gateway to Hills</div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">Coimbatore</h3>
                                <p className="card-description">Known as the Manchester of South India, Coimbatore offers a perfect blend of industrial growth and natural beauty.</p>
                                <a href="#" className="card-link">Explore <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        {/* Destination Card 6 */}
                        <div className="destination-card">
                            <div className="card-image">
                                <img src="https://imgs.search.brave.com/kfSQ3iLMyV4O5nTlmav2W2JoEqlubyylRCeXG_Adc5E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MDU3ODg2MC9waG90/by9yYW1lc2h3YXJh/bS1pc2xhbmQtdGFt/aWwtbmFkdS1pbmRp/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SlBxNndkazJ4/M2Jld1Nlc1RtYnZI/Zzd3MHc4YkU2Um1N/Z3dBc1V3WUJrQT0"
                                    alt="Rameswaram" />
                                <div className="card-badge">Pilgrimage</div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">Rameswaram</h3>
                                <p className="card-description">A sacred pilgrimage site with magnificent temple architecture and serene beaches, located on an island.</p>
                                <a href="#" className="card-link">Explore <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="section-footer">
                        <a href="#" className="explore-all-btn">Explore All Destinations <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </section>
    )
}