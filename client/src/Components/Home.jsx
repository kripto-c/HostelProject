import React from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div>
      <Header></Header>
        <Carousel className="carousel">
            <Carousel.Item>
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Hostel_Dormitory.jpg"
                alt="first-item"/>
            </Carousel.Item>
            <Carousel.Item>
                <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/15/bc/d3/19/ideal-social-hostel.jpg"
                alt="second-item"/>
            </Carousel.Item>
            <Carousel.Item>
                <img
                src="https://www.kayak.com.ar/rimg/kimg/db/d7/dc765dd2449cac1c.jpg?width=1366&height=768&crop=true"
                alt="third-item"/>
            </Carousel.Item>
        </Carousel>
      <Footer></Footer>
    </div>
  );
};

export default Home;
