import styles from "./article.module.css";
export default function Article(props) {
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <p>{props.name}</p>
        <p>{props.date}</p>
      </div>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></div>
      <div className={styles.text}>
        <p>
          <span>{props.type}</span>
          {props.desc}
        </p>
      </div>
      <div className={styles.btnContainer}>
        <a href="#">Voir la suite</a>
      </div>
    </div>
  );
}
