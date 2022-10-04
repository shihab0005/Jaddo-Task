import React from 'react';
import './partner.css'
import partner1 from '../../assets/img/partner/1.png'
import partner2 from '../../assets/img/partner/2.png'
import partner3 from '../../assets/img/partner/3.png'
import partner4 from '../../assets/img/partner/4.png'
import partner5 from '../../assets/img/partner/5.png'

const partners = [
    {
        id: 1,
        image: partner1,
    },
    {
        id: 2,
        image: partner2,
    },
    {
        id: 3,
        image: partner3,
    },
    {
        id: 4,
        image: partner4,
    },
    {
        id: 5,
        image: partner5,
    },
]
const Partner = () => {
    return (
        <div className='container'>
            <div className="partner_container">
                {partners.map((partner, index) => (<div className="partner" key={index}>
                    <div className="partner_image">
                        <img src={partner.image} alt="" />
                    </div>
                </div>
                ))}

            </div>

        </div>
    );
};

export default Partner;