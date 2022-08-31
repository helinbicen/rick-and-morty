import styles from "./index.module.css";

const LocationCard = ({ id, image, residents, name, type, dimension }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <li key={id}>
          <div className={styles.cardHeader}>
            <h3 className={styles.locationName}>{name}</h3>
          </div>
          <div className={styles.locationInfo}>
            <p className={styles.info}>
              <b>Type:</b> {type}
            </p>
            <p className={styles.info}>
              <b>Dimension:</b> {dimension}
            </p>
            <p className={styles.info}>
              <b>Residents:</b> {residents}
            </p>
          </div>
        </li>
      </div>
    </div>
  );
};

export default LocationCard;
