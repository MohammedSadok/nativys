import Logo from "../../logo/Logo";
import styles from "./header.module.css";
import Link from "next/link";
export default function Header() {
  function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("show_SM").style.display = "none";
    document.getElementById("hide_SM").style.display = "block";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("show_SM").style.display = "block";
    document.getElementById("hide_SM").style.display = "none";
  }
  return (
    <div className={styles.section} id="main">
      <div id="mySidebar" className={styles.sidebar}>
        <Link href={"/a_propos"}>Qui somme-nous ?</Link>

        <div className={styles.listContainer}>
          <div>
            <Link href={"/" + "coiffeurs"} key={"coiffeurs"}>
              Coiffeurs
            </Link>
            <Link
              href={"/" + "instituts_de_beaute"}
              key={"instituts_de_beaute"}
            >
              institus de beauté
            </Link>
            <Link href={"/" + "barbiers"} key={"barbiers"}>
              barbiers
            </Link>
            <Link href={"/" + "spa"} key={"spa"}>
              spa
            </Link>
          </div>
          <div>
            <Link href={"/inscrivez-etablissement"}>
              <a>ajouter votre établissement</a>
            </Link>
            <Link href={"/moncompte"}>
              <a>mon compte</a>
            </Link>
          </div>
        </div>
      </div>
      <header className={styles.header2}>
        <button onClick={openNav}>
          <svg
            className={styles.svg}
            id="show_SM"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M3 16h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V6z"
            ></path>
          </svg>
        </button>
        <button id="hide_SM" className={styles.closebtn} onClick={closeNav}>
          ×
        </button>
        <Logo />
        <a
          // href="https://www.facebook.com/nativysofficiel"
          target="_blank"
          rel="noreferrer"
        >
          <Link href="/login">
            <svg
              className={styles.svg}
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
          </Link>
        </a>
      </header>
    </div>
  );
}
