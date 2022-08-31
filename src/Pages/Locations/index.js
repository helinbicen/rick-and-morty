import { api } from "../../Services/api";
import styles from "./index.module.css";
import { useState, useEffect } from "react";

import LocationCard from "../../Components/LocationCard"
import RickAndMorty from "../../Assets/RickAndMorty.jpg"

const Locations = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    async function getData() {
      const response = await api.get(`location`);
      const result = await response.data.results;
      const pages = await response.data.info.pages;
      setContent(result);
    }
    getData();
  }, []);

  return (
    <div className={styles.locations}>
      <div className={styles.location}>
        <img src={RickAndMorty}  alt="" className={styles.RickandMorty}/>
        <h1 className={styles.header}>LOCATIONS </h1>
        <div className={styles.container}>
          {content ? (
            content.map((card) => {
              return (
                <LocationCard
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  type={card.type}
                  dimension={card.dimension}
                  residents={card.residents.length}
                />
              );
            })
          ) : (
            <h1>Carregando</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Locations;
