import React from 'react';
import { Row } from 'react-bootstrap';

import useGuides from '../../hooks/useGuides';
import Guide from './Guide';
import './Guides.css'

const Guides = () => {
    const { guides } = useGuides();
    console.log(guides);

    return (

        <div>
            <div className="guides-container">
                <h3>Our Tour Guides</h3>
            </div>

            <Row xs={1} md={3} lg={4} className="g-4">
                {
                    guides.map(guide =>
                        <Guide guide={guide} key={guide._id}></Guide>)
                }
            </Row>
        </div>

    );
};

export default Guides;