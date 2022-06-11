import styles from "./inscrivezVous.module.css";
import Logo from "../../components/logo/Logo";
import Input from "../../components/general/input/Input";
import Footer from "../../components/general/footer/footer";
import Link from "next/link";
function scroll() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
export default function inscrivezVous() {
  return (
    <div className={styles.section} id="main">
      <header className={styles.header2} id="header">
        <Logo />
        <div>
          <a className={styles.headerLink}>Qui sommes-nous ?</a>
          <button>
            <a href="https://pro.nativys.com/fr" target="blank">
              Connexion Pro
            </a>
          </button>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.form}>
          <div>Travaillez en beauté avec NATIVYS</div>
          <form>
            <div className={styles.div}>
              <label>
                Prénom <span className={styles.span}>*</span>
              </label>
              <Input placeholder={"Prénom*"} name={"prenom"} />
            </div>
            <div className={styles.div}>
              <label className={styles.label}>
                Nom <span className={styles.span}>*</span>
              </label>
              <Input placeholder={"Nom*"} name={"nom"} />
            </div>
            <div className={styles.div}>
              <label className={styles.label}>
                Adresse mail <span className={styles.span}>*</span>
              </label>
              <Input placeholder={"Adresse mail*"} name={"AdresseMail"} />
            </div>
            <div className={styles.div}>
              <label className={styles.label}>
                Numéro Téléphone <span className={styles.span}>*</span>
              </label>
              <Input placeholder={"+2120630614567"} name={"Téléphone"} />
            </div>
            <div className={styles.div}>
              <label className={styles.label}>
                Vous êtes <span className={styles.span}>*</span>
              </label>

              <select
                name="metier"
                data-type="extra"
                type="custom_type"
                data-custom-type="METIER"
              >
                <option value="gerant_salon">
                  Gérant d&apos;un salon de coiffure{" "}
                </option>
                <option value="gerant_institut">
                  Gérant d&apos;un institut de beauté{" "}
                </option>
                <option value="barbier">Gérant d&apos;un barbershop </option>
                <option value="creation">
                  En train de créer mon activité{" "}
                </option>
                <option value="salarie">
                  Je suis salarié / apprenti d&apos;un établissement de beauté{" "}
                </option>
                <option value="gerant_salon_domicile">
                  Gérant d&apos;un salon à domicile{" "}
                </option>

                <option value="professionnel_beaute_domicile">
                  Un professionnel de beauté se déplaçant à domicile{" "}
                </option>

                <option value="salarie1">
                  Salarié / apprenti d&apos;un établissement de beauté d&apos;un
                  salon / institut{" "}
                </option>

                <option value="professionnel_beaute">
                  Je ne suis pas un professionnel de la beauté{" "}
                </option>

                <option value="professionnel_beaute">
                  Gérant(e) d&apos;un centre de spa{" "}
                </option>

                <option value="autre">Autre </option>
              </select>
            </div>
            <div className={styles.div}>
              <label className={styles.label}>
                Etes-vous déjà client NATIVYS ?{" "}
                <span className={styles.span}>*</span>
              </label>
              <select
                name="vous_ete_deja_client"
                data-type="extra"
                type="custom_type"
                data-custom-type="CLIENT"
              >
                <option value="non">Non</option>
                <option value="oui">Oui</option>
              </select>
            </div>
            <div className={styles.footer}>
              <Link href="/coiffeurs">
                <a className={styles.a}>
                  je souhaite prendre un rendez-vous beauté sur nativys.com
                </a>
              </Link>

              <button className={styles.button}>
                <a>Obtenir une demo gratuite</a>
              </button>
              <p className={styles.p}>
                En cliquant sur ce button vous acceptez{" "}
                <a href="https://nativys.com/fr/cgu">
                  nos conditions générales d&apos;utilisation.
                </a>
              </p>
              <h3>
                Plus d&apos;informations: <span>+212 08 08 57 17 02</span>
              </h3>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.container1}></div>
      <div className={styles.form1}>
        <div>Travaillez en beauté avec NATIVYS</div>
        <form>
          <div className={styles.div}>
            <label>
              Prénom <span className={styles.span}>*</span>
            </label>
            <Input placeholder={"Prénom*"} name={"prenom"} />
          </div>
          <div className={styles.div}>
            <label className={styles.label}>
              Nom <span className={styles.span}>*</span>
            </label>
            <Input placeholder={"Nom*"} name={"nom"} />
          </div>
          <div className={styles.div}>
            <label className={styles.label}>
              Adresse mail <span className={styles.span}>*</span>
            </label>
            <Input placeholder={"Adresse mail*"} name={"AdresseMail"} />
          </div>
          <div className={styles.div}>
            <label className={styles.label}>
              Numéro Téléphone <span className={styles.span}>*</span>
            </label>
            <Input placeholder={"+2120630614567"} name={"Téléphone"} />
          </div>
          <div className={styles.div}>
            <label className={styles.label}>
              Vous êtes <span className={styles.span}>*</span>
            </label>
            <select
              name="metier"
              data-type="extra"
              type="custom_type"
              data-custom-type="METIER"
            >
              <option value="gerant_salon">
                Gérant d&apos;un salon de coiffure{" "}
              </option>
              <option value="gerant_institut">
                Gérant d&apos;un institut de beauté{" "}
              </option>
              <option value="barbier">Gérant d&apos;un barbershop </option>
              <option value="creation">En train de créer mon activité </option>
              <option value="salarie">
                Je suis salarié / apprenti d&apos;un établissement de beauté{" "}
              </option>
              <option value="gerant_salon_domicile">
                Gérant d&apos;un salon à domicile{" "}
              </option>

              <option value="professionnel_beaute_domicile">
                Un professionnel de beauté se déplaçant à domicile{" "}
              </option>

              <option value="salarie1">
                Salarié / apprenti d&apos;un établissement de beauté d&apos;un
                salon / institut{" "}
              </option>

              <option value="professionnel_beaute">
                Je ne suis pas un professionnel de la beauté{" "}
              </option>

              <option value="professionnel_beaute">
                Gérant(e) d&apos;un centre de spa{" "}
              </option>

              <option value="autre">Autre </option>
            </select>
          </div>

          <div className={styles.div}>
            <label className={styles.label}>
              Etes-vous déjà client NATIVYS ?{" "}
              <span className={styles.span}>*</span>
            </label>
            <select
              name="vous_ete_deja_client"
              data-type="extra"
              type="custom_type"
              data-custom-type="CLIENT"
            >
              <option value="non">Non</option>
              <option value="oui">Oui</option>
            </select>
          </div>
          <div className={styles.footer}>
            <Link href="/coiffeurs">
              <a className={styles.a}>
                je souhaite prendre un rendez-vous beauté sur nativys.com
              </a>
            </Link>

            <button className={styles.button}>
              <a>Obtenir une demo gratuite</a>
            </button>
            <p className={styles.p}>
              En cliquant sur ce button vous acceptez{" "}
              <a href="https://nativys.com/fr/cgu">
                nos conditions générales d&apos;utilisation.
              </a>
            </p>
            <h3>
              Plus d&apos;informations: <span>+212 08 08 57 17 02</span>
            </h3>
          </div>
        </form>
      </div>
      <div className={styles.section2}>
        <p>Chez NATIVYS, nous aimons le secteur de beauté et bien-être.</p>
        <p>
          {" "}
          C’est pourquoi nous fournissons les meilleurs outils à nos partenaires
          et investissons beaucoup
        </p>
        <p>
          en marketing pour leur permettre d’être visibles, d’obtenir plus de
          réservations, de bien fidéliser leurs clients
        </p>
        <p>et de gérer leur activité, tous ça est regroupé au même endroit !</p>
        <button className={styles.button} onClick={scroll}>
          <a> Obtenir une demo gratuite</a>
        </button>
      </div>

      <div className={styles.divContainer}>
        <h2 className={styles.h2}>Les avantages de nos partenaires</h2>
        <div>
          <div className={styles.avantages}>
            <div>
              <ul className={styles.liste}>
                <li>Visibilités en ligne!</li>
                <li>
                  Entrez en contact avec des millions de futurs clients
                  potentiels 24H/24 et 7J/7
                </li>
                <li>
                  <span>50% des rdv</span> pris en dehors des horaires
                  d&apos;ouverture
                </li>
                <li>Rappelles automatiques des RDV par SMS</li>
                <li>
                  Construisez votre réputation en logne grâce aux avis vérifiés
                </li>
              </ul>
            </div>
            <div className={styles.img1}></div>
          </div>
          <hr className={styles.hr}></hr>
          <div className={styles.avantages}>
            <div>
              <ul className={styles.liste}>
                <li>Transformez vos followers en clients</li>
                <li>
                  Réservation facile à ajouter sur votre page Facebook, compte
                  Instagram ou sur votre site web
                </li>
                <li>
                  Un boutton Réserver est totalement intégré à votre agenda
                  connecté
                </li>
                <li>
                  Fidélisez vos clients à l&apos;aide de{" "}
                  <span>campagnes sms ciblées</span>
                </li>
              </ul>
            </div>
            <div className={styles.img2}></div>
          </div>
          <hr className={styles.hr}></hr>
          <div className={styles.avantages}>
            <div>
              <ul className={styles.liste}>
                <li>Un agenda Connecté</li>
                <li>
                  Gardez une <span>vision à 360°</span> et gérer votre salon en
                  toute sérénité
                </li>
                <li>
                  En quelques clics, gérer vos équipes, vos prestations avec les
                  temps de pose
                </li>
                <li>Chaque rendez-vous a sa fiche client créée ou associée</li>
              </ul>
            </div>
            <div className={styles.img3}></div>
          </div>
          <hr className={styles.hr}></hr>
          <div className={styles.avantages}>
            <div>
              <ul className={styles.liste}>
                <li>
                  Facilitez la gestion de votre établissement avec notre
                  logiciel de caisse sécurisé
                </li>
                <li>
                  Encaissement,paiement en ligne <span>facile</span> et clôture
                  de caisse <span>simplifié</span>
                </li>
                <li>
                  Gestion de Stocks, Fidélité,Cures, Forfaits,Cartes
                  cadeaux...en quelques clics !
                </li>
                <li>
                  Suivez votre activité et votre performance à l&apos;aide des
                  analyses et statiques avancés
                </li>
              </ul>
            </div>
            <div className={styles.img4}></div>
          </div>
          <hr className={styles.hr}></hr>
          <div className={styles.avantages}>
            <div>
              <ul className={styles.liste}>
                <li>
                  Une gestion de vitre salon n&apos;a jamais été aussi simple
                </li>
                <li>Plateforme accessible depuis : web,tablette et mobile</li>
                <li>
                  Nos experts NATIVYS vous accompagne pour vous former et régler
                  vos prestation sur mesure.
                </li>
                <li>Service client pour toutes questions 6/7.</li>
              </ul>
            </div>
            <div className={styles.img5}></div>
          </div>
          <hr className={styles.hr}></hr>
        </div>
        <div className={styles.btnDiv} onClick={scroll}>
          <button className={styles.button}>
            <a> Obtenir une demo gratuite</a>
          </button>
        </div>
      </div>

      <div className={styles.global}>
        <div className={styles.title}>
          <h3>Des formules qui s&apos;adabtent à vos besoins.</h3>
          <p>
            Sans engagement et 0% de commission sur les réservations effectuées
            par votre clientèle
          </p>
        </div>
        <div className={styles.divMilieu}>
          <div>
            <p>STARTER</p>
            <ul>
              <li>Logiciel de gestion des rendez-vous</li>
              <li>Réservation 7j/7 & 24h/24 </li>
              <li>300 sms de rappel inclus</li>
              <li>Statistiques clients</li>
            </ul>
          </div>
          <div>
            <p>ADVANCED</p>
            <ul>
              <li>Formule STARTER</li>
              <li>Logiciel de caisse sécurisé</li>
              <li>Gestion des stocks</li>
              <li>Gestion de la fidélité</li>
              <li>Gestion des cures</li>
              <li>Cartes cadeaux</li>
              <li>Statistiques avancées</li>
            </ul>
          </div>
        </div>
        <div className={styles.btnDiv} onClick={scroll} id="btn">
          <button className={styles.button}>
            <a> Obtenir une demo gratuite</a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
