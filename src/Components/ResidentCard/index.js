import styles from "./index.module.css";
import { useEffect, useState } from "react";

const ResidentCard = ({
  id,
  image,
  species,
  name,
  gender,
  origin,
  status,
  type,
}) => {
  const [statusStyle, setStatusStyle] = useState();

  useEffect(() => {
    if (status === "Alive") {
      setStatusStyle({
        color: "#09ed59",
      });
    } else if (status === "Dead") {
      setStatusStyle({
        color: "#c90c0c",
      });
    } else {
      setStatusStyle({
        color: "#dae819",
      });
    }
  }, [status]);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <img src={image} alt="" />
          <div className={styles.cardHeader}>
            <h3 className={styles.characterName}>{name}</h3>
          </div>
          <div className={styles.characterInfo}>
            <p className={styles.info}>
              <b>Species: </b> {species}
            </p>
            {/* <p className={styles.info}>
              <b>Type:</b> {type}
            </p> */}
            <p className={styles.info}>
              <b>Gender: </b> {gender}
            </p>
            <p className={styles.info}>
              <b>Origin: </b> {origin?.name}
            </p>
            <p className={styles.info}>
              <b>Type: </b> {type !== "" ? type : "-"}
            </p>
            <p className={styles.info}>
              <b>Status: </b> <span style={statusStyle}>{status}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentCard;
