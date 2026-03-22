import './Gallery.css'
export function Gallery(){
    return(
         <section className="gallery-section">
                <div className="gallery-container">
                    <div className="section-header">
                        <h1 className="section-title">Visual Journey</h1>
                        <p className="section-subtitle">Immerse yourself in the breathtaking beauty of Tamil Nadu through our curated collection of stunning photographs.</p>
                    </div>

                    {/* Gallery Filter */}
                    <div className="gallery-filter">
                        <button className="filter-btn active" data-filter="all">All</button>
                        <button className="filter-btn" data-filter="temples">Temples</button>
                        <button className="filter-btn" data-filter="nature">Nature</button>
                        <button className="filter-btn" data-filter="culture">Culture</button>
                        <button className="filter-btn" data-filter="beaches">Beaches</button>
                        <button className="filter-btn" data-filter="heritage">Heritage</button>
                    </div>

                    {/* Gallery Grid */}
                    <div className="gallery-grid">
                        {/* Gallery Item 1 */}
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
                                    <a href="#" className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 2 */}
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
                                    <a href="#" className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 3 */}
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
                                    <a href="#" className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 4 */}
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
                                    <a href="#" className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 5 */}
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
                                    <a href="#" className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 6 */}
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
                                    <a href="#" className="view-btn" aria-label="View larger image">
                                        <i className="fas fa-expand"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-footer">
                        <a href="#" className="explore-all-btn">View Full Gallery <i className="fas fa-images"></i></a>
                    </div>
                </div>
            </section>
    )
}