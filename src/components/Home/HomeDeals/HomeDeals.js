import React from 'react';
import { Row } from 'react-bootstrap';

import './HomeDeals.css'
import HomeDeal from './HomeDeal';
import usePakages from '../../hooks/usePakages';

const HomeDeals = () => {
    const { pakages } = usePakages();
    const bdPlaces = pakages.filter(pakages => (pakages.country === "Bangladesh"));
    const sixPakages = bdPlaces.slice(0, 6);


    return (
        <div>
            <div className="places-bd">
                <h3>Best Places In Bangladesh</h3>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    sixPakages.map(place => <HomeDeal place={place} key={place._id}></HomeDeal>)
                }
            </Row>
        </div>
    );
};

export default HomeDeals;