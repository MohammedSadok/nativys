import styles from "./item.module.css";
export default function Item(props) {
  return (
    <div
      className={styles.body}
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <h3 className={styles.title}>{props.name}</h3>
    </div>
  );
}
