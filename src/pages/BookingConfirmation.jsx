import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../styles/BookingConfirmation.css"
export default function BookingConfirmation() {
  return (
    <Container className="booking-confirmation ">
      <Row className="justify-content-center text-center booking  ">
        <Col lg="6">
        <i class="ri-check-fill"></i>
          <h1>Booking Confirmed!</h1>
          <p>Thank you for booking with us. We look forward to seeing you!</p>
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
        </Col>
      </Row>
    </Container>
  );
}