import React from "react";
import Link from "next/link";
import style from "./logowhite.module.css";
function Logowhite(props) {
  return (
    <>
      <div itemType="https://schema.org/Organization">
        <Link href="/">
          <a style={{ textDecoration: "none" }}>
            <strong>
              <span className={style.main}>
                N
                <span className={style.a}>
                  {" "}
                  A
                  <span className={style.t}>
                    T<span className={style.inner}> I V Y S</span>
                  </span>
                </span>
              </span>
            </strong>
          </a>
        </Link>
      </div>
    </>
  );
}

const styles = `

`;

export default Logowhite;
