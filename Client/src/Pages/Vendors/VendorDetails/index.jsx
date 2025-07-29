import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Badge, Button, Form } from 'react-bootstrap';
import VendorImage from '../../../images/vendorImage.png';
import FoodOne from '../../../images/food1.jpg';
import FoodTwo from '../../../images/food2.jpg';
import FoodThree from '../../../images/food3.jpg';

export default function VendorDetails() {

    const vendor = {
        id: 1,
        name: "Dinesh Chai Wala",
        description: "I have a very vast variety of chai, beverages, sandwiches, and fast food. Quality and hygiene are our top priorities.",
        image: VendorImage,
        contact: {
            phone: "+91 9876543210",
            email: "dineshchaiwala@example.com",
        },
        foodMenu: [
            {
                name: "Masala Chai",
                description: "Aromatic tea brewed with a mix of Indian spices.",
                category: "Beverage",
                calories: 90,
                price: "50",
                image: VendorImage,
                rating: 4.8
            },
            {
                name: "Sandwich",
                description: "Grilled sandwich with fresh vegetables and cheese.",
                category: "Snack",
                calories: 250,
                price: "80",
                image: VendorImage,
                rating: 4.5
            },
            {
                name: "Pasta",
                description: "Creamy white sauce pasta with a hint of garlic.",
                category: "Main Course",
                calories: 600,
                price: "120",
                image: VendorImage,
                rating: 4.7
            },
            {
                name: "Burger",
                description: "Juicy chicken burger with lettuce and special sauce.",
                category: "Main Course",
                calories: 450,
                price: "150",
                image: VendorImage,
                rating: 4.6
            },
            {
                name: "Cold Coffee",
                description: "Chilled coffee blended with milk and sugar.",
                category: "Beverage",
                calories: 200,
                price: "100",
                image: VendorImage,
                rating: 4.4
            },
            {
                name: "Cold Coffee",
                description: "Chilled coffee blended with milk and sugar.",
                category: "Beverage",
                calories: 200,
                price: "100",
                image: VendorImage,
                rating: 4.4
            }
        ],
        location: "123 Street Name, City, State, Pincode - 110011",
        operatingHours: [
            { day: "Monday - Friday", time: "8:00 AM - 10:00 PM" },
            { day: "Saturday - Sunday", time: "9:00 AM - 11:00 PM" },
        ],
        offers: ["10% off on orders above ₹500", "Free chai with every sandwich on weekends"],
        paymentMethods: ["Cash", "UPI", "Credit/Debit Cards"],
        ratings: 4.5,
        feedback: [
            { user: "John Doe", comment: "Great food and quick service!" },
            { user: "Jane Doe", comment: "Loved the variety of beverages!" },
            { user: "Rahul Singh", comment: "Amazing chai and sandwiches!" },
        ],
        gallery: [
            FoodOne,
            FoodTwo,
            FoodThree
        ],
    };

    function StarRating({ itemId }) {
        const [rating, setRating] = useState(0); 
    
        const handleRating = (value) => {
            setRating(value);
        };
    
        return (
            <div>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        style={{ cursor: 'pointer', color: star <= rating ? '#FFD700' : '#E4E5E9' }}
                        onClick={() => handleRating(star)}
                        className='fs-2'
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    }

    return (
        <>
            <Container fluid className="mt-4">
                <h1 className="text-center mb-4">Vendor Details</h1>

                <Row className="mb-4">
                    <Col lg={4}>
                        <Card>
                            <Card.Body className='d-flex'>
                                <div
                                    className='d-flex justify-content-center align-items-center me-3'
                                    style={{
                                        width: '8rem',
                                        height: '4rem',
                                        background: '#f3f3f9',
                                        borderRadius: '50%',
                                        padding: '.2rem',
                                    }}
                                >
                                    <img
                                        src={vendor.image}
                                        className='img-fluid'
                                        alt={vendor.name}
                                        style={{ borderRadius: '50%' }}
                                    />
                                </div>
                                <div>
                                    <Card.Title>{vendor.name}</Card.Title>
                                    <Card.Text>{vendor.description}</Card.Text>
                                    <p>
                                        <strong>Phone:</strong> {vendor.contact.phone} <br />
                                        <strong>Email:</strong> {vendor.contact.email}
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={8}>
                        <Card>
                            <Card.Body>
                                <h5>Location</h5>
                                <p>{vendor.location}</p>

                                <h5>Operating Hours</h5>
                                <ul>
                                    {vendor.operatingHours.map((schedule, index) => (
                                        <li key={index}>
                                            {schedule.day}: {schedule.time}
                                        </li>
                                    ))}
                                </ul>

                                <h5>Offers</h5>
                                <ul>
                                    {vendor.offers.map((offer, index) => (
                                        <li key={index}>{offer}</li>
                                    ))}
                                </ul>

                                <h5>Payment Methods</h5>
                                <ul>
                                    {vendor.paymentMethods.map((method, index) => (
                                        <li key={index}>{method}</li>
                                    ))}
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <Card>
                            <Card.Body>
                                <h5>Food Menu</h5>
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Item Name</th>
                                            <th>Description</th>
                                            <th>Category</th>
                                            <th>Calories (kcal)</th>
                                            <th>Price (₹)</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vendor.foodMenu.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.description}</td>
                                                <td>{item.category}</td>
                                                <td>{item.calories}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <Badge bg="warning" text="dark">
                                                        {item.rating} / 5
                                                    </Badge>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <Card>
                            <Card.Body>
                                <h5>Food Menu</h5>
                                <Row>
                                    {vendor.foodMenu.map((item, index) => (
                                        <Col key={index} md={2}>
                                            <Card>
                                                <Card.Img variant="top" src={item.image} alt={item.name} />
                                                <Card.Body>
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Text>{item.description}</Card.Text>
                                                    <p>Price: ₹{item.price}</p>
                                                    <p>Rating: {item.rating} / 5</p>
                                                    <div>
                                                        <StarRating itemId={item.id} />
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <h5>Overall Ratings</h5>
                                <p>
                                    <Badge bg="success">{vendor.ratings} / 5</Badge>
                                    <span> ({vendor.feedback.length} reviews)</span>
                                </p>
                                <div>
                                    <h6>Ratings Breakdown:</h6>
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            5 Stars:
                                            <div className="progress" style={{ height: '10px' }}>
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </li>
                                        <li>
                                            4 Stars:
                                            <div className="progress" style={{ height: '10px' }}>
                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </li>
                                        <li>
                                            3 Stars:
                                            <div className="progress" style={{ height: '10px' }}>
                                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </li>
                                        <li>
                                            2 Stars:
                                            <div className="progress" style={{ height: '10px' }}>
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </li>
                                        <li>
                                            1 Star:
                                            <div className="progress" style={{ height: '10px' }}>
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <h5>What People Say</h5>
                                <ul className="mb-0">
                                    {vendor.feedback.slice(0, 3).map((feedback, index) => (
                                        <li key={index}>
                                            <strong>{feedback.user}:</strong> {feedback.comment}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-3">
                                    <small className="text-muted">Showing top 3 comments</small>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <Card>
                            <Card.Body>
                                <h5>Food Gallery</h5>
                                <Row>
                                    {vendor.gallery.map((image, index) => (
                                        <Col key={index} lg={4}>
                                            <div>
                                                <img src={image} alt={`Food ${index + 1}`} className="img-fluid rounded"
                                                    style={{ height: '15rem', width: '25rem' }} />
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h5>Leave a Review</h5>
                                <Form>
                                    <Form.Group className="mb-3" controlId="review">
                                        <Form.Label>Your Feedback</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Write your feedback here..." />
                                    </Form.Group>
                                    <Button variant="primary">Submit</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}