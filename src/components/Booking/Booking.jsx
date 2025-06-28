import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  FormGroup,
  Row,
  Col,
  Button,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
 import "react-phone-number-input/style.css";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
 import PhoneInput from 'react-phone-number-input';   
import 'react-phone-number-input/style.css';   
 export default function Booking({ price, averageRating, country }) {
  const [bookingDetails, setBookingDetails] = useState({
    fullName: "",
  });
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState(1); // Default to 1 person
  const [error, setError] = useState("");
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const navigate = useNavigate();

  const totalPrice = price * numberOfPersons + 10; // Calculate total price (with service charge)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleDateChange = (e) => setDate(e.target.value);

  const handlePersonChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setNumberOfPersons(value < 1 ? 1 : value); // Ensure at least 1 person
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bookingDetails.fullName || !phone || !date) {
      setError("Please fill all fields before proceeding!");
      return;
    }

    if (!isUserLoggedIn) {
      setShowLoginAlert(true);
      return;
    }

    try {
      const bookingData = {
        fullName: bookingDetails.fullName,
        phoneNumber: phone,
        date: date,
        numberOfPersons: numberOfPersons,
        totalPrice: totalPrice,
        country: country,
      };

      await setDoc(doc(db, "bookings", `${Date.now()}`), bookingData);

      setError("");
      navigate("/booking-confirmation");
    } catch (err) {
      console.error("Error saving booking:", err);
      setError("Something went wrong. Please try again later.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };
  const handlePhoneChange = (value) => {
    setPhone(value);
  };
  return (
    <Container>
      <Row>
        <Col>
          <div className="rating d-flex">
            <h1>
              {price} <span>/per person </span>
            </h1>
            <span style={{ color: "orange" }}>
              ★
              <small style={{ color: "#666" }}>
                ({averageRating.toFixed(1)})
              </small>
            </span>
          </div>
          <hr />
          <h4>Information</h4>
          <Form onSubmit={handleSubmit}>
            {error && <Alert color="danger">{error}</Alert>}
            <div className="sec_form">
              <FormGroup>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={bookingDetails.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />
              </FormGroup>
              <FormGroup>
                  <PhoneInput
                    international
                    defaultCountry="EG"   
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="Phone Number"
                  />
                </FormGroup>
              <FormGroup>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={handleDateChange}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="number"
                  id="numberOfPersons"
                  name="numberOfPersons"
                  onChange={handlePersonChange}
                  placeholder="Number of persons"
                  min="1"
                />
              </FormGroup>
            </div>
            <div className="person">
              <p>
                {price} * {numberOfPersons} persons{" "}
                <span>{price * numberOfPersons}</span>
              </p>
              <p>
                Service charge <span>$10</span>
              </p>
              <h5>
                Total <span>{totalPrice}</span>
              </h5>
            </div>
            <Button type="submit" color="primary">
              Confirm Booking
            </Button>
          </Form>
        </Col>
      </Row>

      {showLoginAlert && (
        <Modal isOpen={showLoginAlert} toggle={() => setShowLoginAlert(false)}>
          <ModalHeader toggle={() => setShowLoginAlert(false)}>
            Login Required
          </ModalHeader>
          <ModalBody>
            You need to log in to leave a comment and proceed with booking.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setShowLoginAlert(false)}>
              Close
            </Button>
            <Button
              className="go_to_login"
              color="primary"
              onClick={handleLoginRedirect}
            >
              Go to Login
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </Container>
  );
}