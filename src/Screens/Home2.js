import "../CSS/Carousel/Carousel.css";
import "../CSS/Home/Home.css";

import "../CSS/Home2/Home2.css";
import "../MobileCSS/Home2.css";

import { Col, Row, Card } from "react-bootstrap";

import { Button } from "react-bootstrap";
import DevoteeCarousel from "./DevoteeCarousel";
import Devotees from "./Devotees";
import { Link } from "react-router-dom";
import Method1 from "../Components/HomeSections/Method1";
import Method2 from "../Components/HomeSections/Method2";
import Method3 from "../Components/HomeSections/Method3";
import MyCarousel from "../Components/HomeSections/MyCarousel";
import React from "react";
import HomeSection2OfHomams from "../Components/HomeSection2/HomeSection2OfHomams";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TempleSpecificPuja from "../Components/HomeSection2/TempleSpecificPuja";
import Devotees2 from "./Devotees2";
import Subscribes from "./Subscribes";
import Subscribe from "./subscribeList";
import Sarpa from "./Sarpa";
import Homams from "./Homam";
import Tades from "./Tades";

// import TestimonialSection from "../Components/HomeSections/testimonials";
// import Testimonials from "./Testimonials";
// import WordsFromDevotees from "./WordsFromDevotees";

// import { pujacategories } from "../Components/HomeSection2/pujacategories";
// import Carousel from "react-bootstrap/Carousel";
// import { Row, Col } from "react-bootstrap";
// import Image from "react-bootstrap/Image";

// import RemedyPujas from "../Components/Home-Sections/Section1";
// import RemedyPujas2 from "../Components/Home-Sections/Section2";

// import CombinationPujas from "../Components/Home-Sections/Section3";
// import GodsAndPujas from "../Components/Home-Sections/Section4";

// import UpcomingEvents from "../Components/Home-Sections/UpcomingEvents";
// import UpcomingPujas from "../Components/Home-Sections/UpcomingEvents";

// const pujaCategories = [
//   {
//     id: 1,
//     title: "God Specific Puja",
//     imageSrc:
//       "https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2021/09/10112148/FESTIVAL-SPECIFIC-PUJA.jpg",
//     altText: "GOD SPECIFIC PUJA",
//     price: "$50",
//   },
//   {
//     id: 2,
//     title: "Hanuman Puja",
//     imageSrc: "assets/Carosuel/hanuman.jpg",
//     altText: "Hanuman Puja",
//     price: "$40",
//   },
//   {
//     id: 3,
//     title: "Lakshmi Puja",
//     imageSrc: "assets/Carosuel/lakshmi.jpg",
//     altText: "Lakshmi Puja",
//     price: "$60",
//   },
//   {
//     id: 4,
//     title: "Navratri Puja",
//     imageSrc: "assets/Carosuel/navratri.jpg",
//     altText: "Navratri Puja",
//     price: "$75",
//   },
//   {
//     id: 5,
//     title: "Vastu Puja",
//     imageSrc: "assets/Carosuel/vaastu.jpg",
//     altText: "Vastu Puja",
//     price: "$30",
//   },
//   {
//     id: 6,
//     title: "Sudarshan Puja",
//     imageSrc: "assets/Carosuel/sudarshan.jpg",
//     altText: "Sudarshan Puja",
//     price: "$45",
//   },
//   {
//     id: 7,
//     title: "Ganesha Puja",
//     imageSrc: "assets/Carosuel/ganesha.jpg",
//     altText: "Ganesha Puja",
//     price: "$50",
//   },
//   {
//     id: 8,
//     title: "Satyanarayan Puja",
//     imageSrc: "assets/Carosuel/satyanarayan.jpg",
//     altText: "Satyanarayan Puja",
//     price: "$55",
//   },
// ];

function Home2() {
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(244 230 255)",
          // backgroundColor: "#FFF4E6",

          minHeight: "100vh",
          padding: "20px",
        }}
        className="homeclassname"
      >
        {/* section1 */}
        <section>
          <MyCarousel />
        </section>

        {/* puja categories */}

        <section className="puja-categories-main-section">
          <div className="title-main">
            {/* <h3 className="merienda" >Welcome to Astrobharati</h3> */}
            <h3 style={{ color: "#ff6600" }} className="merienda">
              Puja Categories
            </h3>
            <img
              src="assetstwo/backgroundimages/titleunderline-removebg.png"
              alt="not found"
              width={250}
            />
          </div>

          <div>
            <Row className="home-section2">
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                className="puja-categories-card"
              >
                <Card className="mb-3">
                  <div className="cardimage-body">
                    <Card.Img
                      variant="top"
                      src="https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2021/09/10112148/FESTIVAL-SPECIFIC-PUJA.jpg"
                      alt="GOD SPECIFIC PUJA"
                      className="card-img-top"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="puja-categories-card-title">
                      God Specific Puja
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                className="puja-categories-card"
              >
                <Card className="mb-3">
                  <div className="cardimage-body">
                    <Card.Img
                      variant="top"
                      src="assetstwo/profile/allhomam.jpg"
                      alt="Hanuman Puja"
                      className="card-img-top"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="puja-categories-card-title">
                    All Homams
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                className="puja-categories-card"
              >
                <Card className="mb-3">
                  <div className="cardimage-body">
                    <Card.Img
                      variant="top"
                      src="assetstwo/profile/KalaSarpaDosha.png"
                      alt="Hanuman Puja"
                      className="card-img-top"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="puja-categories-card-title">
                    Sarpa Dosha
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                className="puja-categories-card"
              >
                <Card className="mb-3">
                  <div className="cardimage-body">
                    <Card.Img
                      variant="top"
                      src="assetstwo/profile/AllTades.jpg"
                      alt="Hanuman Puja"
                      className="card-img-top"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="puja-categories-card-title">
                    All Tades
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* talk to asroguru */}
        <section className="home2-talktoastoguru-main">
          <div className="talktoastoguru-parent">
            <div className="talkoastoguru-child">
              <h3>
                it's time to choose Right Astrologer for your better future...
              </h3>
              <h6>
                Talk to our experienced Astrologers and get rigth solutions for
                you problems
              </h6>
              <button>CALL US NOW</button>
            </div>
          </div>
        </section>

        {/* temple specific puja */}
       
        <section className="mt-5">
          <TempleSpecificPuja />
        </section>

        <div className="mt-5">
          <section>
            <Subscribes />
          </section>
        </div>

        {/* sarpa dosha */}
        <div className="mt-5">
          <section>
            <Sarpa />
          </section>
        </div>


        {/* Homams */}
        <div class="mt-5">
          <section>
            <Homams />
          </section>
        </div>

        {/* Tades */}
        <div class="mt-5">
          <section>
            <Tades />
          </section>
        </div>

        {/* Our devotees says about us !!!!! */}
        <div className="mt-5 ourdevotee-main">
          <div className="title-main">
            <h3
              style={{
                color: "#ff6600",
                fontFamily: "'Merienda One', cursive",
              }}
            >
              Our devotees say about us!!!!!
            </h3>

            <img
              src="assetstwo/backgroundimages/titleunderline-removebg.png"
              alt="not found"
              width={300}
            />
          </div>
          <section>
            <Devotees2 />
          </section>
        </div>
      </div>
    </>
  );
}

export default Home2;
