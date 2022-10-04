import React from 'react';
import "./category.css";
import s1 from "../../assets/img/category/icon1.png"
import s2 from "../../assets/img/category/icon2.png"
import s3 from "../../assets/img/category/icon3.png"
import s4 from "../../assets/img/category/icon4.png"
const services = [
    {
        id: 1,
        s_name: "Calculated Weather",
        image: s1,
        desc: "Built Wicket longer admire do barton vanity itself do in it."
    },
    {
        id: 2,
        s_name: "Best Flights",
        image: s2,
        desc: "Engrossed listening. Park gate sell they west hard for the."
    },
    {
        id: 3,
        s_name: "Local Events",
        image: s3,
        desc: "Barton vanity itself do in it. Preferd to men it engrossed listening."
    },
    {
        id: 4,
        s_name: "Customization",
        image: s4,
        desc: "We deliver outsourced aviation services for military customers"
    },
]
const Category = () => {
    return (
        <div className='container' id="service">
            <div className="ctg_container">
                <h3 className='ctg_title'>CATEGORY</h3>
                <h1 className='ctg_heading'>We Offer Best Services</h1>
                <div className="main_container">
                    {services.map((service, index) => (
                        <div className="card_container" key={index}>
                            <div className="card_container_imge">
                                <img src={service.image} alt="" />
                            </div>
                            <div className="card_container_desc">
                                <h2 className='ctg_card_title'>{service.s_name}</h2>
                                <p className='ctg_card_desc'>Built Wicket longer admire do barton vanity itself do in it.</p>
                            </div>
                        </div>))}
                </div>
            </div>

        </div>
    );
};

export default Category;