import styles from "./institue.module.css";
import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Rating } from "react-simple-star-rating";
import AnimateHeight from "react-animate-height";
import Link from "next/link";
export default function Institue(props) {
  const slider = useRef(null);
  const customHandleClick = () =>
    localStorage.setItem("institue", JSON.stringify(props.data));
  const [height, setHeight] = useState(0);
  const images = [
    props.data.photo1,
    props.data.photo2,
    props.data.photo3,
    props.data.photo4,
    props.data.photo5,
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const style = {
    transform: height ? "rotate(-90deg)" : "",
    transition: "transform 300ms ease",
  };
  return (
    <article
      className={styles.article}
      onMouseOver={() => {
        props.handleMap(props.data.latitude, props.data.longitude);
      }}
    >
      <div className={styles.info}>
        <Slider ref={slider} {...settings} className={styles.images}>
          {images.map((item) => {
            let count = 0;
            return (
              <img
                alt={item}
                key={count}
                src={`https://nativys.com/image-get/${item}`}
                className={styles.image}
              />
            );
            count++;
          })}
        </Slider>
        <button
          className={styles.btnLeft}
          onClick={() => slider?.current?.slickNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
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
        <button
          className={styles.btnRight}
          onClick={() => slider?.current?.slickPrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
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
        <div className={styles.text}>
          <h4>{props.data.name}</h4>
          <h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <p>{props.data.adresse}</p>
          </h5>
          <div className={styles.rating}>
            <Rating
              readonly
              ratingValue={50}
              size={12}
              fillColor="#d8c54e"
              emptyColor="#cccccc"
            />
            <p>{props.data.avis} avis</p>
          </div>
          <Link href={"/reservation/" + props.data.id} key={props.data.id}>
            <button
              type="submit"
              className={styles.rdv}
              onClick={customHandleClick}
            >
              Prendre RDV
            </button>
          </Link>
        </div>
      </div>
      <div>
        <AnimateHeight duration={400} height={height}>
          <div style={{ paddingLeft: 20 }}>
            <h3 className={styles.titleDesc}>
              En savoir plus sur {props.data.name}
            </h3>
            <p className={styles.desc}>{props.data.description}</p>
          </div>
        </AnimateHeight>
      </div>

      <div
        className={styles.moreInfo}
        onClick={() => {
          setHeight(height === 0 ? "auto" : 0);
        }}
      >
        <p>Plus d&apos;informations</p>
        <svg
          style={style}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M8.705 6.705a.998.998 0 0 0 0 1.41L12.58 12l-3.876 3.884a.998.998 0 0 0 1.411 1.411L15.41 12l-5.295-5.295a.997.997 0 0 0-1.41 0z"
          ></path>
          <use transform="matrix(0 1 1 0 -.295 .295)"></use>
        </svg>
      </div>

      <style jsx global>{`
        .slick-dots {
          bottom: 7px;
        }
        .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
          // font-size: 12px;
        }
        .slick-dots li button:before {
          font-size: 8px;
          color: white;
          opacity: 0.5;
        }
        .slick-prev:before,
        .slick-next:before {
          display: none;
          visible: none;
        }
        .slick-arrow slick-next {
          display: none;
          visible: none;
        }
      `}</style>
    </article>
  );
}
