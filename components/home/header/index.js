import styles from "./header.module.css";
import Link from "next/link";
import React, { useState } from "react";
import Header from "../../general/header/header";
import Logowhite from "../../logo/logowhite";
export default function HeaderHome() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <div className={styles.section} id="main">
      <div id="mySidebar" className={styles.sidebar}>
        <Link href={"/a_propos"}>Qui somme-nous ?</Link>
        <div className={styles.listContainer}>
          <div>
            <Link href={"/coiffeurs"} key={"coiffeurs"}>
              Coiffeurs
            </Link>
            <Link
              href={"/instituts_de_beaute"}
              key={"instituts_de_beaute"}
            >
              institus de beauté
            </Link>
            <Link href={"/barbiers"} key={"barbiers"}>
              barbiers
            </Link>
            <Link href={"/spa"} key={"spa"}>
              spa
            </Link>
          </div>
          <div>
            <Link href={"/inscrivez-etablissement"}>
              ajouter votre établissement
            </Link>
            <Link href={"/moncompte"}>mon compte</Link>
          </div>
        </div>
      </div>
      <div className={styles.header2}>
        <Header />
      </div>
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Logowhite />
          </div>
          <nav className={styles.navbar}>
            <a>Qui somme-nous ?</a>
            <div className={styles.nav_nav}>
              <Link href={"/coiffeurs"} key={"coiffeurs"}>
                Coiffeurs
              </Link>
              <Link
                href={"/instituts_de_beaute"}
                key={"instituts_de_beaute"}
              >
                institus de beauté
              </Link>
              <Link href={"/barbiers"} key={"barbiers"}>
                barbiers
              </Link>
              <Link href={"/spa"} key={"spa"}>
                spa
              </Link>
            </div>
            <Link href={"/inscrivez-etablissement"}>
              <a>Inscrivez votre établissement</a>
            </Link>
          </nav>
        </div>
        <div className={styles.icons}>
          <div className={styles.dropDownContainer}>
            <svg
              onClick={toggling}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              height="24"
              x="0"
              y="0"
              color="white"
            >
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
            </svg>
            {isOpen && (
              <div>
                <lu className={styles.dropDownList}>
                  <li>FR</li>
                  <li>EN</li>
                </lu>
              </div>
            )}
          </div>

          <Link href="/moncompte">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                x="0"
                y="0"
                color="#d8c54e"
                fill="#d8c54e"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Réservez votre moment bien être, rien que pour vous !
        </h1>
        <div className={styles.form}>
          <div className={styles.inputContainer}>
            <div className={styles.boxIconRadius}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#d7d3cf"
                  fillRule="evenodd"
                  d="M15.579 14.557L20 18.978 18.978 20l-4.421-4.421a6.5 6.5 0 1 1 1.022-1.022zm-5.079.999a5.056 5.056 0 1 0 0-10.112 5.056 5.056 0 0 0 0 10.112z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="first"
              name="first"
              placeholder="Nom du salon, prestations"
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.boxIcon}>
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
            </div>
            <input
              type="text"
              id="last"
              name="last"
              placeholder="Où (Adresse,Ville...)"
              className={styles.input}
            />
            <button type="submit" className={styles.search_btn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M15.579 14.557L20 18.978 18.978 20l-4.421-4.421a6.5 6.5 0 1 1 1.022-1.022zm-5.079.999a5.056 5.056 0 1 0 0-10.112 5.056 5.056 0 0 0 0 10.112z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
