
import './Common.css';

export function PhotoGallery() {
    return (
        <div>


            {/* Photo Gallery Hero Section */}
            <section className="gallery-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Photo Gallery</h1>
                        <p className="hero-subtitle">Visual Journey Through Tamil Nadu</p>
                        <p className="hero-description">Explore the breathtaking beauty of Tamil Nadu through our curated collection of stunning photographs.</p>
                    </div>
                </div>
            </section>

            {/* Gallery Filter */}
            <section className="gallery-filter-section">
                <div className="container">
                    <div className="gallery-filter">
                        <button className="filter-btn active" data-filter="all">All</button>
                        <button className="filter-btn" data-filter="temples">Temples</button>
                        <button className="filter-btn" data-filter="nature">Nature</button>
                        <button className="filter-btn" data-filter="culture">Culture</button>
                        <button className="filter-btn" data-filter="beaches">Beaches</button>
                        <button className="filter-btn" data-filter="heritage">Heritage</button>
                    </div>
                </div>
            </section>

            {/* Things to Do / Activities Section */}
            <section className="things-to-do">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">TN Tourism: Discover the Heart of South India</h2>
                        <p className="section-subtitle">Experience the best activities in Tamil Nadu</p>
                    </div>

                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="img-heading">Toy Train</div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/H5Fo9U_EJ0zjjiy2DrlJuM-gXIfvTkVsWRE1u40rSWY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aGVu/ZXN0aW5uLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9lbGVtZW50/b3IvdGh1bWJzL21v/dW50YWluX3JhaWx3/YXlfbmlsZ2lyaS1x/aXhqeHJ4Y2VwMW8z/OTdyNmJqbWljZ3g5/MDQ3ZmE0YTd3Y3kw/MmNtN2suanBn"
                                    alt="Toy Train" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="img-heading">Trekking</div>
                            <div className="activity-image">
                                <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Trekking" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="img-heading">Boating</div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/jtFjv6rAXb2JMDbAxVuk8abStiCw6Xb1U8QWyT-2cXI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y29ubmVjdGluZ3Ry/YXZlbGxlci5jb20v/aW1hZ2VzL2xvY2Fs/dGlwLzE2MzM4OTM0/MjRpbWFnZXMlMjAo/MzQpLmpwZWc"
                                    alt="Boating" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="img-heading">Camping</div>
                            <div className="activity-image">
                                <img src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Camping" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="img-heading">Cycling</div>
                            <div className="activity-image">
                                <img src="https://imgs.search.brave.com/VAyNr4YBkzVZ2AOV6Odsim_2NQHXfYbo0eWcfs_xnAE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzE2LzAyLzYw/LzM2MF9GXzMxNjAy/NjA0OV9SdHhKamln/OGJxVnNXSDBneVE3/eGxabHRtRFhIUUkx/aS5qcGc"
                                    alt="Cycling" />
                            </div>
                        </div>

                        <div className="activity-card">
                            <div className="img-heading">Photography</div>
                            <div className="activity-image">
                                <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Photography" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extended Gallery Grid Section */}
            <section className="gallery-grid-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Collections</h2>
                        <p className="section-subtitle">Stunning visuals capturing the essence of Tamil Nadu</p>
                    </div>

                    <div className="gallery-grid">
                        {/* Gallery Item 1 - Temple */}
                        <div className="gallery-item" data-category="temples">
                            <div className="gallery-image">
                                <img src="https://imgs.search.brave.com/8nnMlwpVYZdK2ohvQLhioKM5oGFIbdmU2kysaJN_dLU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z29kaWdpdC5jb20v/Y29udGVudC9kYW0v/Z29kaWdpdC9kaXJl/Y3Rwb3J0YWwvZW4v/bmFnYW5hdGhhbi1z/d2FteS10ZW1wbGUu/anBn"
                                    alt="Meenakshi Temple" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <h3 className="image-title">Meenakshi Temple</h3>
                                        <p className="image-location">Madurai</p>
                                        <p className="image-description">A masterpiece of Dravidian architecture with towering gopurams</p>
                                    </div>
                                    <button className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 2 - Nature */}
                        <div className="gallery-item" data-category="nature">
                            <div className="gallery-image">
                                <img src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/waterfalls-1654858819_78fd890cb15de3ad67c1.webp"
                                    alt="Waterfalls" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <h3 className="image-title">Courtallam Falls</h3>
                                        <p className="image-location">Tenkasi</p>
                                        <p className="image-description">Known as the 'Spa of South India' for its medicinal properties</p>
                                    </div>
                                    <button className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 3 - Beach */}
                        <div className="gallery-item" data-category="beaches">
                            <div className="gallery-image">
                                <img src="https://imgs.search.brave.com/UmYXkGEkzf8JF8WUJzul_d9V6VWvsQ4YiHBJlRCvvtE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbS5o/dW50LmluL2NnL3Ru/L0thbnlha3VtYXJp/L0NpdHktR3VpZGUv/TXV0dG9tLUJlYWNo/LmpwZw"
                                    alt="Kanyakumari Beach" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <h3 className="image-title">Sunset Point</h3>
                                        <p className="image-location">Kanyakumari</p>
                                        <p className="image-description">Where three seas meet - Arabian Sea, Bay of Bengal, and Indian Ocean</p>
                                    </div>
                                    <button className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 4 - Culture */}
                        <div className="gallery-item" data-category="culture">
                            <div className="gallery-image">
                                <img src="https://imgs.search.brave.com/YsJNeg2dupRBUj92245I7-bQPoJC6pfaeCaKDaEXBJ8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/MS8yMS8xMi8wNC9i/aGFyYXRhbmF0eWFt/LTc3MzM3MjdfNjQw/LmpwZw"
                                    alt="Bharatanatyam Dance" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <h3 className="image-title">Bharatanatyam</h3>
                                        <p className="image-location">Traditional Art</p>
                                        <p className="image-description">Ancient classical dance form originating from Tamil Nadu temples</p>
                                    </div>
                                    <button className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 5 - Heritage */}
                        <div className="gallery-item" data-category="heritage">
                            <div className="gallery-image">
                                <img src="https://imgs.search.brave.com/q6Op_hJbWLooQBvueuoz7AGwwI3sfkMZTR7rIcCh6TY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/a2FyYWlrdWRpL3o4/Lzk5OTlwNDU2NS40/NTY1LjEwMTEzMDE0/MjQ1Ny5rM3o4L2Nh/dGFsb2d1ZS9jaGV0/dGluYWR1LW1hbnNp/b24ta2FuYWR1a2F0/aGFuLWthcmFpa3Vk/aS1yZXNvcnRzLTM3/dzBmcXEuanBnP3c9/Mzg0MCZxPTc1"
                                    alt="Chettinad Mansion" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <h3 className="image-title">Chettinad Palace</h3>
                                        <p className="image-location">Karaikudi</p>
                                        <p className="image-description">Magnificent mansions with Burmese teak and Italian marble</p>
                                    </div>
                                    <button className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 6 - Nature */}
                        <div className="gallery-item" data-category="nature">
                            <div className="gallery-image">
                                <img src="https://imgs.search.brave.com/JhFZzMpBUibO2gvxduTRpjwm7QQk2_YDEldEc_qsL-M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI0/Njk4MzQ2L3Bob3Rv/L25pbGdpcmktaGls/bHMtdmlldy11bmRl/ci1mcmVlLWZsb2F0/aW5nLWNsb3Vkcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/YmV1bmlBdk0xcUls/UElKTXJ5aUNKaUdV/TFgwMlNXdnk1R19j/Q2gyLXo2UT0"
                                    alt="Nilgiri Hills" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <h3 className="image-title">Nilgiri Hills</h3>
                                        <p className="image-location">Ooty Region</p>
                                        <p className="image-description">Blue mountains with tea plantations and colonial charm</p>
                                    </div>
                                    <button className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 7 - Temple */}
                        <div className="gallery-item" data-category="temples">
                            <div className="gallery-image">
                                <img src="https://imgs.search.brave.com/kfSQ3iLMyV4O5nTlmav2W2JoEqlubyylRCeXG_Adc5E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MDU3ODg2MC9waG90/by9yYW1lc2h3YXJh/bS1pc2xhbmQtdGFt/aWwtbmFkdS1pbmRp/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SlBxNndkazJ4/M2Jld1Nlc1RtYnZI/Zzd3MHc4YkU2Um1N/Z3dBc1V3WUJrQT0"
                                    alt="Rameswaram Temple" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <h3 className="image-title">Ramanathaswamy Temple</h3>
                                        <p className="image-location">Rameswaram</p>
                                        <p className="image-description">Famous for its longest corridor and sacred theerthams</p>
                                    </div>
                                    <button className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 8 - Beach */}
                        <div className="gallery-item" data-category="beaches">
                            <div className="gallery-image">
                                <img src="https://imgs.search.brave.com/lbE5Hh2wq4NKLQqyQ1o6UJYhWjq6XqxCvQx5I1JcR8U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I5L01hcmluYV9C/ZWFjaF9WaWV3Lmpw/Zw"
                                    alt="Marina Beach" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <h3 className="image-title">Marina Beach</h3>
                                        <p className="image-location">Chennai</p>
                                        <p className="image-description">Second longest urban beach in the world</p>
                                    </div>
                                    <button className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-footer">
                        <button className="load-more-btn">
                            Load More <i className="fas fa-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
}