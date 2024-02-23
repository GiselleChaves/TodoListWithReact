import style from "./Footer.module.css";

const Footer = (props) => {
  const { creator } = props;
  const year = new Date().getFullYear();
  return (
    <div className={style.Footer}>
      <p>
        React - {year} - {creator}
      </p>
    </div>
  );
};

export { Footer };
