import React from 'react';
import './Homebanner.css';
import banner from '../../../images/home cover.jpg'
const HomeBanner = () => {
    return (
        <div className="home-banner">
            <img src={banner} alt="" />
        </div>
    );
};

export default HomeBanner;