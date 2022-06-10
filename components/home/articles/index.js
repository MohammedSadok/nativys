import styles from "./articles.module.css";
import Article from "../article";
import React, { useRef } from "react";
import data from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Articles() {
  const slider = useRef(null);
  const elements = data.map((elem) => {
    return (
      <Article
        key={elem.id}
        name={elem.name}
        date={elem.date}
        type={elem.type}
        desc={elem.desc}
        image={elem.image}
      />
    );
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 730,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h3>Magazine</h3>
        <h2>Découvrez nos articles</h2>
      </div>

      <Slider ref={slider} {...settings} className={styles.main}>
        {elements}
      </Slider>

      <div className={styles.btnContainer}>
        <button onClick={() => slider?.current?.slickPrev()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              fillRule="evenodd"
              d="M8.705 6.705a.998.998 0 0 0 0 1.41L12.58 12l-3.876 3.884a.998.998 0 0 0 1.411 1.411L15.41 12l-5.295-5.295a.997.997 0 0 0-1.41 0z"
            ></path>
            <use transform="matrix(0 1 1 0 -.295 .295)"></use>
          </svg>
        </button>
        <button onClick={() => slider?.current?.slickNext()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              fillRule="evenodd"
              d="M8.705 6.705a.998.998 0 0 0 0 1.41L12.58 12l-3.876 3.884a.998.998 0 0 0 1.411 1.411L15.41 12l-5.295-5.295a.997.997 0 0 0-1.41 0z"
            ></path>
            <use transform="matrix(0 1 1 0 -.295 .295)"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
