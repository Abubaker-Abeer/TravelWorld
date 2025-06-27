import "./Fans_Love.css";
import { Container } from "reactstrap";
import Subtitle from "../../shared/Subtitle";
import img_swiper_1 from "../../assets/images/ava-1.jpg";
import img_swiper_2 from "../../assets/images/ava-2.jpg";
import img_swiper_3 from "../../assets/images/ava-3.jpg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Fans_Love() {
  const reviews = [
    {
      image: img_swiper_1,
      name: "John Deep",
      role: "Customer",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor architecto neque. Repellat consectetur aperiam nam tempore placeat, adipisci amet dignissimos maiores cupiditate exercitationem saepe nemo? Minus esse tenetur repellendus.",
    },
    {
      image: img_swiper_2,
      name: "Ally Gomez",
      role: "Customer",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor architecto neque. Repellat consectetur aperiam nam tempore placeat, adipisci amet dignissimos maiores cupiditate exercitationem saepe nemo? Minus esse tenetur repellendus.",
    },
    {
      image: img_swiper_3,
      name: "Alex Bugg",
      role: "Customer",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor architecto neque. Repellat consectetur aperiam nam tempore placeat, adipisci amet dignissimos maiores cupiditate exercitationem saepe nemo? Minus esse tenetur repellendus.",
    },
    {
      image: img_swiper_1,
      name: "John Deep",
      role: "Customer",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor architecto neque. Repellat consectetur aperiam nam tempore placeat, adipisci amet dignissimos maiores cupiditate exercitationem saepe nemo? Minus esse tenetur repellendus.",
    },
  ];

  return (
    <section>
      <Container className="fans-love-section">
        <Subtitle Subtitle={"Fans Love"} />
        <h2 className="featured__tour-title">What our fans say about us</h2>

         <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,  
            disableOnInteraction: false,
          }}
          loop={true}  
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}  
          className="mySwiper"
        >
           {reviews.map((review, index) => (
            <SwiperSlide key={index} className="swiper_card">
              <p>{review.text}</p>
              <div className="img_text">
                <div className="img_col">
                  <img src={review.image} alt={review.name} />
                </div>
                <div className="text_col">
                  <h6>{review.name}</h6>
                  <p>{review.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}