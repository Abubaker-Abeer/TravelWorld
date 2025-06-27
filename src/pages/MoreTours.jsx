import { Container, Row, Col } from "reactstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Tours.css";
import Subtitle from "../shared/Subtitle";
const MoreTours = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { remainingTours, currentPage = 2 } = location.state || { remainingTours: [], currentPage: 2 };
  const handleNavigation = (page) => {
    if (page === 1) {
      navigate("/tours", { state: { currentPage: 1 } });
    } else if (page === 2) {
      navigate("/more-tours", { state: { remainingTours, currentPage: 2 } });
    }
  };

  return (
    <section>
    <Container>
      <Row>
        <Col lg="12">
        <Subtitle Subtitle={"Explore"} />
        <h2 className="featured__tour-title">Our Featured Tours</h2>          <ResponsiveMasonry columnsCountBreakPoints={{ 500: 1, 768: 5, 992: 4 }}>
            <Masonry gutter="1rem">
              {remainingTours.map((item, index) => (
                <div className="image-container" key={index}>
                  <Link to={`/tours/${item.country}`} state={item}>
                    <img src={item.img} alt={item.country} className="explore-image" />
                    <div className="overlay"></div>
                    <div className="image-text">
                      <small className="image-text_landmark">{item.landmark}</small>
                      <br />
                      <span>{item.country}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <button
          className={`btn_Load-More ${currentPage === 1 ? "active" : ""}`}
          onClick={() => handleNavigation(1)}
        >
          1
        </button>
        <button
          className={`btn_Load-More ${currentPage === 2 ? "active" : ""}`}
          onClick={() => handleNavigation(2)}
        >
          2
        </button>
      </div>
    </Container>

    </section>

  );
};

export default MoreTours;