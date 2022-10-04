import React from 'react';
import './testimonial.css';
import t1 from '../../assets/img/testimonial/author.png'
import t2 from '../../assets/img/testimonial/author2.png'
import t3 from '../../assets/img/testimonial/author3.png'




const infos = [
    {
        id: 1,
        image: t1,
        name: "Thomas Wagon",
        place: "Lahore, Pakistan",
        desc: `"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."`

    },
    {
        id: 2,
        image: t2,
        name: "Thomas Wagon",
        place: "CEO of Red Button",
        desc: `"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no"`

    },
    {
        id: 3,
        image: t3,
        name: "Kelly Willium",
        place: "Khulna, Bangladesh",
        desc: `"Jadoo is recognized as one of the finest travel agency in the world. When it came to planning a trip, I found them to be dependable."`

    }
]

const Testimonial = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };

    return (
        <div className='container main_container_test'>
            <div className="left_container">
                <p className='test_title'>Testimonials</p>
                <h1 className='test_heading'>What People <br /> Say About Us.</h1>
                <div className="test_radio">
                    <span><i className="ri-radio-button-line"></i></span>
                    <span><i className="ri-radio-button-line"></i></span>
                    <span><i className="ri-radio-button-line"></i></span>
                </div>
            </div>

            <div className="right_container">
                

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


              
                {/* 
                    <div className="info_container">
                        <div className="t_img">
                            <img src={t1} width="60px" height="60px" alt="" />
                        </div>
                        <div className="info_card">
                            <p className='card_desc'>"On the Windows talking painted pasture yet its express <br /> parties use. Sure last upon he same as knew next. Of<br /> believed or diverted no."</p>
                            <h4 className='card_name'>Thomas Wagon</h4>
                            <h6 className='card_place'>Lahore, Pakistan</h6>
                        </div>
                    </div > */}

            </div>
        </div >
    );
};

export default Testimonial;


{/* {
                                infos.map(({ id, image, name, place, desc }) => (
                                    <div key={id} className="info_container">
                                        <div className="t_img">
                                            <img src={image} width="60px" height="60px" alt="" />
                                        </div>
                                        <div className="info_card">
                                            <p className='card_desc'>"{desc}</p>
                                            <h4 className='card_name'>{name}</h4>
                                            <h6 className='card_place'>{place}</h6>
                                        </div>
                                    </div >
                                ))
                            } */}