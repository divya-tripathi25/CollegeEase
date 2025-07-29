import React, { useState } from 'react';
import { Container, Table, Form, Button, Col, Row } from 'react-bootstrap';

export default function Feedbacks() {
  // Sample feedback data
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, student: 'Student 1', comment: 'Good food quality', rating: 4 },
    { id: 2, student: 'Student 2', comment: 'Average service', rating: 3 },
  ]);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: feedbacks.length + 1,
      student: e.target.student.value,
      comment: e.target.comment.value,
      rating: parseInt(e.target.rating.value, 10),
    };
    setFeedbacks([...feedbacks, newFeedback]);
  };

  return (
    <>
      <Container fluid className="mt-4">
        <h1 className="text-center mb-4">Feedback</h1>
        <Row>
          <Col lg={6}>
            {/* Feedback Form */}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text" name="student" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" name="comment" rows={3} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" name="rating" min="1" max="5" required />
              </Form.Group>

              <Button type="submit">Submit Feedback</Button>
            </Form>
          </Col>

          <Col lg={6}>
            {/* Feedback Table */}
            <Table striped bordered hover className="mt-4">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Student</th>
                  <th>Comment</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.map((feedback) => (
                  <tr key={feedback.id}>
                    <td>{feedback.id}</td>
                    <td>{feedback.student}</td>
                    <td>{feedback.comment}</td>
                    <td>{feedback.rating}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}