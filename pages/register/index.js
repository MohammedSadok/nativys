import "react-phone-input-2/lib/style.css";
import styles from "./register.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/general/header/header";
import Footer from "../../components/general/footer/footer";
import Input from "../../components/general/input/Input";
import PhoneInput from "react-phone-input-2";
import NewAccount from "../../services/newAccount";
import Link from "next/link";
import Loading from "../../components/general/loading";
export default function Register() {
  const [inputs, setInputs] = useState({
    prenom: "",
    nom: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
    langue: "fr",
    genre: "",
  });
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [textError, setTextError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };
  const validate = async () => {
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }
    if (!inputs.prenom) {
      handleError("Please input prenom", "prenom");
      isValid = false;
    }
    if (!inputs.nom) {
      handleError("Please input nom", "nom");
      isValid = false;
    }
    if (!inputs.genre) {
      isValid = false;
    }
    if (!inputs.phone) {
      isValid = false;
      setTextError("Please input phone number");
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (!inputs.confirm_password) {
      handleError("Please input password Cofirmation", "confirm_password");
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError("Min password length of 8", "password");
      isValid = false;
    }
    if (inputs.password != inputs.confirm_password) {
      handleError(
        "password and confirm password do not match",
        "confirm_password"
      );
      isValid = false;
    }
    if (isValid) {
      setLoading(true);
      const res = await NewAccount(inputs);
      setTextError(res.errortext);
      setLoading(false);
      if (!res.errortext) {
        router.push("../check");
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
    <div className={styles.section}>
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
          <h3>S&apos;identifier avec un profil existant </h3>
          <div className={styles.login}>
            <p>Vous avez déjà utilisé Nativys ? </p>
            <Link href="/login">
              <a> Cliquer ici</a>
            </Link>
          </div>
          <p>ou</p>
          <div className={styles.form}>
            <h3>Créer un profil NATIVYS </h3>
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
              onFocus={() => handleError(null, "prenom")}
              error={errors.prenom}
              placeholder={"Prenom(*)"}
              name={"prenom"}
              value={inputs.prenom}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="gray"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              }
            />
            <Input
              onChangeText={handleOnchange}
              onFocus={() => handleError(null, "nom")}
              error={errors.nom}
              placeholder={"Nom(*)"}
              name={"nom"}
              value={inputs.nom}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="gray"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              }
            />

            <div style={{ marginBottom: "15px" }}>
              <label style={{ marginRight: "10px" }}>
                <input
                  style={{ color: "red", marginRight: "5px" }}
                  type="radio"
                  name="genre"
                  value="Homme"
                  onChange={handleOnchange}
                />
                <span style={{ fontSize: "0.9em" }}>Homme</span>
              </label>
              <label style={{ marginRight: "10px" }}>
                <input
                  style={{ color: "red", marginRight: "5px" }}
                  type="radio"
                  name="genre"
                  value="Femme"
                  onChange={handleOnchange}
                />
                <span style={{ fontSize: "0.9em" }}>Femme</span>
              </label>
            </div>

            <div className={styles.phone}>
              <PhoneInput
                country={"ma"}
                value={inputs.phone}
                onChange={(phone) =>
                  setInputs((prevUser) => {
                    return {
                      ...prevUser,
                      ["phone"]: phone,
                    };
                  })
                }
                inputStyle={{ width: "99%", height: "40px" }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="gray"
                viewBox="0 0 16 16"
                className={styles.phoneIcon}
              >
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </div>
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
              placeholder={"Mot de pass(*)"}
              password={true}
              name={"password"}
              value={inputs.password}
            />
            <Input
              onChangeText={handleOnchange}
              onFocus={() => handleError(null, "confirm_password")}
              error={errors.confirm_password}
              placeholder={"Confirmation de mot de pass(*)"}
              password={true}
              name={"confirm_password"}
              value={inputs.confirm_password}
            />
            <div className={styles.inputCheck}>
              <input
                type="checkbox"
                name="acceptsConditions"
                style={{ transform: "scale(1.1)" }}
                checked={isChecked}
                onChange={handleOnChange}
              />
              <span className={styles.spnCheck}>
                J&apos;accepte les
                <Link href="/cgu">
                  <a
                    style={{
                      color: "#000",
                      textDecoration: "underline",
                      margin: "0 3px",
                    }}
                    target="_blank"
                  >
                    CGU
                  </a>
                </Link>
                de NATIVYS.
              </span>
            </div>
            <button
              className={isChecked ? styles.btn : styles.btnDisabled}
              onClick={validate}
              disabled={!isChecked}
            >
              Creer mon compte
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
