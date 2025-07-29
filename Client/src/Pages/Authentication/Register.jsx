import Cookies from 'js-cookie';
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { registerStudentAPI } from "../../apiConfig/apiCall";

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const user = location.search.slice(1);

    const [formData, setFormData] = useState({
        name: "",
        course: "",
        semester: "",
        admissionId: "",
        phone: "",
        email: "",
        password: "",
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Validate and handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if any field is empty
        for (const key in formData) {
            if (!formData[key]) {
                toast.error(`${key.charAt(0).toUpperCase() + key.slice(1)} is required`);
                return;
            }
        }

        const apiResponse = await registerStudentAPI(formData);
        if (apiResponse.status === 201) {
            Cookies.set('token', apiResponse.data.accessToken);
            toast.success("Register successful!");
            navigate('/dashboard?Student');
        } else {
            toast.error(apiResponse.message || "Invalid credentials!");
        }
    };

    return (
        <Container className="mt-5">
            <Row
                style={{
                    height: "80vh",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Col md={6}>
                    <Card
                        style={{
                            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                            border: "none",
                        }}
                    >
                        <Card.Body>
                            <h3 className="text-center mb-4">{user} Register</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter full name"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        placeholder="Enter course"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Semester</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="semester"
                                        value={formData.semester}
                                        onChange={handleChange}
                                        placeholder="Enter semester"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Admission ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="admissionId"
                                        value={formData.admissionId}
                                        onChange={handleChange}
                                        placeholder="Enter admission ID"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter email"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter password"
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Register
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;