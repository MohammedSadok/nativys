import styles from "./check.module.css";
import Header from "../../components/general/header/header";
import Footer from "../../components/general/footer/footer";
import React, { useState } from "react";
import Input from "../../components/general/input/Input";
import Link from "next/link";
import "react-phone-input-2/lib/style.css";
import checkCode from "../../services/checkCode";
export default function Check() {
  const [inputs, setInputs] = useState({
    email: "",
    code: "",
  });
  const [errors, setErrors] = useState({});
  const [textError, setTextError] = useState("");
  const validate = async () => {
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }
    if (!inputs.code) {
      handleError("Please input code de validation", "code");
      isValid = false;
    }
    if (isValid) {
      const res = await checkCode(inputs);
      setTextError(res.errortext);
      if (!res.errortext) {
        console.log("hello");
      }
    }
  };
  function handleOnchange(event) {
    setInputs((prevUser) => {
      return { ...prevUser, [event.target.name]: event.target.value };
    });
  }

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <div className={styles.section} id="main">
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h3>Validation compte NATIVYS</h3>
          <div className={styles.form}>
            <h3>Validation de compte</h3>
            <p>
              Un code de validation a été envoyé dans votre boite mail ou votre
              téléphone
            </p>
            <p
              style={{
                color: "red",
                textAlign: "left",
                fontSize: 14,
                marginBottom: 10,
                marginTop: 0,
              }}
            >
              {textError}
            </p>
            <Input
              onChangeText={handleOnchange}
              onFocus={() => handleError(null, "email")}
              error={errors.email}
              placeholder={"Email(*)"}
              name={"email"}
              value={inputs.email}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#979797"
                    fillRule="evenodd"
                    d="M19 8.714L12 13 5 8.714V7l7 4.286L19 7v1.714zM19.2 5H4.8C3.801 5 3 5.779 3 6.75v10.5c0 .966.806 1.75 1.8 1.75h14.4c.994 0 1.8-.784 1.8-1.75V6.75C21 5.779 20.19 5 19.2 5z"
                  ></path>
                </svg>
              }
            />
            <Input
              onChangeText={handleOnchange}
              onFocus={() => handleError(null, "code")}
              error={errors.code}
              placeholder={"Code de validation(*)"}
              name={"code"}
              value={inputs.code}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#979797"
                    fillRule="evenodd"
                    d="M19 8.714L12 13 5 8.714V7l7 4.286L19 7v1.714zM19.2 5H4.8C3.801 5 3 5.779 3 6.75v10.5c0 .966.806 1.75 1.8 1.75h14.4c.994 0 1.8-.784 1.8-1.75V6.75C21 5.779 20.19 5 19.2 5z"
                  ></path>
                </svg>
              }
            />

            <button className={styles.btn} onClick={validate}>
              Envoyer
            </button>
            <a href="#" className={styles.sidentifier}>
              S'identifier
            </a>
          </div>
          <p>ou</p>
          <h3 style={{ marginTop: "5px" }}>Inscription</h3>
          <div className={styles.login}>
            <p>Nouveau sur Nativys ? </p>
            <Link href="../register">
              <a>Cliquer ici</a>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
