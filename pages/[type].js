import styles from "../styles/coiffeurs.module.css";
import Logo from "../components/logo/Logo";
import React, { useState, useEffect, useRef } from "react";
import getPrestations from "../services/getPrestation";
import getVilles from "../services/getVilles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Institue from "../components/institue/institue";
import getInstitus from "../services/getInstitus";
import Select, { components } from "react-select";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Star from "../components/star/star";
import Footer from "../components/general/footer/footer";
import Link from "next/link";
import Loading from "../components/general/loading";
const containerStyle = {
  width: "100%",
  height: "100%",
};
export async function getServerSideProps(context) {
  const type = context.params.type;
  let def;
  if (type == "coiffeurs") def = { value: "Coiffeurs", label: "Coiffeurs" };
  else if (type == "spa") def = { value: "Spa", label: "Spa" };
  else if (type == "barbiers") def = { value: "Barbiers", label: "Barbiers" };
  else def = { value: "Institut de Beauté", label: "Institut de Beauté" };
  return {
    props: {
      def: def,
      type: type,
    },
  };
}
export default function Coiffeurs({ type, def }) {
  const [nav, setNav] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [temp, setTemp] = useState(false);
  const [instituts, setInstituts] = useState([]);
  const [options, setOptions] = useState({
    optionsCity: null,
    optionsFilter: null,
  });
  const [position, setPosition] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resInst = await getInstitus({
        type_service: `${type}`,
        localite: "Fes",
        classement: "",
        prix_moyen: "",
      });
      setInstituts(resInst.data.instituts);
      setPosition({
        lat: resInst.data.instituts[0].latitude,
        lng: resInst.data.instituts[0].longitude,
      });
      const city = await getVilles();
      let op = [{ value: "A proximité", label: "A proximité" }];
      city.data.villes.forEach((item) =>
        op.push({ value: item.name, label: item.name })
      );
      const prestation = await getPrestations();
      let arrPre = [
        { value: "Coiffeurs", label: "Coiffeurs" },
        { value: "Institut de Beauté", label: "Institut de Beauté" },
        { value: "Barbiers", label: "Barbiers" },
        { value: "spa", label: "Spa" },
      ];
      prestation.data.prestations.forEach((item) =>
        arrPre.push({ value: item.name, label: item.name })
      );
      setOptions({ optionsCity: op, optionsFilter: arrPre });
      setLoading(false);
      setSelectedOption({
        type_service: def.value,
        localite: "Fes",
        classement: "",
        prix_moyen: "",
      });
      const timer = setTimeout(function () {
        setTemp(true);
      }, 1000);
      return () => clearTimeout(timer);
    };
    fetchData();
  }, [def.value,type]);
  const { Option } = components;
  const CustomSelectOption = (props) => (
    <Option {...props}>
      <div className={styles.option}>
        {props.children == "A proximité" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#d7d3cf"
              fillRule="evenodd"
              d="M11.989 12c.416 0 .803-.1 1.16-.3.356-.201.638-.47.847-.806.208-.336.312-.705.312-1.105 0-.401-.104-.773-.312-1.117a2.275 2.275 0 0 0-.848-.816c-.356-.2-.743-.3-1.16-.3a2.3 2.3 0 0 0-1.984 1.116 2.116 2.116 0 0 0-.312 1.117c0 .615.223 1.137.67 1.567.445.43.988.644 1.627.644zM12 4c1.1 0 2.11.252 3.03.757a5.887 5.887 0 0 1 2.166 2.037c.536.867.804 1.818.804 2.853 0 .79-.206 1.695-.619 2.717-.357.867-.852 1.659-1.484 2.668a37.066 37.066 0 0 1-1.794 2.503 30.562 30.562 0 0 1-1.484 1.786L12 20l-.619-.68a30.562 30.562 0 0 1-1.484-1.785 37.066 37.066 0 0 1-1.794-2.503c-.632-1.009-1.127-1.801-1.484-2.668C6.206 11.342 6 10.436 6 9.647c0-1.035.268-1.986.804-2.853A5.887 5.887 0 0 1 8.97 4.757 6.205 6.205 0 0 1 12 4z"
            ></path>
          </svg>
        ) : (
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            width="20"
            height="20"
          >
            <path
              fillRule="evenodd"
              d="M480 192H592C618.5 192 640 213.5 640 240V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V144C0 117.5 21.49 96 48 96H64V24C64 10.75 74.75 0 88 0C101.3 0 112 10.75 112 24V96H176V24C176 10.75 186.7 0 200 0C213.3 0 224 10.75 224 24V96H288V48C288 21.49 309.5 0 336 0H432C458.5 0 480 21.49 480 48V192zM576 368C576 359.2 568.8 352 560 352H528C519.2 352 512 359.2 512 368V400C512 408.8 519.2 416 528 416H560C568.8 416 576 408.8 576 400V368zM240 416C248.8 416 256 408.8 256 400V368C256 359.2 248.8 352 240 352H208C199.2 352 192 359.2 192 368V400C192 408.8 199.2 416 208 416H240zM128 368C128 359.2 120.8 352 112 352H80C71.16 352 64 359.2 64 368V400C64 408.8 71.16 416 80 416H112C120.8 416 128 408.8 128 400V368zM528 256C519.2 256 512 263.2 512 272V304C512 312.8 519.2 320 528 320H560C568.8 320 576 312.8 576 304V272C576 263.2 568.8 256 560 256H528zM256 176C256 167.2 248.8 160 240 160H208C199.2 160 192 167.2 192 176V208C192 216.8 199.2 224 208 224H240C248.8 224 256 216.8 256 208V176zM80 160C71.16 160 64 167.2 64 176V208C64 216.8 71.16 224 80 224H112C120.8 224 128 216.8 128 208V176C128 167.2 120.8 160 112 160H80zM256 272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272zM112 320C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304C64 312.8 71.16 320 80 320H112zM416 272C416 263.2 408.8 256 400 256H368C359.2 256 352 263.2 352 272V304C352 312.8 359.2 320 368 320H400C408.8 320 416 312.8 416 304V272zM368 64C359.2 64 352 71.16 352 80V112C352 120.8 359.2 128 368 128H400C408.8 128 416 120.8 416 112V80C416 71.16 408.8 64 400 64H368zM416 176C416 167.2 408.8 160 400 160H368C359.2 160 352 167.2 352 176V208C352 216.8 359.2 224 368 224H400C408.8 224 416 216.8 416 208V176z"
            />
          </svg>
        )}

        {props.data.label}
      </div>
    </Option>
  );
  const optionsFilter = [
    { value: "Sans préférence", label: "Sans préférence" },
    { value: "Paiement en ligne", label: "Paiement en ligne" },
    { value: "Les mieux notés", label: "Les mieux notés" },
    { value: "En promotion", label: "En promotion" },
    { value: "Du + Cher au - Cher", label: "Du + Cher au - Cher" },
    { value: "Du - Cher au + Cher", label: "Du - Cher au + Cher" },
  ];
  const [selectedOption, setSelectedOption] = useState({
    type_service: "",
    localite: "",
    classement: "",
    prix_moyen: "",
  });
  const handleOptionPre = (option) => {
    setSelectedOption((prevUser) => {
      return { ...prevUser, type_service: option.value };
    });
  };
  const handleOptionCity = (option) => {
    setSelectedOption((prevUser) => {
      return { ...prevUser, localite: option.value };
    });
  };
  const handleOptionFilter = (option) => {
    setSelectedOption((prevUser) => {
      return { ...prevUser, classement: option.value };
    });
  };

  const handleMap = (lat, lng) => {
    if (lat != position.lat && lng != position.lng) {
      setPosition({
        lat: lat,
        lng: lng,
      });
    }
  };

  const customStyles = {
    menu: ({ width, ...css }) => ({
      ...css,
      width: "112%",
      position: "absolute",
      right: -20,
      borderRadius: 0,
    }),
    control: (base, state) => ({
      ...base,
      boxShadow: "none",
      border: 0,
      fontFamily: "Lato sans-serif",
    }),
    option: (styles, state) => ({
      ...styles,
      color: state.isSelected ? "#FFF" : styles.color,
      backgroundColor: state.isSelected ? "#d8c54e" : styles.color,
      fontSize: 16,
      "&:hover": {
        color: "#fff",
        backgroundColor: state.isSelected ? "#d8c54e" : "#e4d683",
      },
    }),
  };

  async function loadData() {
    setLoading(true);
    const data = await getInstitus({
      type_service: selectedOption.type_service,
      localite: selectedOption.localite,
      classement: selectedOption.classement,
      prix_moyen: "",
    });

    setInstituts(data.data.instituts);
    setPosition({
      lat: data.data.instituts[0].latitude,
      lng: data.data.instituts[0].longitude,
    });
    setLoading(false);
  }
  return (
    <div className={styles.section} id="main">
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <Link href="/a_propos">
            <a target="_blanc">Qui somme-nous</a>
          </Link>
          <Logo />
          <div>
            <Link href="/inscrivez-etablissement">
              <a target="_blanc">Inscrivez votre établissement</a>
            </Link>
            <a
              // href="https://www.facebook.com/nativysofficiel"
              target="_blank"
              rel="noreferrer"
            >
              <svg
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
            </a>
          </div>
        </div>
        <nav className={styles.nav}>
          <Link href={"/" + "coiffeurs"} key={"coiffeurs"}>
            Coiffeurs
          </Link>
          <Link href={"/" + "instituts_de_beaute"} key={"instituts_de_beaute"}>
            institus de beauté
          </Link>
          <Link href={"/" + "barbiers"} key={"barbiers"}>
            barbiers
          </Link>
          <Link href={"/" + "spa"} key={"spa"}>
            spa
          </Link>
        </nav>
      </header>
      <nav className={styles.navBar}>
        <h4
          className={nav ? styles.active : styles.nonActive}
          onClick={() => {
            setNav(true);
          }}
        >
          Résultats
        </h4>
        <h4
          className={!nav ? styles.active : styles.nonActive}
          onClick={() => {
            setNav(false);
          }}
        >
          Carte
        </h4>
      </nav>
      <main className={styles.main}>
        <h1 style={{ display: nav == false ? "none" : "block" }}>
          Pensez à prendre votre rendez-vous beauté en ligne
        </h1>
        <div
          className={styles.filter}
          style={{ display: nav == false ? "none" : "flex" }}
        >
          <div className={styles.inputContainer}>
            <div className={styles.boxIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#d7d3cf"
                  fillRule="evenodd"
                  d="M15.579 14.557L20 18.978 18.978 20l-4.421-4.421a6.5 6.5 0 1 1 1.022-1.022zm-5.079.999a5.056 5.056 0 1 0 0-10.112 5.056 5.056 0 0 0 0 10.112z"
                ></path>
              </svg>
              <Select
                instanceId={1}
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
                styles={customStyles}
                className={styles.input}
                defaultValue={def}
                onChange={handleOptionPre}
                options={options.optionsFilter}
                placeholder={"Nom du salon, prestations"}
              />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.boxIcon}>
              <svg
                className={styles.iconLocation}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#d7d3cf"
                  fillRule="evenodd"
                  d="M11.989 12c.416 0 .803-.1 1.16-.3.356-.201.638-.47.847-.806.208-.336.312-.705.312-1.105 0-.401-.104-.773-.312-1.117a2.275 2.275 0 0 0-.848-.816c-.356-.2-.743-.3-1.16-.3a2.3 2.3 0 0 0-1.984 1.116 2.116 2.116 0 0 0-.312 1.117c0 .615.223 1.137.67 1.567.445.43.988.644 1.627.644zM12 4c1.1 0 2.11.252 3.03.757a5.887 5.887 0 0 1 2.166 2.037c.536.867.804 1.818.804 2.853 0 .79-.206 1.695-.619 2.717-.357.867-.852 1.659-1.484 2.668a37.066 37.066 0 0 1-1.794 2.503 30.562 30.562 0 0 1-1.484 1.786L12 20l-.619-.68a30.562 30.562 0 0 1-1.484-1.785 37.066 37.066 0 0 1-1.794-2.503c-.632-1.009-1.127-1.801-1.484-2.668C6.206 11.342 6 10.436 6 9.647c0-1.035.268-1.986.804-2.853A5.887 5.887 0 0 1 8.97 4.757 6.205 6.205 0 0 1 12 4z"
                ></path>
              </svg>
              <Select
                instanceId={2}
                components={{
                  Option: CustomSelectOption,
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
                styles={customStyles}
                className={styles.input}
                onChange={handleOptionCity}
                options={options.optionsCity}
                placeholder={"Où (Adresse, Ville.)"}
              />
            </div>
          </div>
          <p>Filters</p>
          <Select
            instanceId={3}
            isSearchable={false}
            components={{
              IndicatorSeparator: () => null,
            }}
            styles={customStyles}
            className={styles.dropdown}
            onChange={handleOptionFilter}
            options={optionsFilter}
            placeholder={"Pertinences"}
          />
          <button
            type="submit"
            className={styles.search_btn}
            onClick={() => {
              loadData();
            }}
          >
            Recherche
          </button>
        </div>
        <div className={styles.body}>
          {loading ? (
            <div className={styles.loading}>
              <Loading />
            </div>
          ) : (
            <section
              className={styles.sectionContainer}
              style={{ display: nav == false ? "none" : "block" }}
            >
              {instituts.length > 0 &&
                instituts?.map((elem) => {
                  return (
                    <Institue
                      key={elem.id}
                      data={elem}
                      handleMap={handleMap}
                      pos={position}
                    />
                  );
                })}
            </section>
          )}
          <aside
            className={styles.aside}
            style={{ display: nav == true ? "none" : "block" }}
          >
            <LoadScript googleMapsApiKey="AIzaSyBLFEpEUu-hhvrAkRuOBn80uwOPhgGNSAs">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={15}
              >
                {temp &&
                  instituts.map((item) => {
                    {
                      return (
                        <Star
                          pos={{
                            lat: item.latitude,
                            lng: item.longitude,
                          }}
                          name={item.name}
                          location={item.adresse}
                          tel={item.telephone1}
                        />
                      );
                    }
                  })}
              </GoogleMap>
            </LoadScript>
          </aside>
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        .slick-dots {
          bottom: 7px;
        }
        .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
          // font-size: 12px;
        }
        .slick-dots li button:before {
          font-size: 8px;
          color: white;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
