import React from "react";
import { Container } from "react-bootstrap";
import Faq from "./sections/Faq";
import Landing from "./sections/Landing";
import NavBar from "./sections/NavBar";
import Roadmap from "./sections/Roadmap";
import ImageSlider from "./sections/Slider";
import Footer from "./sections/Footer";

function Homepage() {
  return (
    <Container>
      <NavBar />
      <Landing />
      <ImageSlider />
      <Roadmap />
      <Faq />
      <Footer />
    </Container>
  );
}

export default Homepage;
