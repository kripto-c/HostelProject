import React from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css"

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
        <div className="info">
          <img
          src="https://media.gq.com.mx/photos/619fc54a7a3578ea6e576d03/1:1/w_2000,h_2000,c_limit/bares%20de%20vino-160836693.jpg"
          alt="chocando-copa"
          />
          <div className="texto">
          <h1>Bienvendios al Hostel Dinamita
          </h1>
          <p>el hostel dinamita cuenta con varias cosas dasd asdsadsad asd asdas dasd asd asd sa asd asd</p>
          </div>
        </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
