import styles from "./index.module.css";

const ResidentCard = ({ id, image, species, name, gender, origin, status }) => {
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
              <b>Species:</b> {species}
            </p>
            {/* <p className={styles.info}>
              <b>Type:</b> {type}
            </p> */}
            <p className={styles.info}>
              <b>Gender:</b> {gender}
            </p>
            <p className={styles.info}>
              <b>Origin:</b> {origin?.name}
            </p>
            <p className={styles.info}>
              <b>Status:</b> {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentCard;
