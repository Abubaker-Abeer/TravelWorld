import "../styles/About.css";
import { Col, Container, Row } from "reactstrap";
import about__img from "../assets/images/gallery-01.jpg";
import Service from "../components/Services/Service";
import Subscribe from "../components/Subscribe/Subscribe";
export default function About() {
  return (
    <section>
      <div className="About_US">
        <h1>
          About <span>US</span>
        </h1>
      </div>

      <Container>
        <section className="mt-5 mb-5">
          <Row>
            <Col lg="6">
              <div className="about__contant">
                <h2>
                  Who <span>We Are?</span>
                </h2>
                <p>
                  We’re all about creating unforgettable experiences for our
                  guests. Our journey began with a simple passion for exploring
                  the beauty of the World.
                </p>
              </div>
              <div className="about__contant">
                <h2>
                  Our <span>Mission</span>
                </h2>
                <p>
                  We believe that travel is not just about visiting new places,
                  but about immersing yourself in new cultures, connecting with
                  nature, and making memories that last a lifetime.
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="about__img">
                <img src={about__img} alt="" />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <Col lg="9">
              <Service />
            </Col>
          </Row>
        </Container>
      </section>
      <Subscribe />
    </section>
  );
}