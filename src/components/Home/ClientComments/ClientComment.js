import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ClientComment.css'

const ClientComment = (props) => {
    const { comments, img } = props.comment;

    return (

        <Col>
            <Card className="comments-card shadow p-3 mb-5 bg-body rounded">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Text>
                        {comments}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default ClientComment;