import styles from "./index.module.css";

import {Link} from "react-router-dom"


const LocationCard = ({
  id,
  residents,
  residentsCount,
  name,
  type,
  dimension,
}) => {

  return (
    <Link to={`/location/${id}`} >

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
              <b>Residents:</b> {residentsCount}
            </p>
          </div>
        </li>
      </div>
    </div>
    </Link>
   
  );
};

export default LocationCard;
