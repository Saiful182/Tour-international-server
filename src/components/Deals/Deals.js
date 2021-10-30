import React from 'react';
import { Row } from 'react-bootstrap';
import Deal from '../Deal/Deal';
import useBdPlaces from '../hooks/useBdPlaces';
import './Deals.css'

const Deals = () => {
    const { bdPlaces } = useBdPlaces();


    return (
        <div>
            <div className="deals-heading">
                <h3>Find classic place with cheapest price</h3>
            </div>

            <div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        bdPlaces.map(place =>
                            <Deal place={place} key={place._id}></Deal>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default Deals;