import styles from "./rdv.module.css";
import { useState } from "react";
const RDV = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <img
          alt={props.image}
          src={`https://nativys.com/image-get/${props.image}`}
          className={styles.image}
        />
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.name}>
          <div>
            <h3>{props.institut}</h3>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#d7d3cf"
                  fillRule="evenodd"
                  d="M11.989 12c.416 0 .803-.1 1.16-.3.356-.201.638-.47.847-.806.208-.336.312-.705.312-1.105 0-.401-.104-.773-.312-1.117a2.275 2.275 0 0 0-.848-.816c-.356-.2-.743-.3-1.16-.3a2.3 2.3 0 0 0-1.984 1.116 2.116 2.116 0 0 0-.312 1.117c0 .615.223 1.137.67 1.567.445.43.988.644 1.627.644zM12 4c1.1 0 2.11.252 3.03.757a5.887 5.887 0 0 1 2.166 2.037c.536.867.804 1.818.804 2.853 0 .79-.206 1.695-.619 2.717-.357.867-.852 1.659-1.484 2.668a37.066 37.066 0 0 1-1.794 2.503 30.562 30.562 0 0 1-1.484 1.786L12 20l-.619-.68a30.562 30.562 0 0 1-1.484-1.785 37.066 37.066 0 0 1-1.794-2.503c-.632-1.009-1.127-1.801-1.484-2.668C6.206 11.342 6 10.436 6 9.647c0-1.035.268-1.986.804-2.853A5.887 5.887 0 0 1 8.97 4.757 6.205 6.205 0 0 1 12 4z"
                ></path>
              </svg>
              <span>{props.location}</span>
            </a>
          </div>
          <div className={styles.time}>
            <p>{props.hour.heure + ":" + props.hour.minute}</p>
            <p>
              {props.date.day +
                " " +
                props.date.day_num +
                " " +
                props.date.month}
            </p>
          </div>
        </div>
        <div className={styles.info}>
          <p>{props.name}</p>
          <p>{props.duration + " - " + props.price} MAD</p>
          <div>
            <button className={styles.annuler} onClick={props.handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M6 7h13v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7zm2 2v11h9V9H8zM5 3h4l1-1h5l1 1h4v2H5V3z"
                ></path>
                <path fillRule="evenodd" d="M7 8h11v13H7z"></path>
              </svg>
              <span>Annuler le RDV</span>
            </button>
            <button className={styles.deplacer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <g fillRule="evenodd">
                  <path d="M10.737 4.741l2.028 1.479c.293.211.293.766 0 .977l-2.028 1.479c-.293.211-.67-.053-.67-.502l.001-.597-.15.002a.14.14 0 0 1-.056.012l-5.78-.001.001.61c0 .423-.376.687-.669.476l-2.028-1.48c-.293-.21-.293-.765 0-.976l2.028-1.48c.293-.21.67.053.67.502l-.001.598.148-.001a.14.14 0 0 1 .058-.013l5.78.001-.001-.61c0-.423.376-.687.669-.476z"></path>
                  <path d="M5.108 3.047l1.48-2.028c.21-.293.765-.293.976 0l1.48 2.028c.21.293-.054.67-.503.67l-.597-.002.002.15a.14.14 0 0 1 .012.057l-.001 5.78.61-.001c.423 0 .687.376.476.669l-1.48 2.028c-.21.292-.765.292-.976 0l-1.48-2.028c-.21-.293.054-.67.503-.67l.597.001v-.148a.14.14 0 0 1-.014-.058l.001-5.78-.61.001c-.423 0-.687-.376-.476-.669z"></path>
                </g>
              </svg>
              <span>Deplacer le RDV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RDV;
