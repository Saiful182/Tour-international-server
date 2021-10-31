import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Deal from '../Deal/Deal';

import usePakages from '../hooks/usePakages';
import './Deals.css'

const Deals = () => {
    const { pakages } = usePakages();
    const bdPlaces = pakages.filter(pakages => (pakages.country === "Bangladesh"));
    return (
        <div>

            <div className="deals-heading">
                <h3>Find classic place with cheapest price</h3>
            </div>


            <div>
                {

                    pakages.length === 0 ? <Spinner className="spinner" animation="border" /> : <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            bdPlaces.map(place =>
                                <Deal place={place} key={place._id}></Deal>
                            )}
                    </Row>
                }
            </div>


        </div>

    );
};

export default Deals;

