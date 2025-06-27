import React, { useState } from "react";
import {
  Col,
  Container,
  Row,} from "reactstrap";
import plane_vector from "../assets/images/plane_vector.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";
import "../styles/Tours.css";
import img01 from "./../assets/images/LONDON_1.png";
import img02 from "./../assets/images/INDONESIA_2.png";
import img03 from "./../assets/images/Australia_33.avif";
import img04 from "./../assets/images/CHINA_4.png";
import img05 from "./../assets/images/FRANCE_5.png";
import img06 from "./../assets/images/UAE_7.png";
import img07 from "./../assets/images/THAILAND_6.png";
import img08 from "./../assets/images/EGYPT.jpg";
import img09 from "./../assets/images/MALDIVES_8.png";
import img10 from "./../assets/images/PHILIPPINES_10.png";
import img11 from "./../assets/images/THAILAND_9.png";
import img12 from "./../assets/images/Italy.jpg";
import img13 from "./../assets/images/Japan.jpg";
import { useNavigate } from "react-router-dom";
import Subscribe from "../components/Subscribe/Subscribe";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Tours() {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [Explore, setExplore] = useState([
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
      img: img09,
      country: "Maldives",
      landmark: "Resorts",
      price: 220,
      people: 2,
      description:
        "Enjoy a luxury stay at a private resort in the Maldives, a paradise surrounded by crystal-clear waters and breathtaking marine life. Wake up to panoramic views of the Indian Ocean from your overwater villa, and experience world-class amenities designed for ultimate relaxation. Whether you want to dive into the vibrant coral reefs, indulge in a spa day with oceanfront views, or simply relax on your private deck,  .",
      rating: 4.7,
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
      img: img10,
      country: "Philippines",
      landmark: "Boracay",
      price: 95,
      people: 8,
      description:
        "Relax on the pristine beaches of Boracay, Philippines, an island paradise known for its powdery white sands and clear turquoise waters. With its picturesque sunsets, Boracay offers a serene escape for travelers looking to unwind in a tropical haven. You can enjoy a wide variety of activities, from snorkeling in vibrant coral reefs to taking peaceful strolls along the shore. The island’s warm hospitality,  .",
      rating: 4.3,
    },

    {
      img: img12,
      country: "Italy",
      landmark: "Venice",
      price: 170,
      people: 6,
      rating: 4.6,
      description:
        "Explore the romantic canals of Venice, Italy, a city built on water and known for its breathtaking architecture and art. Glide through the waterways on a gondola ride, admire the stunning St. Mark's Basilica, and indulge in authentic Italian cuisine. From the iconic Rialto Bridge to the serene beauty of the Venetian Lagoon, Venice offers an enchanting experience for every traveler.",
    },
    {
      img: img11,
      country: "Philippines",
      landmark: "Boracay",
      price: 95,
      people: 8,
      description:
        "Relax on the pristine beaches of Boracay, Philippines, where unforgettable sunsets and vibrant nightlife combine to create the ultimate tropical escape. Famous for its lively atmosphere, Boracay offers a unique blend of relaxation and entertainment. Whether you're enjoying a peaceful day at one of the many luxury resorts or immersing yourself in the energetic nightlife, the island caters to all. Watersports like parasailing,  .",
      rating: 4.3,
    },
    {
      img: img13,
      country: "Japan",
      landmark: "Kyoto",
      price: 140,
      people: 5,
      rating: 4.8,
      description:
        "Immerse yourself in the cultural heart of Japan in Kyoto, a city rich with ancient temples, serene gardens, and vibrant traditions. Wander through the bamboo groves of Arashiyama, visit the golden pavilion of Kinkaku-ji, and participate in a traditional tea ceremony. With its timeless charm and exquisite scenery, Kyoto is a destination that perfectly blends history, spirituality, and natural beauty.",
    },
    
  ]);

  const navigate = useNavigate();
  const filteredTours = Explore.filter((tour) =>
    tour.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const initialImages = filteredTours.slice(0, 10);
 const handleLoadMore = () => {
    const remainingTours = filteredTours.slice(10); 
    navigate("/more-tours", { state: { remainingTours } });
  };
  const [modal, setModal] = useState(false);

    return (
    <section>
      <div className="img_bannar">
        <h1>
          <span>All</span> Tours
        </h1>
      </div>
      <Container>
        <Row>
          <Col>
            <section className="mt-5">
              <SearchBar setSearchQuery={setSearchQuery} />{" "}
            </section>
            <img
              style={{ width: "35%", marginTop: "35%" }}
              className="plane_vector"
              src={plane_vector}
              alt=""
            />

            <section>
              <Container>
                <Row>
                  <Col lg="12">
                    <Subtitle Subtitle={"Explore"} />
                    <h2 className="featured__tour-title">Our Featured Tours</h2>
                    <ResponsiveMasonry
                      columnsCountBreakPoints={{ 500: 1, 768: 5, 992: 4 }}
                    >
                      <Masonry gutter="1rem">
                        {(showAll ? filteredTours : initialImages).map(
                          (item, index) => (
                            <div className="image-container" key={index}>
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
                          )
                        )}
                      </Masonry>
                    </ResponsiveMasonry>
                  </Col>
                </Row>
              </Container>
            </section>

            {!showAll && (
              <div className="text-center mt-4   aling-items-center">
                <button
                  className="btn_Load-More"
                  onClick={() => navigate("/tours")}
                >
                  1
                </button>
                <button className="btn_Load-More" onClick={handleLoadMore}>
                  2
                </button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Subscribe />
    </section>
  );
}