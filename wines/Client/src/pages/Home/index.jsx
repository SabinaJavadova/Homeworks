import React, { useState, useEffect } from "react";
import styles from "../Home/index.module.scss";
import { BASE_URL } from "../../constant";
import axios from "axios";
import Grid from "@mui/material/Grid";

const Home = () => {
  const [wines, setWines] = useState([]);
  const [winesCopy, setWinesCopy] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getAllWines = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
      setWines(res.data);
      setWinesCopy(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredWines = wines.filter((w) =>
    w.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  useEffect(() => {
    getAllWines();
  }, []);

  const toggleWishlist = (wine) => {
    console.log(`Toggling wishlist for: ${wine.title}`);
  };

  return (
    <>
        <div className={styles["container"]}>
        <img src="https://cdn.mos.cms.futurecdn.net/Us7L9tSDomCam2Cyb6hQoB-1200-80.jpg" alt="" />
        <p>Royal Wine</p>
        <h1>Grape Wine</h1>
    </div>

      <Grid container spacing={2}>
        {wines.length > 0 &&
          filteredWines.map((w) => (
            <Grid item xs={12} md={6} lg={4} key={w._id}>
              <div  className={styles.wine}>
                <img src={w.img} alt={w.title}/>
                <h3>{w.title}</h3>
                <p>${w.price}</p>
              </div>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Home;
