import './Herocursel.css'
import temple from '../Images/temple.jpg'
import Marudhamali from '../Images/Marudhamali.jpg'
import Beach from '../Images/Beach.jpg'

export function Herocursel(){
    return (
           <main className="main-content">
                <section className="hero-carousel">
                    <div className="carousel-container">
                        <input type="radio" name="carousel" id="slide1" defaultChecked hidden />
                        <input type="radio" name="carousel" id="slide2" hidden />
                        <input type="radio" name="carousel" id="slide3" hidden />
                        <input type="radio" name="carousel" id="slide4" hidden />
                        <input type="radio" name="carousel" id="slide5" hidden />

                        <div className="carousel-wrapper">
                            <div className="carousel-slide slide-5">
                                <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                                    alt="Tamil Nadu Culture" />
                                <div className="slide-content">
                                    <h2 className="slide-title">Vibrant Culture</h2>
                                    <p className="slide-description">Immerse yourself in traditional dance, music, and festivals</p>
                                    <a href="#" className="slide-btn">Experience Culture</a>
                                </div>
                            </div>
                            <div className="carousel-slide slide-1">
                                <img src={temple}
                                    alt="Tamil Nadu Temple" />
                                <div className="slide-content">
                                    <h2 className="slide-title">Ancient Temples of Tamil Nadu</h2>
                                    <p className="slide-description">Experience the architectural marvels dating back thousands of years</p>
                                    <a href="#" className="slide-btn">Explore Temples</a>
                                </div>
                            </div>
                            <div className="carousel-slide slide-2">
                                <img src={Beach}
                                    alt="Tamil Nadu Beaches" />
                                <div className="slide-content">
                                    <h2 className="slide-title">Pristine Beaches</h2>
                                    <p className="slide-description">Discover 1,076 km of stunning coastline and tranquil shores</p>
                                    <a href="#" className="slide-btn">Visit Beaches</a>
                                </div>
                            </div>
                            <div className="carousel-slide slide-3">
                                <img src={Marudhamali}
                                    alt="Tamil Nadu Hills" />
                                <div className="slide-content">
                                    <h2 className="slide-title">Misty Hill Stations</h2>
                                    <p className="slide-description">Escape to the cool climate of Ooty and Kodaikanal</p>
                                    <a href="#" className="slide-btn">Explore Hills</a>
                                </div>
                            </div>
                            <div className="carousel-slide slide-4">
                                <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                                    alt="Tamil Nadu Food" />
                                <div className="slide-content">
                                    <h2 className="slide-title">Authentic Cuisine</h2>
                                    <p className="slide-description">Savor the flavors of traditional Tamil delicacies</p>
                                    <a href="#" className="slide-btn">Taste TN Food</a>
                                </div>
                            </div>
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="radio-navigation">
                            <label htmlFor="slide1" className="radio-label">
                                <div className="radio-button"></div>
                            </label>
                            <label htmlFor="slide2" className="radio-label">
                                <div className="radio-button"></div>
                            </label>
                            <label htmlFor="slide3" className="radio-label">
                                <div className="radio-button"></div>
                            </label>
                            <label htmlFor="slide4" className="radio-label">
                                <div className="radio-button"></div>
                            </label>
                            <label htmlFor="slide5" className="radio-label">
                                <div className="radio-button"></div>
                            </label>
                        </div>
                    </div>
                </section>
            </main>

    )
}