import { api, apiURL } from "../../Services/api";
import styles from "./index.module.css";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import ResidentCard from "../../Components/ResidentCard";
import ResidentCardPlaceHolder from "../../Components/ResidentCard/ResidentCardPlaceHolder";
import RickAndMorty from "../../Assets/RickAndMorty.jpg";

const getAllCharacterIds = (residents) => {
  const ids = residents?.map((url) => {
    return parseInt(url.replace(apiURL + "character/", ""));
  });

  return ids;
};

const Residents = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // const [locationData, setLocationData] = useState();
  let { id } = useParams();
  useEffect(() => {
    async function getData() {
      api.get(`location/${id}`).then((data) => {
        // setLocationData(data.data.residents);
        const ids = getAllCharacterIds(data.data.residents);
        console.log(ids, "ids");
        if (ids.length !== 0) {
          api.get(`character/${ids}`).then((data) => {
            setData(data?.data);
          });
        } else {
          setContent([]);
        }
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
    }
    getData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setContent(data);
    } else {
      const arr = [];
      console.log(data);
      arr.push(data);
      console.log(arr);
      setContent(arr);
    }
  }, [data]);

  // useEffect(() => {
  //   const ids = getAllCharacterIds(locationData?.residents);

  //   console.log(ids);
  // }, [locationData]);

  return (
    <div className={styles.residents}>
      <div className={styles.resident}>
        <a href="/">
          <img src={RickAndMorty} alt="" className={styles.RickandMorty} />
        </a>

        <h1 className={styles.header}>RESIDENTS </h1>
        <div className={styles.container}>


          {content.length!==0 ? content.length > 0 && !loading
            ? content?.map((characterCard) => {
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
            : [1, 2, 3, 4].map(() => <ResidentCardPlaceHolder />) :
            (<h1>There is no one living here :/</h1>)}
        </div>
      </div>
    </div>
  );
};

export default Residents;
