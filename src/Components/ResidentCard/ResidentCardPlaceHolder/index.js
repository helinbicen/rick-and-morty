import styles from "./index.module.css";

const ResidentCardPlaceHolder = () => {

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <span src="" alt="" />
          <div className={styles.cardHeader}>
            <h3 className={styles.characterName}>jgh</h3>
          </div>
          <div className={styles.characterInfo}>
            <p className={styles.info}>
              <b>Species: lorem lorem</b> 
            </p>
            {/* <p className={styles.info}>
              <b>Type:</b> {type}
            </p> */}
            <p className={styles.info}>
              <b>Gender: loremloree </b> 
            </p>
            <p className={styles.info}>
              <b>Origin: lorene</b> 
            </p>
            <p className={styles.info}>
              <b>Type: </b> 
            </p>
            <p className={styles.info}>
              <b>Status: </b> <span >loremmm</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentCardPlaceHolder;
