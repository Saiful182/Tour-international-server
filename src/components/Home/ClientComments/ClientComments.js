import React from 'react';
import { Row } from 'react-bootstrap';
import useComments from '../../hooks/useComments';
import ClientComment from './ClientComment';
import './ClientComments.css'

const ClientComments = () => {
    const { comments } = useComments();
    return (
        <div>
            <div className="clients-comments">
                <h3>Our Clients Comments</h3>
            </div>
            <div>
                <Row xs={1} md={3} lg={4} className="g-4">

                    {
                        comments.map(comment => <ClientComment comment={comment} key={comment._id}></ClientComment>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ClientComments;