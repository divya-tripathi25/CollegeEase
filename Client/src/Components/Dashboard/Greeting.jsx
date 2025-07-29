import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Greeting({ userName }) {
    return (
        <Row className='justify-content-center'>
            <Col lg={3} className='mb-4'>
                <Card.Body className='text-center'>
                    <Card.Title className="text-primary">Welcome, {userName}!</Card.Title>
                    <Card.Text>
                        We are glad to have you back. Here's a quick overview of your dashboard.
                    </Card.Text>
                </Card.Body>
            </Col>
        </Row>
    );
}