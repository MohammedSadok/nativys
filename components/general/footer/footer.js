import Logowhite from "../../logo/logowhite";
import styles from "./footer.module.css";

function AfficherMenu() {
  document.getElementById("menuscroll").style.display = "block";
  document.getElementById("svg1").style.display = "none";
  document.getElementById("svg2").style.display = "block";
}
function CacherMenu() {
  document.getElementById("menuscroll").style.display = "none";
  document.getElementById("svg1").style.display = "block";
  document.getElementById("svg2").style.display = "none";
}
function AfficherMenu1() {
  document.getElementById("menuscroll1").style.display = "block";
  document.getElementById("svg3").style.display = "none";
  document.getElementById("svg4").style.display = "block";
}
function CacherMenu1() {
  document.getElementById("menuscroll1").style.display = "none";
  document.getElementById("svg3").style.display = "block";
  document.getElementById("svg4").style.display = "none";
}
function AfficherMenu2() {
  document.getElementById("menuscroll2").style.display = "block";
  document.getElementById("svg5").style.display = "none";
  document.getElementById("svg6").style.display = "block";
}
function CacherMenu2() {
  document.getElementById("menuscroll2").style.display = "none";
  document.getElementById("svg5").style.display = "block";
  document.getElementById("svg6").style.display = "none";
}
function Afficherlangue() {
  document.getElementById("dropDownList").style.display = "block";
}
function scroll() {
  window.location = "#sectionn";
}

export default function Footer() {
  return (
    <div className={styles.globalDiv}>
      <section className={styles.section1}>
        <Logowhite />

        <div className={styles.svg}>
          <a
            href="https://www.facebook.com/nativysofficiel"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                fillRule="evenodd"
                d="M13.875 5.75a.6.6 0 0 0-.44.186.6.6 0 0 0-.185.439V8.25H17L16.375 12H13.25v10H9.5V12H7V8.25h2.5V6.375c0-.599.117-1.165.352-1.7.22-.533.53-.999.927-1.396a4.26 4.26 0 0 1 1.397-.927A4.18 4.18 0 0 1 13.875 2H17v3.75h-3.125z"
              ></path>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/nativysofficiel/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                fillRule="evenodd"
                d="M12 3.797a214.4 214.4 0 0 0-2.627.01c-.41.006-.882.022-1.416.048a6.359 6.359 0 0 0-1.152.147c-.287.072-.521.14-.703.205-.235.091-.44.195-.616.313-.175.117-.354.26-.537.43-.17.182-.312.36-.43.536-.117.176-.22.381-.312.616a7.722 7.722 0 0 0-.205.703c-.072.286-.114.67-.127 1.152-.026.52-.042.99-.049 1.406-.006.417-.01 1.296-.01 2.637 0 1.328.004 2.2.01 2.617.007.417.023.892.049 1.426.013.482.055.866.127 1.152.072.287.14.521.205.703.091.222.195.424.313.606.117.182.266.358.449.527.169.183.345.332.527.45.182.117.384.22.606.312.182.065.416.133.703.205.286.072.67.114 1.152.127.534.026 1.01.042 1.426.049.416.006 1.289.01 2.617.01 1.341 0 2.217-.004 2.627-.01.41-.007.882-.023 1.416-.049.482-.013.866-.055 1.152-.127.287-.072.521-.14.703-.205.235-.091.44-.195.616-.313a3.57 3.57 0 0 0 .537-.449c.17-.169.312-.345.43-.527.117-.182.22-.39.312-.625.065-.17.133-.397.205-.684.072-.286.12-.677.147-1.172.013-.52.026-.99.039-1.406.013-.416.02-1.289.02-2.617 0-1.341-.007-2.22-.02-2.637-.013-.416-.026-.885-.04-1.406-.026-.495-.074-.885-.146-1.172a6.104 6.104 0 0 0-.205-.683 3.498 3.498 0 0 0-.313-.625 3.18 3.18 0 0 0-.43-.528 4.308 4.308 0 0 0-.536-.43 3.193 3.193 0 0 0-.616-.312 7.722 7.722 0 0 0-.703-.205 6.359 6.359 0 0 0-1.152-.147 43.673 43.673 0 0 0-1.416-.048A214.4 214.4 0 0 0 12 3.797zM12 2c1.354 0 2.246.003 2.676.01.43.006.911.023 1.445.049a8.39 8.39 0 0 1 1.377.166c.384.084.732.185 1.045.302.339.13.651.287.937.47.287.181.567.41.84.683.274.273.502.556.684.85a5.9 5.9 0 0 1 .469.927c.117.313.218.66.302 1.045.085.384.134.843.147 1.377.026.534.042 1.016.049 1.445.006.43.01 1.322.01 2.676s-.004 2.246-.01 2.676c-.007.43-.023.911-.05 1.445a7.316 7.316 0 0 1-.146 1.377 7.702 7.702 0 0 1-.302 1.045c-.13.339-.287.651-.47.937-.181.287-.41.567-.683.84a5.64 5.64 0 0 1-.86.684 5.532 5.532 0 0 1-.917.469c-.313.117-.66.218-1.045.302a8.39 8.39 0 0 1-1.377.166c-.534.026-1.016.043-1.445.05-.43.006-1.322.009-2.676.009s-2.246-.003-2.676-.01c-.43-.006-.911-.023-1.445-.049a8.39 8.39 0 0 1-1.377-.166 7.702 7.702 0 0 1-1.045-.302 5.252 5.252 0 0 1-.937-.47 4.963 4.963 0 0 1-.84-.683 4.963 4.963 0 0 1-.684-.84 5.252 5.252 0 0 1-.469-.937 5.636 5.636 0 0 1-.312-1.045 9.284 9.284 0 0 1-.156-1.377 43.435 43.435 0 0 1-.05-1.445C2.004 14.246 2 13.354 2 12s.003-2.246.01-2.676c.006-.43.023-.911.049-1.445.026-.534.078-.993.156-1.377s.182-.732.312-1.045c.13-.339.287-.651.47-.937.181-.287.41-.567.683-.84.273-.274.553-.502.84-.684.286-.182.598-.338.937-.469.313-.13.66-.234 1.045-.312.384-.078.843-.13 1.377-.156a43.435 43.435 0 0 1 1.445-.05C9.754 2.004 10.646 2 12 2zm0 4.863c.703 0 1.367.137 1.992.41a5.033 5.033 0 0 1 2.735 2.735c.273.625.41 1.289.41 1.992 0 .703-.137 1.367-.41 1.992a5.033 5.033 0 0 1-2.735 2.735c-.625.273-1.289.41-1.992.41a4.916 4.916 0 0 1-1.992-.41 5.033 5.033 0 0 1-2.735-2.735A4.916 4.916 0 0 1 6.863 12c0-.703.137-1.367.41-1.992a5.033 5.033 0 0 1 2.735-2.735A4.916 4.916 0 0 1 12 6.863zm0 8.477a3.22 3.22 0 0 0 2.363-.977A3.22 3.22 0 0 0 15.34 12a3.22 3.22 0 0 0-.977-2.363A3.22 3.22 0 0 0 12 8.66a3.22 3.22 0 0 0-2.363.977A3.22 3.22 0 0 0 8.66 12c0 .924.326 1.712.977 2.363A3.22 3.22 0 0 0 12 15.34zm6.543-8.672c0 .325-.117.605-.352.84-.234.234-.52.351-.859.351-.325 0-.605-.117-.84-.351a1.146 1.146 0 0 1-.351-.84c0-.339.117-.625.351-.86.235-.234.515-.351.84-.351.339 0 .625.117.86.352.234.234.351.52.351.859z"
              ></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/nativys/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"
                fill="#ffffff"
                data-original="#000000"
              ></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="m.396 7.977h4.976v16.023h-4.976z"
                fill="#ffffff"
                data-original="#000000"
              ></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"
                fill="#ffffff"
                data-original="#000000"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.pinterest.com/nativysofficiel/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                fillRule="evenodd"
                d="m12.326 0c-6.579.001-10.076 4.216-10.076 8.812 0 2.131 1.191 4.79 3.098 5.633.544.245.472-.054.94-1.844.037-.149.018-.278-.102-.417-2.726-3.153-.532-9.635 5.751-9.635 9.093 0 7.394 12.582 1.582 12.582-1.498 0-2.614-1.176-2.261-2.631.428-1.733 1.266-3.596 1.266-4.845 0-3.148-4.69-2.681-4.69 1.49 0 1.289.456 2.159.456 2.159s-1.509 6.096-1.789 7.235c-.474 1.928.064 5.049.111 5.318.029.148.195.195.288.073.149-.195 1.973-2.797 2.484-4.678.186-.685.949-3.465.949-3.465.503.908 1.953 1.668 3.498 1.668 4.596 0 7.918-4.04 7.918-9.053-.016-4.806-4.129-8.402-9.423-8.402z"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      <div className={styles.divContainer}>
        <section>
          <div className={styles.menusvg1}>
            <span className={styles.span5}>
              À propos de <span>NATIVYS</span>
            </span>

            <div className={styles.menusvg}>
              <svg
                className={styles.Menu}
                onClick={AfficherMenu}
                id="svg1"
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
              <svg
                className={styles.Menu}
                onClick={CacherMenu}
                id="svg2"
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
            </div>
          </div>
          <div className={styles.section2} id="menuscroll">
            <ul>
              <a>Inscrivez votre établissement </a>
              <a>Qui sommes-nous ?</a>
              <a>Questions fréquentes ? </a>
              <a>Rejoignez-nous </a>
            </ul>
          </div>
        </section>
        <section className={styles.section3}>
          <span>
            <div className={styles.menusvg1}>
              <span className={styles.span5}>Trouvez votre prestation </span>
              <div className={styles.menusvg}>
                <svg
                  className={styles.Menu}
                  onClick={AfficherMenu1}
                  id="svg3"
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
                <svg
                  className={styles.Menu}
                  onClick={CacherMenu1}
                  id="svg4"
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
              </div>
            </div>
          </span>
          <div className={styles.div1}>
            <div className={styles.section2} id="menuscroll1">
              <ul>
                <a>Coiffeurs </a>
                <a>Instituts de Beauté </a>
                <a>Barbiers </a>
                <a>Spa </a>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.section3}>
          <div>
            <span>
              <div className={styles.menusvg1}>
                <span className={styles.span5}>
                  Informations supplémentaires{" "}
                </span>
                <div className={styles.menusvg}>
                  <svg
                    className={styles.Menu}
                    onClick={AfficherMenu2}
                    id="svg5"
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
                  <svg
                    className={styles.Menu}
                    onClick={CacherMenu2}
                    id="svg6"
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
                </div>
              </div>
            </span>
            <div className={styles.div1}>
              <div className={styles.section2} id="menuscroll2">
                <ul>
                  <a href="contact/">Contactez-nous </a>
                  <a href="cgu/">
                    <span>CGU</span>
                  </a>
                  <a href="https://mag.nativys.com/" target="_blank">
                    <span>MAG</span>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section4}>
          <div className={styles.menusvg1}>
            <span className={styles.span5}>Restons connectés </span>
            <div className={styles.menusvg}>
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
            </div>
          </div>

          <div className={styles.svg1}>
            <a
              href="https://www.facebook.com/nativysofficiel"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  fillRule="evenodd"
                  d="M13.875 5.75a.6.6 0 0 0-.44.186.6.6 0 0 0-.185.439V8.25H17L16.375 12H13.25v10H9.5V12H7V8.25h2.5V6.375c0-.599.117-1.165.352-1.7.22-.533.53-.999.927-1.396a4.26 4.26 0 0 1 1.397-.927A4.18 4.18 0 0 1 13.875 2H17v3.75h-3.125z"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/nativysofficiel/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  fillRule="evenodd"
                  d="M12 3.797a214.4 214.4 0 0 0-2.627.01c-.41.006-.882.022-1.416.048a6.359 6.359 0 0 0-1.152.147c-.287.072-.521.14-.703.205-.235.091-.44.195-.616.313-.175.117-.354.26-.537.43-.17.182-.312.36-.43.536-.117.176-.22.381-.312.616a7.722 7.722 0 0 0-.205.703c-.072.286-.114.67-.127 1.152-.026.52-.042.99-.049 1.406-.006.417-.01 1.296-.01 2.637 0 1.328.004 2.2.01 2.617.007.417.023.892.049 1.426.013.482.055.866.127 1.152.072.287.14.521.205.703.091.222.195.424.313.606.117.182.266.358.449.527.169.183.345.332.527.45.182.117.384.22.606.312.182.065.416.133.703.205.286.072.67.114 1.152.127.534.026 1.01.042 1.426.049.416.006 1.289.01 2.617.01 1.341 0 2.217-.004 2.627-.01.41-.007.882-.023 1.416-.049.482-.013.866-.055 1.152-.127.287-.072.521-.14.703-.205.235-.091.44-.195.616-.313a3.57 3.57 0 0 0 .537-.449c.17-.169.312-.345.43-.527.117-.182.22-.39.312-.625.065-.17.133-.397.205-.684.072-.286.12-.677.147-1.172.013-.52.026-.99.039-1.406.013-.416.02-1.289.02-2.617 0-1.341-.007-2.22-.02-2.637-.013-.416-.026-.885-.04-1.406-.026-.495-.074-.885-.146-1.172a6.104 6.104 0 0 0-.205-.683 3.498 3.498 0 0 0-.313-.625 3.18 3.18 0 0 0-.43-.528 4.308 4.308 0 0 0-.536-.43 3.193 3.193 0 0 0-.616-.312 7.722 7.722 0 0 0-.703-.205 6.359 6.359 0 0 0-1.152-.147 43.673 43.673 0 0 0-1.416-.048A214.4 214.4 0 0 0 12 3.797zM12 2c1.354 0 2.246.003 2.676.01.43.006.911.023 1.445.049a8.39 8.39 0 0 1 1.377.166c.384.084.732.185 1.045.302.339.13.651.287.937.47.287.181.567.41.84.683.274.273.502.556.684.85a5.9 5.9 0 0 1 .469.927c.117.313.218.66.302 1.045.085.384.134.843.147 1.377.026.534.042 1.016.049 1.445.006.43.01 1.322.01 2.676s-.004 2.246-.01 2.676c-.007.43-.023.911-.05 1.445a7.316 7.316 0 0 1-.146 1.377 7.702 7.702 0 0 1-.302 1.045c-.13.339-.287.651-.47.937-.181.287-.41.567-.683.84a5.64 5.64 0 0 1-.86.684 5.532 5.532 0 0 1-.917.469c-.313.117-.66.218-1.045.302a8.39 8.39 0 0 1-1.377.166c-.534.026-1.016.043-1.445.05-.43.006-1.322.009-2.676.009s-2.246-.003-2.676-.01c-.43-.006-.911-.023-1.445-.049a8.39 8.39 0 0 1-1.377-.166 7.702 7.702 0 0 1-1.045-.302 5.252 5.252 0 0 1-.937-.47 4.963 4.963 0 0 1-.84-.683 4.963 4.963 0 0 1-.684-.84 5.252 5.252 0 0 1-.469-.937 5.636 5.636 0 0 1-.312-1.045 9.284 9.284 0 0 1-.156-1.377 43.435 43.435 0 0 1-.05-1.445C2.004 14.246 2 13.354 2 12s.003-2.246.01-2.676c.006-.43.023-.911.049-1.445.026-.534.078-.993.156-1.377s.182-.732.312-1.045c.13-.339.287-.651.47-.937.181-.287.41-.567.683-.84.273-.274.553-.502.84-.684.286-.182.598-.338.937-.469.313-.13.66-.234 1.045-.312.384-.078.843-.13 1.377-.156a43.435 43.435 0 0 1 1.445-.05C9.754 2.004 10.646 2 12 2zm0 4.863c.703 0 1.367.137 1.992.41a5.033 5.033 0 0 1 2.735 2.735c.273.625.41 1.289.41 1.992 0 .703-.137 1.367-.41 1.992a5.033 5.033 0 0 1-2.735 2.735c-.625.273-1.289.41-1.992.41a4.916 4.916 0 0 1-1.992-.41 5.033 5.033 0 0 1-2.735-2.735A4.916 4.916 0 0 1 6.863 12c0-.703.137-1.367.41-1.992a5.033 5.033 0 0 1 2.735-2.735A4.916 4.916 0 0 1 12 6.863zm0 8.477a3.22 3.22 0 0 0 2.363-.977A3.22 3.22 0 0 0 15.34 12a3.22 3.22 0 0 0-.977-2.363A3.22 3.22 0 0 0 12 8.66a3.22 3.22 0 0 0-2.363.977A3.22 3.22 0 0 0 8.66 12c0 .924.326 1.712.977 2.363A3.22 3.22 0 0 0 12 15.34zm6.543-8.672c0 .325-.117.605-.352.84-.234.234-.52.351-.859.351-.325 0-.605-.117-.84-.351a1.146 1.146 0 0 1-.351-.84c0-.339.117-.625.351-.86.235-.234.515-.351.84-.351.339 0 .625.117.86.352.234.234.351.52.351.859z"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/nativys/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"
                  fill="#ffffff"
                  data-original="#000000"
                ></path>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m.396 7.977h4.976v16.023h-4.976z"
                  fill="#ffffff"
                  data-original="#000000"
                ></path>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"
                  fill="#ffffff"
                  data-original="#000000"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.pinterest.com/nativysofficiel/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  fillRule="evenodd"
                  d="m12.326 0c-6.579.001-10.076 4.216-10.076 8.812 0 2.131 1.191 4.79 3.098 5.633.544.245.472-.054.94-1.844.037-.149.018-.278-.102-.417-2.726-3.153-.532-9.635 5.751-9.635 9.093 0 7.394 12.582 1.582 12.582-1.498 0-2.614-1.176-2.261-2.631.428-1.733 1.266-3.596 1.266-4.845 0-3.148-4.69-2.681-4.69 1.49 0 1.289.456 2.159.456 2.159s-1.509 6.096-1.789 7.235c-.474 1.928.064 5.049.111 5.318.029.148.195.195.288.073.149-.195 1.973-2.797 2.484-4.678.186-.685.949-3.465.949-3.465.503.908 1.953 1.668 3.498 1.668 4.596 0 7.918-4.04 7.918-9.053-.016-4.806-4.129-8.402-9.423-8.402z"
                ></path>
              </svg>
            </a>
          </div>

          <div className={styles.install}>
            <div>
              <div>
                <a
                  href="https://apps.apple.com/fr/app/nativys/id1575398164"
                  target="_blank"
                >
                  <img
                    height="25px"
                    width="81px"
                    src="https://pilote.nativys.com/images_site_web/badges/appstoreOld.png"
                    alt="App Store"
                  />
                </a>
              </div>
            </div>

            <div>
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.nativys.nativys&amp;gl=MA"
                  target="_blank"
                >
                  <img
                    height="40px"
                    width="93px"
                    src="https://pilote.nativys.com/images_site_web/badges/playstoreOld.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.divFooter}>
        <div className={styles.divFooter1}>
          <section className={styles.section5}>
            <span className={styles.coopyright}>NATIVYS </span>
            <span>©2022</span>
          </section>

          <div className={styles.divLanguage} onClick={Afficherlangue}>
            <div id="dropDownList" className={styles.dropDownList}>
              <div>Choisir votre langue</div>
              <a href="https://www.nativys.com/lang/fr">
                <div>Francais</div>
              </a>
              <a href="https://www.nativys.com/lang/en">
                <div>Anglais</div>
              </a>
            </div>

            <div className={styles.langues}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="23"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
              </svg>

              <span>Français </span>
            </div>

            <span className={styles.divLangue} id="myPopupWeb">
              Choisir votre langue
              <div>
                <a href="https://pilote.nativys.com/lang/fr">
                  <div>Français </div>
                </a>
              </div>
              <div>
                <a href="https://pilote.nativys.com/lang/en">
                  <div>Anglais </div>
                </a>
              </div>
            </span>
          </div>
        </div>
        <section className={styles.scroll} onClick={scroll}>
          <span className={styles.span} id="myBtn">
            Vers le haut{" "}
          </span>
          <p className={styles.svgUp}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              colors="red"
            >
              <path
                fill="#FFF"
                id="a"
                d="M8.705 6.705a.998.998 0 0 0 0 1.41L12.58 12l-3.876 3.884a.997.997 0 1 0 1.41 1.41l5.296-5.294-5.295-5.295a.997.997 0 0 0-1.41 0z"
                fillRule="evenodd"
              ></path>
              <g fill="none" fillRule="evenodd">
                <circle cx="12" cy="12" r="11.5" stroke="#FFF"></circle>
                <use fill="#0D0D0D"></use>
              </g>
            </svg>
          </p>
        </section>
      </div>
    </div>
  );
}

/*$(document).click(function(e) {
	var myPopup = $('#popup2');
	//$('#myPopup')[0].classList.toggle("show");
	if (!myPopup.is(e.target) && myPopup.has(e.target).length === 0) 
	{
		if(myPopup.is(e.target)){
		  alert('ok');
			$('#myPopupWeb')[0].classList.add("show");
		}else{
			$('#myPopupWeb')[0].classList.remove("show");
		}
	}
});
function showLangueListWeb() {
  $('#myPopupWeb')[0].classList.toggle("show");
}*/
