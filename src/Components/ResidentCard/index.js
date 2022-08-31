import styles from "./index.module.css";

const ResidentCard = ({
  id,
  image,
  species,
  name,
  type,
  gender,
  origin,
  status,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div>
          <img src={image} alt="" />
          <div className={styles.cardHeader}>
            <h3 className={styles.characterName}>{name}</h3>
          </div>
          <div className={styles.characterInfo}>
            <p className={styles.info}>
              <b>species:</b> {species}
            </p>
            <p className={styles.info}>
              <b>type:</b> {type}
            </p>
            <p className={styles.info}>
              <b>gender:</b> {gender}
            </p>
            <p className={styles.info}>
              <b>origin:</b> {origin?.name}
            </p>
            <p className={styles.info}>
              <b>status:</b> {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentCard;
