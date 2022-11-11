import React from "react";
import Footer from "../Layout/Footer";
import Carousel from "react-bootstrap/Carousel";
import Review from '../Review/Reviews';
import "./Home.css";
import Review from "../Review/Reviews.js";

const Home = () => {
  return (
    <div className="home-container">
      <div className="carro">
      <Carousel className="d-flex justify-content-center">
        <Carousel.Item>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Hostel_Dormitory.jpg"
            alt="first-item"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/15/bc/d3/19/ideal-social-hostel.jpg"
            alt="second-item"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.kayak.com.ar/rimg/kimg/db/d7/dc765dd2449cac1c.jpg?width=1366&height=768&crop=true"
            alt="third-item"
          />
        </Carousel.Item>
      </Carousel>
      </div>
      <h1>Bienvendios al Hostel Dinamita</h1>
      <div className="info">
        <div className="collage">
          <img
            src="https://media.gq.com.mx/photos/619fc54a7a3578ea6e576d03/1:1/w_2000,h_2000,c_limit/bares%20de%20vino-160836693.jpg"
            alt="collage-1"
          />

          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/max1440/48357258.jpg?k=035ac71dc8cf908f6b770ec79bf034f5891a734d172c80159a0ac713ff2a1a7c&o="
            alt="collage-2"
          />
          <img
            src="https://i0.wp.com/www.disfrutarosario.com/wp-content/uploads/2020/10/Como-construir-una-pileta-en-casa-2.jpg?resize=640%2C480&ssl=1"
            alt="collage-3"
          />
          <img
            src="https://hqbeds.com/wp-content/uploads/2019/11/hostel1-e1573156979842.jpg"
            alt="collage-4"
          />
          <img
            src="https://www.elcalafate.tur.ar/img/anunciantes/724/matices-hostel-2-.jpg"
            alt="collage-5"
          />
          <img
            src="https://viajeros-17f81.kxcdn.com/wp-content/uploads/2020/10/DSC_0310-scaled.jpg"
            alt="collage-6"
          />
        </div>
      </div>

      <br />
      <div className="review">
        <Review />
      </div>

      <br />

      <hr></hr>
     

      <Footer></Footer>
    </div>
  );
};

export default Home;
