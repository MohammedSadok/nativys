import styles from "./resetPassword.module.css";
import React, { useState } from "react";
import Input from "../../components/general/input/Input";
import Footer from "../../components/general/footer/footer";
import Header from "../../components/general/header/header";
import resetPassword from "../../services/resetPassword";
import Link from "next/link";
export default function ResetPassword() {
  const [inputs, setInputs] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});
  const validate = async () => {
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }
    if (isValid) {
      const res = await resetPassword(inputs);
      console.log(res);
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
    <>
      <Header />
      <div className={styles.section} id="main">
        <main className={styles.main}>
          <div className={styles.container}>
            <h3 className={styles.h3}>Réinitialiser </h3>

            <div className={styles.form}>
              <h3 className={styles.h3}>
                Réinitialiser le mot de passe de votre compte
              </h3>
              <h3>
                Entrez l&apos;adresse email associée à votre compte et nous vous
                enverrons un lien pour réinitialiser votre mot de passe.
              </h3>
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
              <button className={styles.btn} onClick={validate}>
                Envoyer
              </button>
              <div className={styles.divmotdepasse}>
                <a className={styles.motdepasse}>Je m&apos;identifie</a>
              </div>
            </div>
            <h3 className={styles.h3}>Créer un nouveau profil</h3>
            <div className={styles.div4}>
              Vous êtes un nouveau client sur Nativys ?<a>cliquer ici!</a>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
