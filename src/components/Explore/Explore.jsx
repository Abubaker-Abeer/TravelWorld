import { Link } from "react-router-dom";
import img01 from "../../assets/images/LONDON_1.png";
import img02 from "../../assets/images/INDONESIA_2.png";
import img03 from "../../assets/images/Australia_33.avif";
import img04 from "../../assets/images/CHINA_4.png";
import img05 from "../../assets/images/FRANCE_5.png";
import img06 from "../../assets/images/UAE_7.png";
import img07 from "../../assets/images/THAILAND_6.png";
import img08 from "../../assets/images/EGYPT.jpg";
import { Col, Container, Row } from "reactstrap";
import Subtitle from "../../shared/Subtitle.jsx";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./Explore.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Explore() {
  useEffect(() => {
    AOS.init({
      duration: 900,  
      once: true,  
    });
  }, []);

   const Explore = [
    {
      img: img01,
      country: "London",
      landmark: "Big Ben",
      price: 150,
      people: 5,
      rating: 4.5,
      description:
        "Experience the iconic Big Ben in the heart of London, a city where history meets modernity. Marvel at the clock tower’s intricate design, stroll along the Thames River, and immerse yourself in the vibrant culture of this bustling metropolis. Whether it's sightseeing or exploring London’s rich heritage, Big Ben is the perfect starting point for your journey.",
    },
    {
      img: img03,
      country: "Australia",
      landmark: "Sydney",
      price: 120,
      people: 8,
      rating: 4.7,
      description:
        "Explore the beauty of Sydney, Australia’s largest and most cosmopolitan city. Visit the world-famous Sydney Opera House, take in breathtaking views from the Sydney Harbour Bridge, and unwind on the golden sands of Bondi Beach. Sydney is the ideal destination for adventure seekers and culture enthusiasts alike, offering a blend of urban excitement and natural wonders.",
    },
    {
      img: img04,
      country: "China",
      landmark: "Wuxi",
      price: 180,
      people: 6,
      rating: 4.3,
      description:
        "Visit Wuxi, one of China's most culturally rich and historical cities. Known for its ancient temples, gardens, and picturesque lakes, Wuxi offers a serene escape from the hustle and bustle of larger cities. Explore the famous Lingshan Grand Buddha, experience traditional Chinese architecture, and enjoy the tranquil beauty of Taihu Lake, all while soaking in Wuxi's deep-rooted history.",
    },
    {
      img: img07,
      country: "Thailand",
      landmark: "Phetchabun",
      price: 100,
      people: 4,
      rating: 4.2,
      description:
        "Discover the natural beauty of Phetchabun, Thailand, where rolling mountains and lush landscapes await. Known for its cooler climate, Phetchabun offers stunning views, unique temples like Wat Pha Sorn Kaew, and national parks filled with diverse wildlife. Whether you're hiking, visiting sacred sites, or simply enjoying the scenic beauty, Phetchabun provides an unforgettable escape into nature.",
    },
    {
      img: img05,
      country: "France",
      landmark: "Paris",
      price: 200,
      people: 10,
      rating: 4.8,
      description:
        "Enjoy a romantic getaway in Paris, the city of love and light. From the Eiffel Tower to the Louvre, Paris is filled with world-renowned landmarks, charming cafes, and elegant boutiques. Wander through the cobblestone streets of Montmartre, take a boat ride along the Seine River, and indulge in gourmet cuisine. Whether it’s romance, art, or fashion, Paris has it all.",
    },
    {
      img: img02,
      country: "Indonesia",
      landmark: "Bali",
      price: 90,
      people: 7,
      rating: 4.6,
      description:
        "Relax on the stunning beaches of Bali, Indonesia, a tropical paradise known for its crystal-clear waters, lush green rice terraces, and spiritual retreats. Bali offers something for everyone, from surfing on the pristine beaches of Uluwatu to visiting the sacred temples of Ubud. Experience the island's rich culture, rejuvenate in luxury resorts, and explore hidden waterfalls in this enchanting destination.",
    },
    {
      img: img08,
      country: "Egypt",
      landmark: "Pyramids of Giza",
      price: 130,
      people: 6,
      rating: 4.4,
      description:
        "Visit the ancient Pyramids of Giza, Egypt, one of the Seven Wonders of the Ancient World. Stand in awe of the Great Pyramid, explore the enigmatic Sphinx, and uncover the secrets of the pharaohs. A trip to Giza is not just a visit to a historical site but a journey back in time to the height of Egypt’s glorious past. Discover the mysteries of ancient civilizations on this once-in-a-lifetime adventure.",
    },
    {
      img: img06,
      country: "UAE",
      landmark: "Dubai",
      price: 250,
      people: 15,
      rating: 4.9,
      description:
        "Experience the luxury and modernity of Dubai, UAE, a city that offers a seamless blend of tradition and cutting-edge architecture. Marvel at the towering Burj Khalifa, shop at the world’s largest mall, and enjoy thrilling desert safaris. Whether you're seeking opulence, adventure, or cultural immersion, Dubai is a city like no other, offering a wealth of experiences in the heart of the Middle East.",
    },
  ];

  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 500: 1, 768: 5, 992: 4 }}
              >
                <Masonry gutter="1rem">
                  {Explore.map((item, index) => (
                    <div
             
                      data-aos-easing="ease-in-sine"
                      className="image-container"
                      key={index}
                    >
                      <Link to={`/tours/${item.country}`} state={item}>
                        {" "}
                        <img
                          src={item.img}
                          alt={item.country}
                          className="explore-image"
                        />
                        <div className="overlay"></div>
                        <div className="image-text">
                          <small className="image-text_landmark">
                            {item.landmark}
                          </small>
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
        </Container>
      </section>
    </div>
  );
}