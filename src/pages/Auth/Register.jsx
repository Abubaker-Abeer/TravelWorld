import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from "reactstrap";
import register_img from "../../assets/images/register.png";
import plane_vector from "../../assets/images/plane_vector.png";
import login_L from "../../assets/images/login_L.png";
import login_F from "../../assets/images/login_F.png";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/home");
    } catch (error) {
      console.error("Error creating account:", error.message);
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <section className="register-container_sec">
      <Container>
        <Row>
          <Col lg="12">
            <div className="register-container">
              <div className="image-section">
                <img src={register_img} alt="background" />
              </div>
              <form className="form-section" onSubmit={handleSubmit}>
                <h2>Create a New Account</h2>
                <p>
                  By creating an account, you agree to our{" "}
                  <a href="#">Privacy Policy</a> and{" "}
                  <a href="#">Terms of Use</a>.
                </p>
                <div className="fr_las">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Phone Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
                <button type="submit">Register</button>

                <p className="p-3">
                  Already have an account? <Link to="/login">Log In</Link>
                </p>

                <div className="top_login">
                  <img src={login_L} alt="" />
                  <img src={login_F} alt="" />
                </div>
              </form>

              <ToastContainer />
            </div>
            <img className="plane_vector" src={plane_vector} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Register;
