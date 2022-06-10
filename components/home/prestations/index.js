import styles from "./prestation.module.css";
import Item from "./item/item";
export default function Prestation() {
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h3>nos prestations</h3>
        <h2>Soins les plus recherchés</h2>
      </div>
      <div className={styles.main}>
        <div className={styles.item}>
          <Item
            image={
              "https://nativys.com/images_site_web/home/prestations/new1/soin_visage_desktop.jpg"
            }
            name={"Soin visage"}
          />
        </div>
        <div className={styles.item}>
          <Item
            image={
              "https://nativys.com/images_site_web/home/prestations/new1/coupe_femme_desktop.jpg"
            }
            name={"Soin visage"}
          />
        </div>
        <div className={styles.item}>
          <Item
            image={
              "https://nativys.com/images_site_web/home/prestations/new1/coupe_homme_desktop.jpg"
            }
            name={"Soin visage"}
          />
        </div>
        <div className={styles.item}>
          <Item
            image={
              "https://nativys.com/images_site_web/home/prestations/new1/epilation_desktop.jpg"
            }
            name={"Soin visage"}
          />
        </div>
        <div className={styles.item}>
          <Item
            image={
              "https://nativys.com/images_site_web/home/prestations/test/manucure_desktop.jpg"
            }
            name={"Soin visage"}
          />
        </div>
        <div className={styles.item}>
          <Item
            image={
              "https://nativys.com/images_site_web/home/prestations/new1/spa_desktop.jpg"
            }
            name={"Soin visage"}
          />
        </div>
        <div className={styles.item}>
          <Item
            image={
              "https://nativys.com/images_site_web/home/prestations/new1/massage_desktop.jpg"
            }
            name={"Soin visage"}
          />
        </div>
      </div>
    </div>
  );
}
