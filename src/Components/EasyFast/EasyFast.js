import React from 'react';
import './easy.css';
import img1 from '../../assets/img/steps/booking-img.jpg';
import img2 from '../../assets/img/steps/favorite-placeholder.png';

const EasyFast = () => {
    return (
        <div className='container easy_container' id='fast'>

            <div className="easy_left">
                <h5 className='easy_title'>Easy and Fast</h5>
                <h3 className='easy_heading'>Book Your Next Trip <br /> In 3 Easy Steps</h3>

                <div className="destination">
                    <span className='span1'><i class="ri-map-pin-line"></i></span>
                    <div className="des_info">
                        <h5>Choose Destination</h5>
                        <p>Choose your favourite place. No<br /> matter
                            where you travel inside the World.</p>
                    </div>
                </div>
                <div className="destination">
                    <span className='span2'><i class="ri-bank-card-line"></i></span>
                    <div className="des_info">
                        <h5>Make Payment</h5>
                        <p>Choose your favourite place. No<br /> matter
                            where you travel inside the World.</p>
                    </div>
                </div>
                <div className="destination">
                    <span className='span3'><i class="ri-car-line"></i></span>
                    <div className="des_info">
                        <h5>Reach Airport on Selected Date</h5>
                        <p>Choose your favourite place. No<br /> matter
                            where you travel inside the World.</p>
                    </div>
                </div>
            </div>
            <div className="easy_right">
                <div className="easy_card">
                    <div className="card_img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="info">
                        <h6 style={{ marginTop: "3rem" }}>Trip To Greece</h6>
                        <p style={{ marginTop: "1rem", marginBottom: "2rem" }}>14-29 June | by Robbin joseph</p>

                        <div className="logo">
                            <span><i class="ri-book-open-line"></i></span>
                            <span><i class="ri-leaf-line"></i></span>
                            <span><i class="ri-navigation-line"></i></span>
                        </div>
                        <div className="card_footer">
                            <div className='card_footer_text'>
                                <span><i class="ri-building-line"></i></span>
                                <span>24 people going</span>
                            </div>
                            <span className='love'>
                                <i class="ri-heart-line"></i></span>
                        </div>
                    </div>


                </div>
                <div className="hide_section">
                    <img src={img2} alt="" />
                    <h6>Ongoing Trip To Rome</h6>
                    <p>50% Complete</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EasyFast;