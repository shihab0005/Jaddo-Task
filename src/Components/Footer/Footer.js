import React from 'react';
import './footer.css';

import logo2 from "../../assets/img/logo2.svg";
import google from "../../assets/img/play-store.png";
import apple from "../../assets/img/apple-store.png";

const Footer = () => {
    return (
        <div className='container'>
            <div className="footer_container">
                <div className="dadoo">
                    <div className="footer_img">
                        <img src={logo2} alt="" />
                        <p className='footer_title'>Book your trip in minute, get<br />full Control for much longer.</p>
                    </div>
                </div>

                <div className="company">
                    <ul>
                        <li className='li_head'>Company</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>More</li>

                    </ul>
                    <ul>
                        <li className='li_head'>Contact</li>
                        <li>Help</li>
                        <li>Press</li>
                        <li>Mobile</li>

                    </ul>
                    <ul>
                        <li className='li_head'>More</li>
                        <li>Airlinefees</li>
                        <li>Airline</li>
                        <li>Low fare tips</li>

                    </ul>
                    {/* <table>
                        <tr className='th_footer'>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>More</th>
                        </tr>
                        <tr className='tr_company'>
                            <td>About</td>
                            <td>Careers</td>
                            <td>Mobile</td>
                        </tr>
                        <tr className='tr_contact'>
                            <td>Help/FAQ</td>
                            <td>Press</td>
                            <td>Affiliate</td>
                        </tr>
                        <tr className='tr_more'>
                            <td>Airlinefees</td>
                            <td>Airlinefees</td>
                            <td>Low fare tips</td>
                        </tr>
                    </table> */}
                    {/* <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Company</th>
                                <th scope="col">Contact</th>
                                <th scope="col">More</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>About</td>
                                <td>Careers</td>
                                <td>Mobile</td>
                            </tr>

                            <tr>
                                <td>Help/FAQ</td>
                                <td>Press</td>
                                <td>Affiliate</td>
                            </tr>

                            <tr>
                                <td>Airlinefees</td>
                                <td>Airlinefees</td>
                                <td>Low fare tips</td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
                {/* <div className="contact"></div>
                <div className="more"></div> */}
                <div className="links">
                    <div className="social_links">
                        <span><i class="ri-facebook-line fb"></i></span>
                        <span><i class="ri-instagram-line ins"></i></span>
                        <span><i class="ri-twitter-line twi"></i></span>
                    </div>
                    <h5>Discover our app</h5>

                    <div className="app_store">
                        <div className="play_store">
                            <img src={google} alt="" />
                        </div>
                        <div className="play_store">
                            <img src={apple} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;