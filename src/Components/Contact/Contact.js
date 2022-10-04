import React from 'react';
import './contact.css';
import send from "../../assets/img/cta/send.png";

const Contact = () => {
    return (
        <div className='container contact_container'>
            <div className="send">
                <img src={send} alt="" />
            </div>
            <h5 className='contact_title'>Subscribe to get information, latest news and other interesting offers about Cobham</h5>

            <div className="form_container">
                <div className="form_div">
                    <div className="input_div">
                        <span><i class="ri-mail-line"></i></span>
                        <input type="text" placeholder='Enter Mail' />
                    </div>
                    <div className="button_div">
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;