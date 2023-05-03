import React from 'react';
import { Card } from 'react-bootstrap';

const Image = (props) => {
    return (
        <Card style={{
            width: '20rem',
            background: "#000",
            color: "#fff"
        }} className="mx-auto mb-2">
            <Card.Img variant="top" src={props.pic} />
            <Card.Body>
                <Card.Title style={{
                    fontWeight: '700',
                    textTransform: "capitalize"
                }}>Classified as: {props.name.replace(/_/g, ' ')}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Image;