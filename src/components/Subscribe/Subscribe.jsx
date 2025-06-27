import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Subscribe.css";
import male_tourist from "../../assets/images/male-tourist.png";
export default function Subscribe() {
  return (
    <section className="neweLetter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="neweLetter__content">
              <h2>Subscribe now to get useful traveling information</h2>

              <div className="neweLetter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsLetter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati adipisici sunt in, provident facere ipsam?
              </p>
            </div>
          </Col>
          <Col lg="6">
          <div className="neweLetter__img">
            <img src={male_tourist} alt="" />
            </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
}