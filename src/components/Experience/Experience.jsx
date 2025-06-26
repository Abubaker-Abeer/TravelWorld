import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Subtitle from "../../shared/Subtitle";
import CountUp from "react-countup";  
import "./Experience.css";
import experienceImg from "../../assets/images/experience.png";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 800,  
      once: true,  
    });
  }, []);
  return (
    <section>
      <Container>
        <Row>
          <Col md={6}>
            <div className="experience__content">
              <Subtitle Subtitle="Experience  " />
              <h2>
                With our all experience <br /> we will serve you
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br />
                Quas aliquam, hic tempora inventore suscipit unde.
              </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>
                  <CountUp start={0} end={120} duration={20} suffix="K+" />{" "}
                 </span>
                <h6>Successful trip</h6>
              </div>
              <div className="counter__box">
                <span>
                  <CountUp start={0} end={20} duration={20} suffix="K+" />
                </span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>
                  <CountUp start={0} end={15} duration={20} />
                </span>
                <h6>Year experience</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}