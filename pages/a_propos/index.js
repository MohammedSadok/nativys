import styles from "./a-propos.module.css";
import Footer from "../../components/general/footer/footer";
import Header from "../../components/general/header/header";
export default function Apropos() {
  return (
    <>
      <Header />
        <div className={styles.global}>
          <h1>Nativys, votre plateforme de réservation en ligne</h1>
          <div className={styles.global1}>
            <h2>Qui sommes-nous ?</h2>
            <p>
              Lancée en 2021, Nativys est une{" "}
              <strong> plateforme de prise de rendez-vous </strong> instantanée
              chez les meilleurs professionnels de beauté à proximité qui met en
              relation les clients et les gérants de salon en relation,
              accessible 24h/24 et 7j/7 sur l’ensemble des supports digitaux
              (smartphones, tablettes et PC).
            </p>
            <p>
              Que vous soyez un salon de coiffure, un institut de beauté, un
              barbier ou encore un spa, Nativys propose à ses partenaires un{" "}
              <strong> outil de gestion intégrant un agenda connecté </strong>{" "}
              et un logiciel de caisse sécurisé leur permettant d’optimiser et
              de développer leur activité via un abonnement mensuel,
              trimestriel, semestriel ou même annuel.
            </p>
            <p>
              La priorité étant de fournir aux clients un excellent service de
              beauté à proximité, grâce à un outil de gestion. Nous offrons à
              nos partenaires, les fonctionnalités clés suivantes :
            </p>
            <ul>
              <li>
                Un logiciel de caisse sécurisé qui permet d’optimiser et de
                développer l’activité sans commission ni engagement.
              </li>
              <li>
                Une visibilité en ligne sur la plateforme de prise de
                rendez-vous.
              </li>
              <li>
                Un agenda connecté pour mieux organiser les rendez-vous, et
                gérer votre temps.
              </li>
              <li>Une gestion de la base de données clients.</li>
              <li>Un management de vos équipes</li>
            </ul>
            <p>
              L’objectif de Nativys est de dépasser le cap des 10 millions de
              rendez-vous !
            </p>
            <p>
              Ici, chez Nativys, nous voulons inciter nos clients à exprimer
              leur beauté. Ce qui signifie que nous pouvons vous offrir une
              diversité de choix et vous donner confiance pour essayer de
              nouvelles expériences. Nous nous occupons des rendez-vous beauté
              et bien-être de manière rapide, intuitive et facile. Ainsi, grâce
              à la plateforme en ligne, vous avez la possibilité de choisir
              votre institut de beauté, votre coiffeur, votre barbier ou même
              votre spa préféré sans se déplacer ou faire un effort, en plus
              d’une possibilité de recevoir un SMS contenant la date et l’heure
              prévues.
            </p>
            <p>
              Nous avons également créé le{" "}
              <a target="_blank" href="https://mag.nativys.com">
                blog professionnel Nativys Mag
              </a>
              , destiné à tous nos clients et partenaires. L’équipe Nativys,
              organise de nombreuses conversations avec les responsables des
              salons partenaires et rédige des articles et des blogs sur les
              dernières tendances, actualités… sans oublier la création, le
              développement, la gestion et la digitalisation des instituts de
              beautés, des salons de coiffures, des centres de spa ou même des
              barbiers pour les accompagner.
            </p>
          </div>

          <div className={styles.img}>
            <img
              src="https://pilote.nativys.com/images_site_web/description/description.jpg"
              alt="Nature"
            />
          </div>
        </div>
      <Footer />
    </>
  );
}
