import React from 'react';
import { Row } from 'react-bootstrap';
import usePakages from '../../hooks/usePakages';
import HomeDestination from './HomeDestination';
import './HomeDestinations.css';
const HomeDestinations = () => {
    const { pakages } = usePakages();

    const sixPakages = pakages.slice(0, 6);


    return (
        <div>
            <div className="destination-container">
                <h3>Popular Destinations You May Like</h3>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {

                    sixPakages.map(pakage => <HomeDestination pakage={pakage} key={pakage._id}></HomeDestination>)

                }
            </Row>
        </div>
    );
};

export default HomeDestinations;