import React from 'react';
import { Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';
import usePakages from '../hooks/usePakages';

const Destinations = () => {
    const { pakages } = usePakages();

    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    pakages.map(pakage =>
                        <Destination pakage={pakage} key={pakage._id}>

                        </Destination>)
                }
            </Row>

        </div>
    );
};

export default Destinations;