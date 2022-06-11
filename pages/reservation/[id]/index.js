import styles from "../../../styles/reservation.module.css";
import Header from "../../../components/general/header/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState, useRef, useEffect } from "react";
import Categorie from "../../../components/categorie/categorie";
import { Rating } from "react-simple-star-rating";
import Star from "../../../components/star/star";
import getOneInstitut from "../../../services/getOneInstitut";
import axios from "axios";
import Router from "next/router";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "100%",
};
export const getServerSideProps = async (context) => {
  const id = context.params.id;
  return {
    props: { id: id },
  };
};
const Reservation = ({ id }) => {
  const [value, setValue] = useState(false);
  const [temp, setTemp] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  let link = useRef();
  useEffect(() => {
    const fetchData = async () => {
      const saved = localStorage.getItem("institue");
      if (saved != null && JSON.parse(saved).id == id) {
        const data = JSON.parse(saved);
        setValue(data);
        link.current =
          "https://www.google.com/maps/search/?api=1&query=" +
          data.latitude +
          "," +
          data.longitude;
        setImages([
          data.photo1,
          data.photo2,
          data.photo3,
          data.photo4,
          data.photo5,
        ]);
      } else {
        console.log("not saved");
        const response = await getOneInstitut(id);
        setValue(response.data.institut);
        link.current =
          "https://www.google.com/maps/search/?api=1&query=" +
          response.data.institut.latitude +
          "," +
          response.data.institut.longitude;
        setImages([
          response.data.institut.photo1,
          response.data.institut.photo2,
          response.data.institut.photo3,
          response.data.institut.photo4,
          response.data.institut.photo5,
        ]);
        localStorage.setItem(
          "institue",
          JSON.stringify(response.data.institut)
        );
      }
    };
    fetchData();
    const timer = setTimeout(function () {
      setTemp(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [id]);
  const slider = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };
  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className={styles.section} id="main">
      <div id="mySidebar" className={styles.sidebar}>
        <a href="#">Qui somme-nous ?</a>
        <div className={styles.listContainer}>
          <div style={{ width: "100%" }}>
            <a href="#">Coiffeurs</a>
            <a href="#">institus de beauté</a>
            <a href="#">barbiers</a>
            <a href="#">spa</a>
          </div>
          <div style={{ width: "100%" }}>
            <a href="#">ajouter votre établissement</a>
            <a href="#">mon compte</a>
          </div>
        </div>
      </div>
      <Header />
      <div className={styles.mainContainer}>
        <main className={styles.main}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>
                {value.name}
                <span
                  onClick={() =>
                    divRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  (Savoir plus)
                </span>
              </h1>
              <div className={styles.ratingContainer}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#d7d3cf"
                      fillRule="evenodd"
                      d="M11.989 12c.416 0 .803-.1 1.16-.3.356-.201.638-.47.847-.806.208-.336.312-.705.312-1.105 0-.401-.104-.773-.312-1.117a2.275 2.275 0 0 0-.848-.816c-.356-.2-.743-.3-1.16-.3a2.3 2.3 0 0 0-1.984 1.116 2.116 2.116 0 0 0-.312 1.117c0 .615.223 1.137.67 1.567.445.43.988.644 1.627.644zM12 4c1.1 0 2.11.252 3.03.757a5.887 5.887 0 0 1 2.166 2.037c.536.867.804 1.818.804 2.853 0 .79-.206 1.695-.619 2.717-.357.867-.852 1.659-1.484 2.668a37.066 37.066 0 0 1-1.794 2.503 30.562 30.562 0 0 1-1.484 1.786L12 20l-.619-.68a30.562 30.562 0 0 1-1.484-1.785 37.066 37.066 0 0 1-1.794-2.503c-.632-1.009-1.127-1.801-1.484-2.668C6.206 11.342 6 10.436 6 9.647c0-1.035.268-1.986.804-2.853A5.887 5.887 0 0 1 8.97 4.757 6.205 6.205 0 0 1 12 4z"
                    ></path>
                  </svg>
                  <a href={link.current}>{value.adresse}</a>
                </div>
                <div className={styles.rating}>
                  <Rating
                    readonly
                    ratingValue={50}
                    size={16}
                    fillColor="#d8c54e"
                    emptyColor="#cccccc"
                  />
                  <p>2 avis</p>
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z" />
                </svg>
                <p>Offrire</p>
              </button>
              <button
                onClick={() =>
                  divRef2.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                Prendre RDV
              </button>
            </div>
          </div>
          <div className={styles.imagesContainer}>
            <Slider ref={slider} {...settings} className={styles.images}>
              {images.length > 0 &&
                images.map((item) => {
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
          </div>
          <div className={styles.reserve} ref={divRef2}>
            <h1>
              Faites le choix d&apos;être dans de bonnes mains chez {value.name}
            </h1>
            <div className={styles.dataContainer}>
              <section>
                {value &&
                  value.categories.map((item) => {
                    return (
                      <Categorie
                        data={item}
                        key={item.id}
                        id={value.id}
                        type={true}
                      />
                    );
                  })}
              </section>
              <aside>
                <div className={styles.hours}>
                  <h3>HORAIRES D&apos;OUVERTURES</h3>
                  <ul>
                    {value &&
                      value.heure_ouvertures.map((item) => {
                        return (
                          <li key={item.code}>
                            <span>{item.name}</span>
                            <span>
                              {item.start}-{item.end}
                            </span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
          <footer className={styles.footer} ref={divRef}>
            <h3>Plus d&apos;informations sur {value.name}</h3>
            <div className={styles.mapContainer}>
              <div className={styles.map}>
                <LoadScript googleMapsApiKey="AIzaSyBLFEpEUu-hhvrAkRuOBn80uwOPhgGNSAs">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{
                      lat: value.latitude,
                      lng: value.longitude,
                    }}
                    zoom={15}
                  >
                    {temp && (
                      <Star
                        pos={{
                          lat: value.latitude,
                          lng: value.longitude,
                        }}
                        name={value.name}
                        location={value.adresse}
                        tel={value.telephone1}
                      />
                    )}
                  </GoogleMap>
                </LoadScript>
              </div>
              <div className={styles.ratingFooter}>
                <div className={styles.noteContainer}>
                  <div className={styles.note}>
                    <p>Note</p>
                    <p>0</p>
                  </div>
                  <div className={styles.noteRating}>
                    <h5>Avis clients</h5>
                    <div>
                      <span>accueil</span>
                      <Rating
                        readonly
                        ratingValue={80}
                        size={11}
                        fillColor="#d8c54e"
                        emptyColor="#cccccc"
                      />
                    </div>
                    <div>
                      <span>Cadre&amp;ambiance</span>
                      <Rating
                        readonly
                        ratingValue={80}
                        size={11}
                        fillColor="#d8c54e"
                        emptyColor="#cccccc"
                      />
                    </div>
                    <div>
                      <span>Propreté</span>
                      <Rating
                        readonly
                        ratingValue={80}
                        size={11}
                        fillColor="#d8c54e"
                        emptyColor="#cccccc"
                      />
                    </div>
                    <div>
                      <span>Qualité de la prestation</span>
                      <Rating
                        readonly
                        ratingValue={80}
                        size={11}
                        fillColor="#d8c54e"
                        emptyColor="#cccccc"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.pageContainer}>
                  <div>
                    <svg
                      style={{ transform: "rotate(180deg)" }}
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
                    <span>Page précédente</span>
                  </div>
                  <div>
                    <span>Page suivante</span>
                    <svg
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
                </div>
              </div>
            </div>
            <footer href="#" className={styles.linkToLocation}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#d7d3cf"
                  fillRule="evenodd"
                  d="M11.989 12c.416 0 .803-.1 1.16-.3.356-.201.638-.47.847-.806.208-.336.312-.705.312-1.105 0-.401-.104-.773-.312-1.117a2.275 2.275 0 0 0-.848-.816c-.356-.2-.743-.3-1.16-.3a2.3 2.3 0 0 0-1.984 1.116 2.116 2.116 0 0 0-.312 1.117c0 .615.223 1.137.67 1.567.445.43.988.644 1.627.644zM12 4c1.1 0 2.11.252 3.03.757a5.887 5.887 0 0 1 2.166 2.037c.536.867.804 1.818.804 2.853 0 .79-.206 1.695-.619 2.717-.357.867-.852 1.659-1.484 2.668a37.066 37.066 0 0 1-1.794 2.503 30.562 30.562 0 0 1-1.484 1.786L12 20l-.619-.68a30.562 30.562 0 0 1-1.484-1.785 37.066 37.066 0 0 1-1.794-2.503c-.632-1.009-1.127-1.801-1.484-2.668C6.206 11.342 6 10.436 6 9.647c0-1.035.268-1.986.804-2.853A5.887 5.887 0 0 1 8.97 4.757 6.205 6.205 0 0 1 12 4z"
                ></path>
              </svg>
              <a href={link.current}>{value.adresse}</a>
            </footer>
            <p className={styles.description}>&quot;{value.description}&quot;</p>
          </footer>
        </main>
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
    </div>
  );
};
export default Reservation;
