import styles from "./login.module.css";
import React, { useState } from "react";
import Input from "../../components/general/input/Input";
import Header from "../../components/general/header/header";
import Footer from "../../components/general/footer/footer";
import login from "../../services/login";
import { useRouter } from "next/router";
import Loading from "../../components/general/loading";
import Link from "next/link";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
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
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (isValid) {
      setLoading(true);
      const res = await login(inputs);
      localStorage.setItem("user", JSON.stringify(res.data));
      setLoading(false);
      router.push({
        pathname: "/moncompte",
      });
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
      {loading && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}
      <main
        className={styles.main}
        style={{
          opacity: loading ? 0.6 : 1,
          pointerEvents: loading == 0 ? "auto" : "none",
        }}
      >
        <div className={styles.container}>
          <h3 className={styles.h3}>S'identifier avec un profil existant </h3>

          <div className={styles.form}>
            <h3>Merci de vous identifier pour accéder à votre compte </h3>
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
              onFocus={() => handleError(null, "password")}
              error={errors.password}
              placeholder={"Mot de passe(*)"}
              password={true}
              name={"password"}
              value={inputs.password}
            />

            <button className={styles.btn} onClick={validate}>
              je m'identifie
            </button>

            <div className={styles.divmotdepasse}>
              <Link href="/resetPassword">
                <a className={styles.motdepasse}>Mot de passe oublié!</a>
              </Link>
            </div>
          </div>
          <h3 className={styles.h3}>Créer un nouveau profil</h3>
          <div className={styles.div4}>
            Vous êtes un nouveau client sur Nativys ?
            <Link href="/register">
              <a>cliquer ici!</a>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
