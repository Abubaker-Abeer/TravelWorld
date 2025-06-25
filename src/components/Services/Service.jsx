import React from "react";
import ServicesCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../../assets/images/weather.png";
import guideImg from "../../assets/images/guide.png";
import customzationImg from "../../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Weather Forecast",
    desc: "Get real-time weather updates for your destination",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Get real-time weather updates for your destination",
  },
  {
    imgUrl: customzationImg,
    title: "Customzation",
    desc: "Get real-time weather updates for your destination",
  },
];
export default function Service() {
  return (
    <div  className="d-flex gap-3  service__item_respo ">
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServicesCard  item={item} />
        </Col>
      ))}
    </div>
  );
}