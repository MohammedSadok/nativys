import styles from "./confirmation.module.css";
import React, { useState, useEffect, useRef } from "react";
import Header from "../../../../components/general/header/header";
import { Rating } from "react-simple-star-rating";
import Select from "react-select";
import Categorie from "../../../../components/categorie/categorie";
import getHours from "../../../../services/getHours";
import Input from "../../../../components/general/input/Input";
import getPrestataire from "../../../../services/prestataire";
import getOneInstitut from "../../../../services/getOneInstitut";
import login from "../../../../services/login";
import confirmRDV from "../../../../services/confirmRDV";
import { useRouter } from "next/router";
import Loading from "../../../../components/general/loading";
import Link from "next/link";
export const getServerSideProps = async (context) => {
  const id = context.params.id_pre;
  const id1 = context.params.id;
  return {
    props: { idInst: id1, id: id },
  };
};
export default function Register({ idInst, id }) {
  const router = useRouter();
  const link = useRef();
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(null);
  const [hours, setHours] = useState(null);
  const [prestation, setPrestation] = useState([null]);
  const [addPres, setAddPres] = useState(false);
  const [rdv, setRdv] = useState(null);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

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
      const rep = await login(inputs);
      setUser(rep.data);
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
  const addPre = async (data) => {
    const prestataire = await getPrestataire({
      institut_id: idInst,
      prestation_id: data.id,
    });
    const choix = prestataire.data.prestataires.map((item) => {
      return { value: item.id, label: item.name };
    });
    const newPre = { ...data, choix };
    if (prestation[0] == null) {
      setPrestation([newPre]);
    } else setPrestation((oldArray) => [...oldArray, newPre]);
    setAddPres(false);
  };
  const onSelectChange = (id, value) => {
    setPrestation((prevItem) => {
      return prevItem.map((item) => {
        return item.id === id ? { ...item, avec: value } : item;
      });
    });
  };
  const deletePre = (idP) => {
    let res = [];
    prestation.forEach((elem, index) => {
      if (parseInt(index) != parseInt(idP)) {
        res.push(elem);
      }
    });
    setPrestation(res);
  };
  const handleHours = async (type) => {
    const arr = [];
    prestation.forEach((item) => {
      if (item.avec != null) arr.push(item.avec);
    });
    if (arr.length == 0) arr = [null];
    if (type == true) {
      const res1 = await getHours({
        institut_id: idInst,
        index_ph: counter + 1,
        prestataire_array_id: arr,
        prestation_id: id,
      });
      setCounter(counter + 1);
      setHours(res1);
    } else {
      const res1 = await getHours({
        institut_id: idInst,
        index_ph: counter - 1,
        prestataire_array_id: arr,
        prestation_id: id,
      });
      setCounter(counter - 1);
      setHours(res1);
    }
  };

  const customStyles = {
    menu: ({ width, ...css }) => ({
      ...css,
      width: "100%",
      position: "absolute",
    }),
    control: (base, state) => ({
      ...base,
      "&:hover": { borderColor: "gray" },
      border: "1px solid lightgray",
      boxShadow: "none",
    }),
    option: (styles, state) => ({
      ...styles,
      color: state.isSelected ? "#FFF" : styles.color,
      backgroundColor: state.isSelected ? "#e4d683" : styles.color,
      fontSize: 16,
      "&:hover": {
        color: "#fff",
        backgroundColor: state.isSelected ? "#e4d683" : "#efe8b8",
      },
    }),
  };
  const ConfirmRdv = async () => {
    setLoading(true);
    let arr = [];
    prestation.forEach((item) => {
      arr.push({ prestation_id: item.id, prestataire_id: item.avec });
    });
    const rep = await confirmRDV(
      {
        user_id: user.user.id,
        institut_id: idInst,
        date: rdv.date,
        heure: rdv.heure,
        prestations: arr,
      },
      user.access_token
    );
    router.push({
      pathname: "/moncompte",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const usr = localStorage.getItem("user");
      if (usr != null) {
        setUser(JSON.parse(usr));
      }
      const prestataire = await getPrestataire({
        institut_id: idInst,
        prestation_id: id,
      });

      const choix = prestataire.data.prestataires.map((item) => {
        return { value: item.id, label: item.name };
      });
      const saved = localStorage.getItem("institue");
      if (saved !== null && JSON.parse(saved).id == idInst) {
        const data = JSON.parse(saved);
        setValue(data);
        link.current =
          "https://www.google.com/maps/search/?api=1&query=" +
          data.latitude +
          "," +
          data.longitude;

        data.categories.forEach((element) => {
          element.prestations.forEach((item) => {
            if (item.id == id) {
              setPrestation([
                { id: id, text: item.name, avec: null, choix: choix },
              ]);
            }
          });
        });
      } else {
        const response = await getOneInstitut(idInst);
        // console.log(response.data.institut.categories[0].prestations);
        setValue(response.data.institut);
        link.current =
          "https://www.google.com/maps/search/?api=1&query=" +
          response.data.institut.latitude +
          "," +
          response.data.institut.longitude;
        response.data.institut.categories.forEach((element) => {
          element.prestations.forEach((item) => {
            if (item.id == id) {
              console.log({
                id: id,
                text: item.name,
                avec: null,
                choix: choix,
              });
              setPrestation([
                { id: id, text: item.name, avec: null, choix: choix },
              ]);
            }
          });
        });
        localStorage.setItem(
          "institue",
          JSON.stringify(response.data.institut)
        );
      }
      const res1 = await getHours({
        institut_id: idInst,
        index_ph: 0,
        prestataire_array_id: [null],
        prestation_id: id,
      });
      setHours(res1);
    };
    fetchData();
  }, [id,idInst]);
  return (
    <>
      <header>
        <Header />
      </header>
      {value && (
        <main className={styles.main}>
          <div className={styles.title}>
            <h1>{value.name}</h1>
            <div className={styles.ratingContainer}>
              <div href="#" className={styles.linkToLocation}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#d7d3cf"
                    fillRule="evenodd"
                    d="M11.989 12c.416 0 .803-.1 1.16-.3.356-.201.638-.47.847-.806.208-.336.312-.705.312-1.105 0-.401-.104-.773-.312-1.117a2.275 2.275 0 0 0-.848-.816c-.356-.2-.743-.3-1.16-.3a2.3 2.3 0 0 0-1.984 1.116 2.116 2.116 0 0 0-.312 1.117c0 .615.223 1.137.67 1.567.445.43.988.644 1.627.644zM12 4c1.1 0 2.11.252 3.03.757a5.887 5.887 0 0 1 2.166 2.037c.536.867.804 1.818.804 2.853 0 .79-.206 1.695-.619 2.717-.357.867-.852 1.659-1.484 2.668a37.066 37.066 0 0 1-1.794 2.503 30.562 30.562 0 0 1-1.484 1.786L12 20l-.619-.68a30.562 30.562 0 0 1-1.484-1.785 37.066 37.066 0 0 1-1.794-2.503c-.632-1.009-1.127-1.801-1.484-2.668C6.206 11.342 6 10.436 6 9.647c0-1.035.268-1.986.804-2.853A5.887 5.887 0 0 1 8.97 4.757 6.205 6.205 0 0 1 12 4z"
                  ></path>
                </svg>
                <a href={link.current}>{value.adresse}</a>
              </div>
              <div className={styles.rating}>
                <Rating
                  readonly
                  ratingValue={50}
                  size={16}
                  fillColor="#d8c54e"
                  emptyColor="#cccccc"
                />
                <p>2 avis</p>
              </div>
            </div>
          </div>
          <div className={styles.prestation}>
            <h4>Choix de la prestation</h4>
            {prestation[0] != null &&
              prestation.map((item, index) => {
                return (
                  <div className={styles.item} key={index}>
                    <p>{item.text}</p>
                    <div className={styles.select}>
                      <div className={styles.deleteSelect}>
                        <Select
                          instanceId={item.id}
                          isSearchable={false}
                          components={{
                            IndicatorSeparator: () => null,
                          }}
                          styles={customStyles}
                          className={styles.dropdown}
                          onChange={(value) => {
                            onSelectChange(item.id, value.value);
                          }}
                          options={item.choix}
                          placeholder={"Choisire avec qui"}
                        />
                        {index > 0 && (
                          <button onClick={() => deletePre(index)}>
                            Supprimer
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

            {!addPres && (
              <button
                className={styles.addPres}
                onClick={() => {
                  setAddPres(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle cx="9" cy="9" r="7.5" fill="#d8c54e"></circle>
                    <path fill="#FFF" d="M8.25 4.5h1.5v9h-1.5z"></path>
                    <path fill="#FFF" d="M13.5 8.25v1.5h-9v-1.5z"></path>
                  </g>
                </svg>
                <span>Ajouter une prestation àla suite</span>
              </button>
            )}
            {addPres && (
              <>
                <div className={styles.newPres}>
                  <h4>Choix de la prestation a ajouter</h4>
                  <button
                    onClick={() => {
                      setAddPres(false);
                    }}
                  >
                    Fermer
                  </button>
                </div>
                <section>
                  {value.categories.map((item) => {
                    return (
                      <Categorie
                        data={item}
                        key={item.id}
                        handleClick={addPre}
                        type={false}
                      />
                    );
                  })}
                </section>
              </>
            )}
          </div>
          <div className={styles.calender}>
            <h4>Choix de la date et heure du RDV</h4>
            {rdv && (
              <div className={styles.modRdv}>
                <p>{rdv.string}</p>
                <button
                  onClick={() => {
                    setRdv(null);
                  }}
                >
                  Modifier
                </button>
              </div>
            )}
            {rdv == null && (
              <section className={styles.horaires}>
                <div className={styles.days}>
                  <button
                    onClick={() => handleHours(false)}
                    disabled={counter == 0 ? true : false}
                  >
                    <svg
                      className={styles.svgLeft}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#979797"
                        fillRule="evenodd"
                        d="M8.705 6.705a.998.998 0 0 0 0 1.41L12.58 12l-3.876 3.884a.998.998 0 0 0 1.411 1.411L15.41 12l-5.295-5.295a.997.997 0 0 0-1.41 0z"
                      ></path>
                      <use transform="matrix(0 1 1 0 -.295 .295)"></use>
                    </svg>
                  </button>
                  <div>
                    {hours &&
                      hours.horaires.map((elem, index) => {
                        return (
                          <div key={index}>
                            <p>{elem.day_name_min}.</p>
                            <p>
                              {elem.day_num} {elem.month}.
                            </p>
                          </div>
                        );
                      })}
                  </div>
                  <button onClick={() => handleHours(true)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#979797"
                        fillRule="evenodd"
                        d="M8.705 6.705a.998.998 0 0 0 0 1.41L12.58 12l-3.876 3.884a.998.998 0 0 0 1.411 1.411L15.41 12l-5.295-5.295a.997.997 0 0 0-1.41 0z"
                      ></path>
                      <use transform="matrix(0 1 1 0 -.295 .295)"></use>
                    </svg>
                  </button>
                </div>
                <div className={styles.hours}>
                  {hours &&
                    hours.horaires.map((elem,index) => {
                      return (
                        <div className={styles.rowHour}key={index}>
                          {elem.hours.map((item, index) => {
                            return (
                              <div className={styles.hourItem} key={index}>
                                <button
                                  onClick={() => {
                                    setRdv({
                                      date: elem.date,
                                      heure: item,
                                      string:
                                        elem.name +
                                        " " +
                                        elem.day_num +
                                        " " +
                                        elem.month +
                                        " " +
                                        new Date().getFullYear() +
                                        " à " +
                                        item,
                                    });
                                  }}
                                  disabled={
                                    elem.hoursOccupe.indexOf(item) !== -1
                                  }
                                  className={
                                    elem.hoursOccupe.indexOf(item) !== -1
                                      ? styles.occupe
                                      : styles.noOccupe
                                  }
                                >
                                  {item}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                </div>
              </section>
            )}
          </div>
          {user == null ? (
            <>
              <div className={styles.identification}>
                <h4>Identification</h4>
                <div className={styles.form}>
                  <h4>
                    Veuillez saisir vos identifiants pour accéder à votre
                    compte.
                  </h4>
                  <div className={styles.formContainer}>
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
                    <button onClick={validate}>je m&apos;edentifie</button>
                    <a href="#">Mot de pass oublie ?</a>
                  </div>
                </div>
              </div>
              <div className={styles.minscrire}>
                <Link href="/register">
                  <a href="#">Je m&apos;inscrire</a>
                </Link>
              </div>
            </>
          ) : (
            <div className={styles.calender}>
              <h4>Identification</h4>
              <div className={styles.modRdv}>
                <p>{user.user.prenom + " " + user.user.nom}</p>
                <button
                  onClick={() => {
                    setUser(null);
                  }}
                >
                  Modifier
                </button>
              </div>
            </div>
          )}
          {user && rdv && prestation[0] && prestation[0].avec && (
            <div className={styles.calender}>
              <button className={styles.addPres} onClick={ConfirmRdv}>
                <span>
                  <strong>PAYEZ SUR PLACE</strong>
                </span>
              </button>
            </div>
          )}
          {loading && <Loading />}
          <p className={styles.para}>
            Merci de respecter le créneau qui vous a été réservé par notre
            partenaire. Nous savons bien que des imprévus arrivent. En cas
            d&apos;empêchement, merci de prévenir l&apos;établissement dès que possible.
            N&apos;hésitez pas à reprogrammer ou à annuler votre réservation via
            NATIVYS. En cas de rendez-vous manqué sans annulation de votre part,
            le partenaire peut vous notifier et vous bloquer pour des prochaines
            réservations avec lui.
          </p>
        </main>
      )}
    </>
  );
}
