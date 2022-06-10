import styles from "./rdvPasser.module.css";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import Link from "next/link";
const RdvPasser = (props) => {
  const [height, setHeight] = useState(0);
  const style = {
    transform: height ? "rotate(-90deg)" : "rotate(90deg)",
    transition: "transform 300ms ease",
  };
  return (
    <div className={styles.item}>
      <h5>
        {props.date.day +
          " " +
          props.date.day_num +
          " " +
          props.date.month +
          ". " +
          props.hour.heure +
          ":" +
          props.hour.minute}
      </h5>
      <div className={styles.data}>
        <a>{props.institut}</a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#979797"
              fillRule="evenodd"
              d="M11.989 12c.416 0 .803-.1 1.16-.3.356-.201.638-.47.847-.806.208-.336.312-.705.312-1.105 0-.401-.104-.773-.312-1.117a2.275 2.275 0 0 0-.848-.816c-.356-.2-.743-.3-1.16-.3a2.3 2.3 0 0 0-1.984 1.116 2.116 2.116 0 0 0-.312 1.117c0 .615.223 1.137.67 1.567.445.43.988.644 1.627.644zM12 4c1.1 0 2.11.252 3.03.757a5.887 5.887 0 0 1 2.166 2.037c.536.867.804 1.818.804 2.853 0 .79-.206 1.695-.619 2.717-.357.867-.852 1.659-1.484 2.668a37.066 37.066 0 0 1-1.794 2.503 30.562 30.562 0 0 1-1.484 1.786L12 20l-.619-.68a30.562 30.562 0 0 1-1.484-1.785 37.066 37.066 0 0 1-1.794-2.503c-.632-1.009-1.127-1.801-1.484-2.668C6.206 11.342 6 10.436 6 9.647c0-1.035.268-1.986.804-2.853A5.887 5.887 0 0 1 8.97 4.757 6.205 6.205 0 0 1 12 4z"
            ></path>
          </svg>
          <span>{props.location}</span>
        </a>
        <div className={styles.btnContainer}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                fillRule="evenodd"
                d="M11.623 1.75a.625.625 0 0 0-.627.62v1.316A5.32 5.32 0 0 0 7 1.874c-2.9 0-5.25 2.323-5.25 5.188C1.75 9.927 4.1 12.25 7 12.25c1.88 0 3.636-1.007 4.56-2.633a.626.626 0 0 0-.235-.852.642.642 0 0 0-.862.233 3.993 3.993 0 0 1-3.479 1.998c-2.21 0-3.996-1.766-3.996-3.95C2.988 4.863 4.79 3.113 7 3.113c1.191 0 2.304.526 3.056 1.41H8.818a.625.625 0 0 0-.627.619c0 .34.282.62.627.62h2.805a.625.625 0 0 0 .627-.62V2.369c0-.34-.282-.619-.627-.619z"
              ></path>
            </svg>
            <span>
              <Link href={"/reservation/"+props.institut_id+"/confirmation/"+props.id}>
                Reprendre RDV
              </Link>
            </span>
          </button>
          <button
            onClick={() => {
              setHeight(height === 0 ? "auto" : 0);
            }}
          >
            <span>Plus de details</span>
            <svg
              style={style}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M8.705 6.705a.998.998 0 0 0 0 1.41L12.58 12l-3.876 3.884a.998.998 0 0 0 1.411 1.411L15.41 12l-5.295-5.295a.997.997 0 0 0-1.41 0z"
              ></path>
              <use transform="matrix(0 1 1 0 -.295 .295)"></use>
            </svg>
          </button>
        </div>
        <AnimateHeight duration={400} height={height}>
          <div className={styles.more}>
            <p>{props.name}</p>
            <p>{props.duration + " - " + props.price} MAD</p>
          </div>
        </AnimateHeight>
      </div>
    </div>
  );
};
export default RdvPasser;
