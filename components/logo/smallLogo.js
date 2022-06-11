import React from "react";
import Link from "next/link";
import style from "./smallLogo.module.css";
function LogoSmall(props) {
  return (
    <>
      <div
        itemType="https://schema.org/Organization"
        style={{ width: "100px" }}
      >
        <Link href="/">
          <a style={{ textDecoration: "none" }}>
            <strong>
              <span className={style.main}>
                N{" "}
                <span className={style.a}>
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
      <style>{styles}</style>
    </>
  );
}

export default LogoSmall;
