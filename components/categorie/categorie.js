import styles from "./categorie.module.css";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import Link from "next/link";
export default function Categorie(props) {
  const [height, setHeight] = React.useState(0);

  const style = {
    transform: height ? "rotate(-90deg)" : "",
    transition: "transform 300ms ease",
  };
  const text = !height
    ? "Voir plus de prestations"
    : "Voir moins de prestations";
  return (
    <div className={styles.categorie}>
      <h4>{props.data.name}</h4>
      <ul className={styles.ctgList}>
        {props.data.prestations.slice(0, 3).map((item) => {
          {
            return (
              <li key={item.id}>
                <span>{item.name}</span>
                <div className={styles.btnContainer}>
                  {item.prix_ttc ? (
                    <span>{item.prix_ttc} MAD</span>
                  ) : (
                    <span>
                      àpartir de {item.a_partir_de} MAD Jusqu&apos;à {item.jusqu_a}{" "}
                      MAD
                    </span>
                  )}
                  {props.type ? (
                    <Link
                      href={{
                        pathname:
                          "/reservation/" +
                          props.id +
                          "/confirmation/" +
                          item.id,
                      }}
                      key={props.data.id}
                    >
                      <button>Choisir</button>
                    </Link>
                  ) : (
                    <button
                      onClick={() =>
                        props.handleClick({
                          id: item.id,
                          text: item.name,
                          avec: null,
                        })
                      }
                    >
                      Choisir
                    </button>
                  )}
                </div>
              </li>
            );
          }
        })}
      </ul>
      {props.data.prestations.length > 3 && (
        <>
          <AnimateHeight
            // id="example-panel"
            duration={400}
            height={height} // see props documentation below
          >
            <ul className={styles.ctgList}>
              {props.data.prestations.slice(3).map((item) => {
                {
                  return (
                    <li key={item.id}>
                      <span>{item.name}</span>
                      <div className={styles.btnContainer}>
                        {item.prix_ttc ? (
                          <span>{item.prix_ttc} MAD</span>
                        ) : (
                          <span>
                            àpartir de {item.a_partir_de} MAD Jusqu&apos;à{" "}
                            {item.jusqu_a} MAD
                          </span>
                        )}
                        {props.type ? (
                          <Link
                            href={{
                              pathname:
                                "/reservation/" +
                                props.id +
                                "/confirmation/" +
                                item.id,
                            }}
                            key={props.data.id}
                          >
                            <button>Choisir</button>
                          </Link>
                        ) : (
                          <button
                            onClick={() =>
                              props.handleClick({
                                id: item.id,
                                text: item.name,
                                avec: "",
                              })
                            }
                          >
                            Choisir
                          </button>
                        )}
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </AnimateHeight>
          <div
            className={styles.moreInfo}
            onClick={() => {
              setHeight(height === 0 ? "auto" : 0);
            }}
          >
            <p>{text}</p>
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
        </>
      )}
    </div>
  );
}
