import styles from "./TextField.module.css";

const TextField = (props) => {
  return <input type="text" className={styles.TextField} {...props} />;
};

export { TextField };
