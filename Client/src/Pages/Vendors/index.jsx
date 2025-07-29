import React, { useState } from 'react';
import { Card, Col, Container, Row, Form, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { vendorData } from './data';

export default function Vendors() {

  const [addVendorModal, setAddVendorModal] = useState(false);
  const toggleAddVendorModal = () => {
    setAddVendorModal(!addVendorModal);
  }

  const [newVendor, setNewVendor] = useState({
    name: '',
    description: '',
    phone: '',
    email: '',
    location: '',
    openingHoursMondayToFriday: '',
    openingHoursSaturdayTosunday: '',
    offers: '',
    paymentMethods: '',
    foodMenu: [
      { name: '', description: '', category: '', price: '' }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVendor({ ...newVendor, [name]: value });
  };

  const handleFoodMenuChange = (index, field, value) => {
    const updatedMenu = [...newVendor.foodMenu];
    updatedMenu[index][field] = value;
    setNewVendor({ ...newVendor, foodMenu: updatedMenu });
  };

  const addFoodMenuItem = () => {
    setNewVendor({
      ...newVendor,
      foodMenu: [...newVendor.foodMenu, { name: '', description: '', category: '', price: '' }]
    });
  };

  const removeFoodMenuItem = () => {
    if (newVendor.foodMenu.length > 1) {
      setNewVendor({
        ...newVendor,
        foodMenu: newVendor.foodMenu.slice(0, -1)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newVendor);
  };

  return (
    <>
      <Container fluid className="mt-4">
        <h1 className="text-center mb-4">Vendors</h1>

        <Button color='primary' className='mb-3 d-flex align-items-center' onClick={toggleAddVendorModal}>
          <span className="material-symbols-outlined">
            add
          </span> Add More Vendor
        </Button>

        <Row>
          {vendorData.map((vendor, index) => (
            <Col lg={3} key={index}>
              <Card className='mb-4' style={{ height: '200px' }}>
                <Card.Body className='d-flex'>
                  <div
                    className='d-flex justify-content-center align-items-center me-3'
                    style={{ width: '7rem', height: '4rem', background: '#f3f3f9', borderRadius: '50%', padding: '.2rem' }}
                  >
                    <img src={vendor.image} className='img-fluid' alt={vendor.name} style={{ borderRadius: '50%' }} />
                  </div>
                  <div>
                    <Card.Title>{vendor.name}</Card.Title>
                    <Card.Text className='mb-1'>
                      {vendor.description}
                    </Card.Text>
                    <small className='text-muted'>Location: {vendor.location}</small>
                    <br />
                    <div className="d-flex align-items-center mt-2">
                      <Link to={`/vendor-details/${vendor.id}`} className='btn btn-sm btn-primary me-3'>
                        Manage Vendor
                      </Link>
                      <Button variant='danger' className='btn-sm p-1 d-flex align-items-center'>
                        <span className="material-symbols-outlined fs-5">
                          delete
                        </span>
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Add Vendor Form */}
        <Modal show={addVendorModal} onHide={toggleAddVendorModal} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>Add New Vendor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-3" controlId="vendorName">
                <Form.Label>Vendor Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter vendor name"
                  name="name"
                  value={newVendor.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="vendorDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter vendor description"
                  name="description"
                  value={newVendor.description}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="vendorPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  name="phone"
                  value={newVendor.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="vendorEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={newVendor.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="vendorLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  name="location"
                  value={newVendor.location}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="vendorOpeningHoursMondayToFriday">
                <Form.Label>Opening Hours (Monday To Friday)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter opening hours"
                  name="openingHoursMondayToFriday"
                  value={newVendor.openingHoursMondayToFriday}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="vendorOpeningHoursSaturdayTosunday">
                <Form.Label>Opening Hours (Saturday To Sunday)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter opening hours"
                  name="openingHoursSaturdayTosunday"
                  value={newVendor.openingHoursSaturdayTosunday}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="vendorOffers">
                <Form.Label>Offers</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter offers"
                  name="offers"
                  value={newVendor.offers}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="vendorPaymentMethods">
                <Form.Label>Payment Methods</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter payment methods"
                  name="paymentMethods"
                  value={newVendor.paymentMethods}
                  onChange={handleChange}
                />
              </Form.Group>

              <h5 className="mb-3">Food Menu</h5>
              <Row>
                {newVendor.foodMenu.map((menuItem, index) => (
                  <Col lg={6} key={index} className="mb-3">
                    <h6 className='text-decoration-underline fw-bold'>Food Item {index + 1}</h6>
                    <Form.Group controlId={`foodMenuName-${index}`} className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={menuItem.name}
                        onChange={(e) => handleFoodMenuChange(index, 'name', e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId={`foodMenuDescription-${index}`} className="mb-3">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="text"
                        name="description"
                        value={menuItem.description}
                        onChange={(e) => handleFoodMenuChange(index, 'description', e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId={`foodMenuCategory-${index}`} className="mb-3">
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        type="text"
                        name="category"
                        value={menuItem.category}
                        onChange={(e) => handleFoodMenuChange(index, 'category', e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId={`foodMenuPrice-${index}`} className="mb-3">
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="text"
                        name="price"
                        value={menuItem.price}
                        onChange={(e) => handleFoodMenuChange(index, 'price', e.target.value)}
                      />
                    </Form.Group>

                  </Col>
                ))}
              </Row>
              <Button variant="primary" className='me-2' onClick={addFoodMenuItem}>
                Add Another Food Item
              </Button>
              {newVendor.foodMenu.length > 1 && (
                <Button variant="danger" onClick={removeFoodMenuItem}>
                  Remove Food Item
                </Button>
              )}

              <Modal.Footer>
                <Button variant="secondary" onClick={toggleAddVendorModal}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  )
}