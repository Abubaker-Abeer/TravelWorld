import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Login.css";
import register_img from "../../assets/images/login.png";
import plane_vector from "../../assets/images/plane_vector.png";
import { Container, Row, Col } from "reactstrap";
import login_L from "../../assets/images/login_L.png";
import login_F from "../../assets/images/login_F.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

   try {
  await signInWithEmailAndPassword(auth, email, password);
  localStorage.setItem("loggedIn", "true");
  setLoading(false);
  navigate("/home");
} catch (error) {
  setError("Login error: " + error.message);
  setLoading(false);
}

  };

  return (
    <section className="register-container_sec">
      <Container>
        <Row>
          <Col lg="12">
            <div className="login-container">
              <div className="image-section">
                <img src={register_img} alt="background" />
              </div>
              <form className="login-form" onSubmit={handleSubmit}>
                <h2>Welcome</h2>
                <p>Login with Email</p>
                {error && <p className="error-message">{error}</p>}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit" disabled={loading}>
                  {loading ? "Logging in..." : "Log In"}
                </button>

                <p className="p-3">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>

                <div className="top_login">
                  <img src={login_L} alt="" />
                  <img src={login_F} alt="" />
                </div>
              </form>
            </div>
            <img className="plane_vector" src={plane_vector} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
