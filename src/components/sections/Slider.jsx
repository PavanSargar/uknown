import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Image } from "react-bootstrap";

// dummyimages
import { images } from "../../data";

import styles from "./Slider.module.css";

function ImageSlider() {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakPoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className={styles.container}>
      <Container className={styles["slider-container"]}>
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i} className={styles["slider-images"]}>
              <Image thumbnail alt="" src={img.img} />
            </div>
          ))}
        </Slider>
      </Container>
    </Container>
  );
}

export default ImageSlider;
