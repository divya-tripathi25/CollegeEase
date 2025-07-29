import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import VendorListTable from "../../Components/Dashboard/VendorListTable.jsx";
import StudentListTable from "../../Components/Dashboard/StudentListTable.jsx";
import Greeting from "../../Components/Dashboard/Greeting.jsx";
import VendorImage from "../../images/vendorImage.png";
import FoodOne from "../../images/food1.jpg";
import FoodTwo from "../../images/food2.jpg";
import FoodThree from "../../images/food3.jpg";
import { useUserDetails } from "../../hooks/useUserDetails.jsx";

export default function Dashboard() {
  const { data } = useUserDetails();

  const ROLE = data?.role;
  const userName = data?.name;

  const widgets = [
    { title: "All Vendors", count: 25 },
    { title: "Inactive Vendors", count: 5 },
    { title: "Active Vendors", count: 20 },
    { title: "Total Food Items", count: 100 },
  ];

  const vendor = {
    id: 1,
    name: "Dinesh Chai Wala",
    description:
      "I have a very vast variety of chai, beverages, sandwiches, and fast food. Quality and hygiene are our top priorities.",
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
        rating: 4.8,
      },
      {
        name: "Sandwich",
        description: "Grilled sandwich with fresh vegetables and cheese.",
        category: "Snack",
        calories: 250,
        price: "80",
        image: VendorImage,
        rating: 4.5,
      },
      {
        name: "Pasta",
        description: "Creamy white sauce pasta with a hint of garlic.",
        category: "Main Course",
        calories: 600,
        price: "120",
        image: VendorImage,
        rating: 4.7,
      },
      {
        name: "Burger",
        description: "Juicy chicken burger with lettuce and special sauce.",
        category: "Main Course",
        calories: 450,
        price: "150",
        image: VendorImage,
        rating: 4.6,
      },
      {
        name: "Cold Coffee",
        description: "Chilled coffee blended with milk and sugar.",
        category: "Beverage",
        calories: 200,
        price: "100",
        image: VendorImage,
        rating: 4.4,
      },
      {
        name: "Cold Coffee",
        description: "Chilled coffee blended with milk and sugar.",
        category: "Beverage",
        calories: 200,
        price: "100",
        image: VendorImage,
        rating: 4.4,
      },
    ],
    location: "123 Street Name, City, State, Pincode - 110011",
    operatingHours: [
      { day: "Monday - Friday", time: "8:00 AM - 10:00 PM" },
      { day: "Saturday - Sunday", time: "9:00 AM - 11:00 PM" },
    ],
    offers: [
      "10% off on orders above ₹500",
      "Free chai with every sandwich on weekends",
    ],
    paymentMethods: ["Cash", "UPI", "Credit/Debit Cards"],
    ratings: 4.5,
    feedback: [
      { user: "John Doe", comment: "Great food and quick service!" },
      { user: "Jane Doe", comment: "Loved the variety of beverages!" },
      { user: "Rahul Singh", comment: "Amazing chai and sandwiches!" },
    ],
    gallery: [FoodOne, FoodTwo, FoodThree],
  };

  return (
    <Container fluid className="mt-4">
      <h1 className="text-center mb-4">Dashboard</h1>

      <Greeting userName={userName} />

      {ROLE === "Admin" ? (
        <Row>
          {widgets.map((widget, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">
                    {widget.title}
                  </Card.Title>
                  <h2 className="display-4">{widget.count}</h2>
                </Card.Body>
              </Card>
            </Col>
          ))}

          <Col lg={6} className="mb-4">
            <Card>
              <Card.Header>
                <h5 className="card-title mb-0">Vendor List</h5>
              </Card.Header>
              <Card.Body>
                <VendorListTable />
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-4">
            <Card>
              <Card.Header>
                <h5 className="card-title mb-0">Students List</h5>
              </Card.Header>
              <Card.Body>
                <StudentListTable />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : null}

      {ROLE === "Vendor" ? (
        <Row className="mb-4">
          <Col lg={12}>
            <Card>
              <Card.Body>
                <h5>Your Food Menu</h5>
                <Row>
                  {vendor.foodMenu.map((item, index) => (
                    <Col key={index} md={2}>
                      <Card>
                        <Card.Img
                          variant="top"
                          src={item.image}
                          alt={item.name}
                        />
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>{item.description}</Card.Text>
                          <p>Price: ₹{item.price}</p>
                          <p className="mb-0">Rating: {item.rating} / 5</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={12}></Col>
        </Row>
      ) : null}
    </Container>
  );
}
