import styles from "./star.module.css";
import { Marker, InfoWindow } from "@react-google-maps/api";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
export default function Star(props) {
  const [selectedCenter, setSelectedCenter] = useState(false);
  const handleClick = (key) => {
    setSelectedCenter(false);
    console.log(key);
  };
  return (
    <Marker
      onClick={() => {
        setSelectedCenter(!selectedCenter);
      }}
      position={props.pos}
      icon={{
        path: "M12 2L9.64 9.639H2l6.18 4.721L5.82 22 12 17.278l6.18 4.724-2.361-7.64 6.18-4.722H14.36z",
        fillColor: "orange",
        fillOpacity: 0.8,
        scale: 1,
        strokeColor: "orange",
        strokeWeight: 2,
      }}
    >
      {selectedCenter ? (
        <InfoWindow
          position={props.pos}
          onCloseClick={() => {
            handleClick(1);
          }}
        >
          <div className={styles.info}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#d8c54e"
                fillRule="evenodd"
                d="M11.989 12c.416 0 .803-.1 1.16-.3.356-.201.638-.47.847-.806.208-.336.312-.705.312-1.105 0-.401-.104-.773-.312-1.117a2.275 2.275 0 0 0-.848-.816c-.356-.2-.743-.3-1.16-.3a2.3 2.3 0 0 0-1.984 1.116 2.116 2.116 0 0 0-.312 1.117c0 .615.223 1.137.67 1.567.445.43.988.644 1.627.644zM12 4c1.1 0 2.11.252 3.03.757a5.887 5.887 0 0 1 2.166 2.037c.536.867.804 1.818.804 2.853 0 .79-.206 1.695-.619 2.717-.357.867-.852 1.659-1.484 2.668a37.066 37.066 0 0 1-1.794 2.503 30.562 30.562 0 0 1-1.484 1.786L12 20l-.619-.68a30.562 30.562 0 0 1-1.484-1.785 37.066 37.066 0 0 1-1.794-2.503c-.632-1.009-1.127-1.801-1.484-2.668C6.206 11.342 6 10.436 6 9.647c0-1.035.268-1.986.804-2.853A5.887 5.887 0 0 1 8.97 4.757 6.205 6.205 0 0 1 12 4z"
              ></path>
            </svg>
            <h4>{props.name}</h4>
            <Rating
              readonly
              ratingValue={80}
              size={13}
              fillColor="#d8c54e"
              emptyColor="#cccccc"
            />
            <p>{props.tel}</p>
            <p>{props.location}</p>
          </div>
        </InfoWindow>
      ) : null}
    </Marker>
  );
}
