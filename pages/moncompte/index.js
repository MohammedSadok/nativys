import styles from "./moncompte.module.css";
import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/general/header/header";
import RDV from "../../components/rdv/rdv";
import RdvPasser from "../../components/rdvPasser/rdvPasser";
import Input from "../../components/general/input/Input";
import { useRouter } from "next/router";
import getRDV from "../../services/getRDV";
import deleteRDV from "../../services/deleteRDV";
import Loading from "../../components/general/loading";
const MonCompte = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    password: "",
    new_password: "",
    confirm_password: "",
  });
  const [reservations, setReservations] = useState({
    rdv_confirmes: null,
    rdv_passer: null,
    rdv_venir: null,
    rdv_deplaces: null,
  });
  const [nav, setNav] = useState(true);
  const [pwd, setPwd] = useState(false);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState();
  const [modal, setModal] = useState({ loading: false, mod: null });
  useEffect(() => {
    const fetchData = async () => {
      const saved = localStorage.getItem("user");
      if (saved !== null) {
        const data = JSON.parse(saved);
        setUser(data);
        const rdv = await getRDV(data.user.id, data.access_token);
        setReservations({
          rdv_confirmes: rdv.data.rdv_confirmes_data,
          rdv_passer: rdv.data.rdv_passes_data,
          rdv_venir: rdv.data.rdvs_venir_data,
          rdv_deplaces: rdv.data.rdv_deplaces_data,
        });
      } else {
        router.push({
          pathname: "/login",
        });
      }
    };
    fetchData();
  }, [router]);
  const validate = async () => {
    let isValid = true;
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError("Min password length of 8", "password");
      isValid = false;
    }
    if (isValid) {
      setPwd(true);
    }
  };
  const validate_new = async () => {
    let isValid = true;
    if (!inputs.new_password) {
      handleError("Please input password", "new_password");
      isValid = false;
    }
    if (!inputs.confirm_password) {
      handleError("Please input password Cofirmation", "confirm_password");
      isValid = false;
    } else if (inputs.new_password.length < 8) {
      handleError("Min password length of 8", "new_password");
      isValid = false;
    }
    if (inputs.new_password != inputs.confirm_password) {
      handleError(
        "password and confirm password do not match",
        "confirm_password"
      );
      isValid = false;
    }
    if (isValid) {
      setPwd(false);
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
  const logOut = () => {
    localStorage.removeItem("user");
    router.push({
      pathname: "/login",
    });
  };
  async function cancelRDV() {
    const id = modal.mod;
    setModal({
      mod: 0,
      loading: true,
    });
    const res = await deleteRDV(id, user.access_token);
    if (res.data.message == "success") {
      let arr = [];
      reservations.rdv_venir.forEach((item) => {
        if (item.rdv_id != id) {
          newarr.push(item);
        }
      });
      setReservations((prev) => ({
        ...prev,
        rdv_venir: arr,
      }));
    }
    setModal({ loading: false, mod: 0 });
  }
  return (
    <>
      <header>
        <Header />
        <nav className={styles.navBar}>
          <h4
            className={nav ? styles.active : styles.nonActive}
            onClick={() => {
              setNav(!nav);
            }}
          >
            Mes rendez-vous
          </h4>
          <h4
            className={!nav ? styles.active : styles.nonActive}
            onClick={() => {
              setNav(!nav);
            }}
          >
            Mes informations
          </h4>
        </nav>
      </header>
      {nav && (
        <main
          className={styles.main}
          style={{ pointerEvents: modal.mod == 0 ? "auto" : "none" }}
        >
          {modal.loading && (
            <div className={styles.loading}>
              <Loading />
            </div>
          )}
          {modal.mod && (
            <div className={styles.modal}>
              <p>Etes vous sur de vouloir annuler votre rendez-vous </p>
              <div>
                <button onClick={() => cancelRDV()}>Confirmer</button>
                <button
                  onClick={() =>
                    setModal((prev) => ({
                      ...prev,
                      mod: 0,
                    }))
                  }
                >
                  Annuler
                </button>
              </div>
            </div>
          )}
          <section className={styles.section}>
            <h4>Votre rendez-vous est confirmé </h4>
            <h4>Mes rendez-vous</h4>
            {reservations.rdv_venir &&
              reservations.rdv_venir.map((item) => {
                return (
                  <RDV
                    key={item.rdv_id}
                    id={item.rdv_id}
                    institut={item.institut.name}
                    image={item.institut.photo1}
                    location={item.institut.adresse}
                    date={{
                      day: item.day,
                      month: item.month,
                      day_num: item.day_num,
                    }}
                    hour={{ heure: item.heure, minute: item.minute }}
                    name={item.prestations[0].name}
                    duration={item.prestations[0].duree}
                    price={item.prestations[0].prix}
                    handleClick={() =>
                      setModal({ loading: false, mod: item.rdv_id })
                    }
                  />
                );
              })}

            <h4>Mes cartes cadeaux</h4>
          </section>
          <aside className={styles.aside}>
            <h4>Mes render-vous du passer</h4>
            {reservations.rdv_passer &&
              reservations.rdv_passer.map((item) => {
                return (
                  <RdvPasser
                    key={item.rdv_id}
                    id={item.rdv_id}
                    institut_id={item.institut.id}
                    institut={item.institut.name}
                    location={item.institut.adresse}
                    date={{
                      day: item.day,
                      month: item.month,
                      day_num: item.day_num,
                    }}
                    hour={{ heure: item.heure, minute: item.minute }}
                    name={item.prestations[0].name}
                    duration={item.prestations[0].duree}
                    price={item.prestations[0].prix}
                  />
                );
              })}
          </aside>
        </main>
      )}
      {!nav && (
        <main className={styles.info}>
          <div>
            <h4>Mes coordonnées </h4>
            <div className={styles.cord}>
              <input
                type={"text"}
                placeholder={"Prénom"}
                value={user.user.prenom}
              ></input>
              <input
                type={"text"}
                placeholder={"Nom"}
                value={user.user.nom}
              ></input>
              <input
                type={"text"}
                placeholder={"Téléphone"}
                inputMode={"numeric"}
                value={user.user.phone}
              ></input>
              <input type={"email"} placeholder={"Email"}></input>
            </div>
            <h4>Mot de passe </h4>
            <div className={styles.pwd}>
              {!pwd && (
                <>
                  <p>
                    Pour modifier votre mot de passe, veuillez saisir votre mot
                    de passe actuel pour confirmer votre identité.
                  </p>
                  <div className={styles.password}>
                    <Input
                      onChangeText={handleOnchange}
                      onFocus={() => handleError(null, "password")}
                      error={errors.password}
                      placeholder={"Mot de pass actuel"}
                      password={true}
                      name={"password"}
                      value={inputs.password}
                    />
                  </div>
                  <button onClick={validate}>Modifier </button>
                </>
              )}
              {pwd && (
                <>
                  <div className={styles.newPwd}>
                    <Input
                      onChangeText={handleOnchange}
                      onFocus={() => handleError(null, "new_password")}
                      error={errors.new_password}
                      placeholder={"Nouveau Mot de pass"}
                      password={true}
                      name={"new_password"}
                      value={inputs.new_password}
                    />
                    <Input
                      onChangeText={handleOnchange}
                      onFocus={() => handleError(null, "confirm_password")}
                      error={errors.confirm_password}
                      placeholder={"Confirmer votre mot de passe"}
                      password={true}
                      name={"confirm_password"}
                      value={inputs.confirm_password}
                    />
                  </div>
                  <div className={styles.btns}>
                    <button
                      onClick={() => {
                        setPwd(false);
                      }}
                    >
                      Annuler
                    </button>
                    <button onClick={validate_new}>Sauvgarder</button>
                  </div>
                </>
              )}
            </div>
            <button onClick={logOut}>Se déconnecter</button>
          </div>
        </main>
      )}
    </>
  );
};
export default MonCompte;
