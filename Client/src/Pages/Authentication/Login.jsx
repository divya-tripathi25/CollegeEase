import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { loginAdminAPI, loginStudentAPI } from "../../apiConfig/apiCall";
import Cookies from 'js-cookie';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const location = useLocation();
  const user = location.search.slice(1);

  const [currentUser, setCurrentUser] = useState(user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in both email and password.");
      return;
    }

    setLoading(true);

    try {
      if (currentUser === "Admin") {
        const response = await loginAdminAPI({ email, password });
        if (response.status === 200) {
          Cookies.set('token', response.data.accessToken);
          toast.success("Login successful!");
          navigate('/dashboard?Admin');
        } else {
          toast.error(response.message || "Invalid credentials!");
        }
      } else if (currentUser === "Student") {
        const response = await loginStudentAPI({ email, password });
        if (response.status === 200) {
          Cookies.set('token', response.data.accessToken);
          toast.success("Login successful!");
          navigate('/dashboard?Student');
        } else {
          toast.error(response.message || "Invalid credentials!");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row
        style={{
          height: '80vh',
          justifyContent: 'center',
          alignItems: 'center',
        }} >
        <Col md={6}>
          <Card style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', border: 'none' }}>
            <Card.Body>
              <h3 className="text-center mb-4">{currentUser} Login</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                {
                  currentUser === "Student" ? <Link to={`/register?${currentUser}`} className="text-dark">Sign up in CMS</Link> : null
                }

                <Button
                  variant="primary"
                  type="submit"
                  className="mt-2 w-100"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;