import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Destination from '../Destination/Destination';
import usePakages from '../hooks/usePakages';
import './Destinations.css'

const Destinations = () => {
    const { pakages } = usePakages();

    const outsidebd = pakages.filter(pakages => (pakages.img2));


    return (
        <div>
            {

                pakages.length === 0 ? <Spinner className="spinner" animation="border" /> : <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        outsidebd.map(pakage =>
                            <Destination pakage={pakage} key={pakage._id}>

                            </Destination>)
                    }
                </Row>
            }

        </div>
    );
};

export default Destinations;