import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";
import "../styles/home.css";
import SearchBar from "../components/SearchBar/SearchBar";
import Service from "../components/Services/Service";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <>
    <section>
      <Container>
        <Row>
         
          <Col
            lg="6"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle Subtitle={"Know Before You Go"} />
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Traveling opens the door to creating{" "}
                <span className="highlight">memories</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus quisquam autem consequuntur incidunt quod voluptatibus
                blanditiis deleniti aspernatur animi, dolorem quas. Eaque
                voluptatibus labore tempora vel a earum commodi velit.
              </p>
            </div>
          </Col>
          <Col lg="2" data-aos="zoom-in" data-aos-delay="100">
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>

          <Col lg="2" data-aos="zoom-in" data-aos-delay="300">
            <div className="hero__img-box mt-4">
              <video src={heroVideo} controls />
            </div>
          </Col>

          <Col lg="2" data-aos="zoom-in" data-aos-delay="500">
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
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
      </>
  );
}
