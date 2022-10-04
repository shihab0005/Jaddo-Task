import React from 'react';
import './herosection.css';
import heroimage from '../../assets/img/hero/hero-img.png'
// import play from '../../assets/img/play (1).svg'
const HeroSection = () => {
    return (
        <div className='container hero_section'>
            <div className="hero_container">
                <div className="hero_container_left">
                    <p className='title'>Best Destinations around the world</p>
                    <h1>Travel, enjoy <br />and live a new<br /> and full life</h1>
                    <p className='desc'>Built Wicket longer admire do barton vanity itself do in it.<br />
                        Preferred to sportsmen it engrossed listening. Park gate<br />
                        sell they west hard for the.</p>

                    <div className="buttons">
                        <button type="button" className="btn_find ">Find Out More</button>
                        <div className="play_icon">
                            <i class="ri-play-line" width="60px"></i>
                            <span>Play Demo</span>
                        </div>
                    </div>
                </div>
                <div className="hero_container_right">
                    <div className="hero_container_right_img">
                        <img src={heroimage} alt="" height="600px" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HeroSection;