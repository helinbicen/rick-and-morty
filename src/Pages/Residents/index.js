import { api ,apiURL} from "../../Services/api";
import styles from "./index.module.css";
import { useState, useEffect } from "react";

import { useParams} from "react-router-dom"

import ResidentCard from "../../Components/ResidentCard";
import RickAndMorty from "../../Assets/RickAndMorty.jpg";

const getAllCharacterIds =  (residents) => {
  const ids =  residents?.map((url) => {
    return parseInt(url.replace(apiURL + "character/", ""));
  });

  return ids;
};


const Residents = () => {
  const [content, setContent] = useState();
  const [locationData, setLocationData] = useState();
  let { id } = useParams();

  useEffect(() => {
    async function getData() {
      api.get(`location/${id}`)
      .then((data)=>{
        setLocationData(data.data.residents)
        const ids = getAllCharacterIds(data.data.residents)
        api.get(`character/${ids}`)
        .then((data)=>{
          console.log(data)
          setContent(data?.data)
        });
      }
        
        );

    }
    getData();
    console.log(id)
  }, [id]);

useEffect(() => {
  const ids = getAllCharacterIds(locationData?.residents)

  console.log(ids)
}, [locationData])

  return (
    <div className={styles.residents}>
      <div className={styles.resident}>
        <img src={RickAndMorty} alt="" className={styles.RickandMorty} />
        <h1 className={styles.header}>RESIDENTS </h1>
        <div className={styles.container}>
          {console.log(content)}
          {content && content.length > 2? (
            content?.map((characterCard) => {
              return (
                <ResidentCard
                  key={characterCard.id}
                  id={characterCard.id}
                  name={characterCard.name}
                  species={characterCard.species}
                  type={characterCard.type}
                  gender={characterCard.gender}
                  origin={characterCard.origin}
                  image={characterCard.image}
                  status={characterCard.status}
                />
              );
            })
          ) : (
            <h1>There is no one living here.</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Residents;
