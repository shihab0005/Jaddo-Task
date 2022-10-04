import React from 'react';
import './Destinations.css';
import image1 from '../../assets/img/dest/dest1.jpg'
import image2 from '../../assets/img/dest/dest2.jpg'
import image3 from '../../assets/img/dest/dest3.jpg'
import logo from '../../assets/img/dest/navigation.svg'

const trips = [
    {
        id: 1,
        place: "Rome , Italy",
        price: "$54.6k",
        days: "10 Days Trip",
        image: image1
    },
    {
        id: 2,
        place: "London, UK",
        price: "$54.6k",
        days: "12 Days Trip",
        image: image2,
    },
    {
        id: 3,
        place: "Full Europe",
        price: "$541.6k",
        days: "29 Days Trip",
        image: image3
    },
]
const Destinations = () => {
    return (
        <div className='dest_container' id='destination'>
            <div className='container'>
                <h3 className='dest_title'>Top Selling</h3>
                <h1 className='dest_heading'>Top Destinations</h1>

                <div className="cards_container">
                    {
                        trips.map((trip, index) => (<div className="cards" key={index}>
                            <div className="card_image">
                                <img src={trip.image} alt="" />
                            </div>
                            <div className="card_desc">
                                <div className="place">
                                    <p className='place_name'>{trip.place}</p>
                                    <p className='place_price'>{trip.price}</p>
                                </div>
                                <div className="place_desc">
                                    <img src={logo} alt="" />
                                    <span>{trip.days}</span>
                                </div>

                            </div>
                        </div>))
                    }


                </div>

            </div>
        </div>
    );
};

export default Destinations;