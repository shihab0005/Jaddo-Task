import React from 'react';
import navlogo from "../../assets/img/favicons/logo.svg";
import "./nav.css"
const Nav = () => {
    return (
        <div className="">
            <div className="container nav_container fixed-top">
                <div className="nav_logo">
                    <img src={navlogo} alt="" />
                </div>
                <div className="nav_nemu">
                    <ul>
                        <a href="#service"><li>Service</li></a>
                        <a href="#destination"><li>Destination</li></a>
                        <a href="#fast"><li>Booking</li></a>
                        <li>Testimonial</li>
                        <li>Login</li>
                        <button type="button" className="btn btn-outline-dark">Sign up</button>

                       

                        <li><select class="form-select" aria-label="Default select example">
                            <option selected>EN</option>

                            <option value="2">BN</option>

                        </select></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;