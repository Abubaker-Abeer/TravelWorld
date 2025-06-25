import { useRef } from "react";
import "./Search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

export default function SearchBar({ setSearchQuery }) {
  const locationRef = useRef('');

  const searchHandler = () => {
    const location = locationRef.current.value;

    if (location === '') {
      alert('Please enter a location');
      return;
    }

    setSearchQuery(location); 
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="Where are you going?" ref={locationRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast ">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder="Distance k/m"  />
            </div>
          </FormGroup>{" "}
          <FormGroup className="d-flex gap-3 form__group form__group-last form__group-fast2">
            <span>
              <i className="ri-group-line"></i>{" "}
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0"  />
            </div>
          </FormGroup >
          <span className="search__icon" onClick={searchHandler}>
            <i  className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
}