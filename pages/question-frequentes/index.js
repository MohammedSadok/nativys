import styles from "./question-frequentes.module.css";
import Header from "../../components/general/header/header";
import Footer from "../../components/general/footer/footer";

export default function QuestionFrequentes() {
  return (
    <>
      <Header />
      <div className={styles.section} id="main">
        <div className={styles.global}>
          <h1>A propos de Nativys</h1>
          <div className={styles.global1}>
            <h2>Qu'est ce que Nativys ?</h2>
            <p>
              NATIVYS est une startup marocaine fondée en 2021, qui fournit un
              service en ligne de prise de rendez-vous instantanée chez les
              meilleurs professionnels de beauté à proximité, accessible 24h/24,
              7j/7 sur l’ensemble des supports digitaux. Nativys propose ainsi à
              ses partenaires répartis sur tout le Maroc (salons de coiffure,
              barbiers, instituts de beauté ou encore spas), un outil de
              gestion, intégrant un agenda connecté et un logiciel de caisse
              certifié, leur permettant d’optimiser et développer leur activité
              sans commission ni remise. Nous sommes tout simplement le meilleur
              moyen de réserver toutes vos prestations de beauté. Rejoignez-vous
              notre communauté !
            </p>
            <h2> Quels sont les avantages de Nativys ?</h2>
            <p>
              Nativys vous garantit en plus d'une navigation simple et fluide,
              une variété de services pour rendre l'expérience de réservation
              agréable :{" "}
            </p>
            <ul>
              <li>
                Réservation gratuite en quelques clics et 24h/24 sur la
                plateforme.{" "}
              </li>
              <li>
                Fin de l’attente au téléphone ou les déplacements pour prendre
                vos rendez-vous.
              </li>
              <li>
                Service simple et rapide, Nativys vous permet d’éviter de perdre
                d’un temps précieux et vous permet de prendre des réservations
                dans l’un des établissements partenaires en quelques cliques
                seulement.
              </li>
              <li>
                Des partenaires sélectionnées avec exigences et bienveillances
                dans tout le Royaume pour assurer un moment privilégié pour les
                clients.
              </li>
              <li>
                Fin des oublis de rendez-vous avec l'option de l'envoie des SMS
                de confirmation de rendez-vous directement aux clients.
              </li>
            </ul>
            <h2>Quels établissements pouvez-vous trouver sur Nativys ?</h2>
            <p>
              Les partenaires affichés sur la page Nativys sont des
              professionnels spécialisés dans le monde de la beauté et du bien
              être, sélectionnés selon des critères particuliers qui prend en
              compte l'environnement, l'ambiance, la qualité des soins et la
              propreté de l'établissement.
            </p>
          </div>

          <h1>Réservations sur Nativys</h1>
          <div className={styles.global1}>
            <h2>Comment prendre un rendez-vous sur Nativys ?</h2>
            <p>
              {" "}
              Pour prendre un rendez-vous sur la plateforme Natives, suivez
              simplement ces étapes :
            </p>
            <ul>
              <li>
                Allez y sur l'apple store ou le play store de votre smartphone
                et cherchez NATIVYS ensuite cliquez sur installer, ou consultez
                le site Nativys.com.{" "}
              </li>
              <li>
                Le téléchargement est terminé, vous pourrez désormais recherchez
                la prestation souhaitée dans votre établissement préféré en
                utilisant le moteur de recherche
              </li>
              <li>
                Une fois votre choix est fait, choisissez la date et l'horaire
                qui vous conviennent ainsi que le mode de paiement désiré
              </li>
              <li>
                Pour vous identifier au rendez vous, la création du compte est
                nécessaire
              </li>
              <li>
                {" "}
                Après validation, vous recevrez un sms et email de confirmation
                de rendez-vous. Finalement, SOURIEZ, votre journée va bien se
                lancer.
              </li>
            </ul>
            <h2> Comment modifier ou annuler un rendez-vous sur Nativys ?</h2>
            <p>
              Vous pouvez modifier ou annuler gratuitement votre réservation
              jusqu’à 24h avant l’heure de rendez-vous. C’est simple, vous
              pouvez le faire vous-même directement depuis votre compte dans la
              partie ''Mes réservations''.
            </p>
            <p>Comment gérer un rendez-vous sur Nativys</p>
            <p>Gérer vos rendez-vous sur Nativys, c’est aussi simple : </p>
            <ul>
              <li>
                {" "}
                Cliquez sur l'icône ''Mon compte'' en haut de la page Nativys
              </li>
              <li> Renseignez votre email et votre mot de passe </li>
              <li>
                La liste de vos rendez-vous apparaît ainsi qu’une liste de vos
                rendez-vous passés. Cela vous indique tout ce que vous devez
                savoir, y compris l'adresse du salon, les informations sur les
                prestations, le membre de l'équipe avec lequel vous avez
                réservé. Comme vous pouvez reprendre votre rendez-vous en
                cliquant sur ''reprendre rendez-vous'' ou vous pouvez consulter
                le chemin pour trouver votre établissement de beauté en allant
                sur ''carte'' et vous suivez les orientations.{" "}
              </li>
            </ul>
            <h2> Comment puis-je savoir si mon rendez-vous est confirmé ? </h2>
            <p>
              {" "}
              Une fois que votre réservation a été effectuée, vous recevez un
              SMS et un email de confirmation.
            </p>
            <h2>Comment régler ma préstation ?</h2>
            <p>
              {" "}
              La plateforme Nativys est entièrement gratuite, elle ne vous
              demande pas de payer d’avance. Vous réglerez donc votre prestation
              de beauté directement chez votre professionnel de beauté en
              utilisant votre mode de paiement désiré.
            </p>
            <h2> Où trouver l'adresse du salon ?</h2>
            <p>
              Vous pouvez trouver l’adresse de votre salon sur votre page profil
              sur le site nativys.com avec une petite description du salon et un
              lien vers Google map pour trouver facilement l'itinéraire. Comme
              vous pouvez trouver également l’adresse d’établissement indiquée
              dans votre SMS ou email de confirmation ou bien dans le détail de
              votre réservation dans la rubrique "Mes réservations" sur votre
              compte Nativys.
            </p>
            <h2> Où trouver le numéro de téléphone du salon ? </h2>
            <p>
              {" "}
              Vous pouvez trouver aussi le numéro de votre salon sur votre page
              profil sur le site nativys.com ainsi que dans le détail de de
              votre réservation dans la rubrique " Mes réservations" sur votre
              compte Nativys. Le numéro de téléphone est aussi mentionné sur
              votre sms et email de confirmation de rendez-vous.{" "}
            </p>
          </div>
          <h1>Avis Nativys</h1>
          <div className={styles.global1}>
            <h2>Comment donner un avis sur Nativys ?</h2>
            <p>
              {" "}
              Vous voulez faire l'expérience de vous ? Les clients de Nativys
              (et leur partenaires) ont aussi hâte de savoir ce que vous en avez
              pensé. Juste après votre rendez-vous, vous allez recevoir dans
              votre boite mail, un lien vous permettant de publier un avis
              concernant la prestation chez nos partenaires ainsi que la qualité
              d’accueil. L’avis peut également être lissé directement sur
              l’espace ''Gérer mes RDV'' du site ou de l’application Nativys.
            </p>
            <h2> Comment supprimer ou modifier un avis ? </h2>
            <p>
              Tant que votre avis n’a pas été modéré par le salon partenaire,
              vous êtes en mesure de le modifier sur l’espace ''Gérer mes RDV''
              du site Nativys comme vous aurez la possibilité de le supprimer
              définitivement (vous pouvez jeter un coup d'œil rapide à nos
              Conditions Générales d’Utilisation relatives aux avis “CGU” pour
              plus d’informations).{" "}
            </p>
            <h2> Pourquoi laisser un avis ? </h2>
            <p>
              Chez Nativys, nous accordons une grande importance aux avis de nos
              clients, ces avis partagés amènent les autres clients à prendre la
              bonne décision, quel soin de beauté à réserver et quel employé
              choisir. C'est également très utile pour nos salons de beauté
              partenaires à améliorer continuellement leurs services. Alors
              allez-y, partagez votre expérience.
            </p>
          </div>
          <h1>Compte Nativys</h1>
          <div className={styles.global1}>
            <h2> Comment créer un compte sur Nativys ?</h2>
            <p>
              Cliquez sur l'icône en haut à droite de la page d’accueil Nativys.
              Vous pouvez créer votre compte en quelques secondes en renseignant
              les informations suivantes : nom, prénom, numéro de téléphone
              portable, email et un mot de passe valide. Un code vous sera
              envoyé, ce code permettra de valider la création de votre compte
              Nativys.
              <br /> Oups ! votre profil a été créé, vous pourrez désormais
              commencer l'aventure.{" "}
            </p>
            <h2>Est-il nécessaire d'avoir un compte pour réserver ? </h2>
            <p>
              Oui, la création d’un compte sur Nativys est nécessaire, cela vous
              permettra de prendre des rendez-vous chez nos établissements de
              beauté partenaires, voir vos anciens rendez-vous, reprendre vos
              rendez-vous...Ne vous inquiétez pas vos données personnelles
              collectées dans le cadre de votre utilisation de notre plateforme
              sont protégées et ne seront pas utilisées que dans le seul but
              d’améliorer la qualité de service (voir CGU pour plus de détails).
            </p>
            <h2>Que faire si j’ai oublié mon mot de passe ? </h2>
            <p>
              En cas d’oubli de votre mot de passe, il vous suffira d’aller sur
              l’application Nativys ou sur le site nativys.com, consultez la
              page “Mon compte”, cliquez sur mot de passe oublié puis entrez
              votre adresse mail. Un mail vous sera envoyé, vous pourrez cliquer
              sur le lien pour réinitialiser votre mot de passe.
            </p>
            <h2> Comment supprimer mon compte Nativys ?</h2>
            <p>
              {" "}
              Pour supprimer votre compte Nativys, connectez-vous à votre compte
              en cliquant sur "supprimer mon compte". Comme vous pouvez demander
              à Nativys de le faire au contact@nativys.com.{" "}
            </p>
            <p> Nous contacter </p>
            <p>
              {" "}
              Si vous avez d’autres questions, nous serons ravis de vous aider.
              Vous pourrez nous contacter au +212 08 08 57 17 02 ou à l’adresse
              mail suivante : support@nativys.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
