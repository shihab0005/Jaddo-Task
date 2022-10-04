import React from 'react';
import Slider from "react-slick";
import '../Testimonial/testimonial.css'
import t1 from '../../assets/img/testimonial/author.png';

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <div className="testimonial_container">



            <div className="card_Container">

                <div className="left_container">
                    <p className='test_title'>Testimonials</p>
                    <h1 className='test_heading'>What People <br /> Say About Us.</h1>
                    <div className="test_radio">
                        <span><i className="ri-radio-button-line"></i></span>
                        <span><i className="ri-radio-button-line"></i></span>
                    </div>
                </div>


                <Slider {...settings}>
                    <div>
                        <div className="info_container">
                            <div className="t_img">
                                <img src={t1} width="60px" height="60px" alt="" />
                            </div>
                            <div className="info_card">
                                <p className='card_desc'>"On the Windows talking painted pasture yet its express <br /> parties use. Sure last upon he same as knew next. Of<br /> believed or diverted no."</p>
                                <h4 className='card_name'>Thomas Wagon</h4>
                                <h6 className='card_place'>Lahore, Pakistan</h6>
                            </div>
                        </div >
                    </div>
                    <div>
                        <div className="info_container">
                            <div className="t_img">
                                <img src={t1} width="60px" height="60px" alt="" />
                            </div>
                            <div className="info_card">
                                <p className='card_desc'>"On the Windows talking painted pasture yet its express<br /> parties use. Sure last upon he same as knew next. Of <br />believed or diverted no."</p>
                                <h4 className='card_name'>Thomas Wagon</h4>
                                <h6 className='card_place'>Lahore, Pakistan</h6>
                            </div>
                        </div >
                    </div>
                    <div>
                        <div className="info_container">
                            <div className="t_img">
                                <img src={t1} width="60px" height="60px" alt="" />
                            </div>
                            <div className="info_card">
                                <p className='card_desc'>"On the Windows talking painted pasture yet its express<br /> parties use. Sure last upon he same as knew next. Of <br />believed or diverted no."</p>
                                <h4 className='card_name'>Thomas Wagon</h4>
                                <h6 className='card_place'>Lahore, Pakistan</h6>
                            </div>
                        </div >
                    </div>

                </Slider>

            </div>
        </div>
    );
};

export default Sliders;