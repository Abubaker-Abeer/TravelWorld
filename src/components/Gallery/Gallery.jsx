import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Subtitle from "../../shared/Subtitle.jsx";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img01 from "../../assets/images/gallery-01.jpg";
import img02 from "../../assets/images/gallery-02.jpg";
import img03 from "../../assets/images/gallery-03.jpg";
import img04 from "../../assets/images/gallery-04.jpg";
import img05 from "../../assets/images/gallery-05.jpg";
import img06 from "../../assets/images/gallery-06.jpg";
import img07 from "../../assets/images/gallery-07.jpg";
import img08 from "../../assets/images/gallery-07.jpg";

export default function Gallery() {

  useEffect(() => {
    AOS.init({
      duration: 900,   
      once: true        
    });
  }, []);

const gallery = [img01, img02, img07, img04, img03, img05, img06, img08];
  return (
    <section  >  
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle Subtitle={"Gallery"} />
            <h2 className="featured__tour-title">Visit our customers tour gallery</h2>
            <ResponsiveMasonry  
              columnsCountBreakPoints={{ 500: 1, 768: 5, 992: 4 }}
            >
              <Masonry gutter="1rem">
                {gallery.map((item, index) => (
                  <img src={item} key={index} alt="" 
                  style={{width: '100%', display:"block", borderRadius:"10px"}}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Col>
        </Row>
      </Container>
    </section>
  );
}