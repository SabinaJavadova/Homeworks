import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import axios from "axios";

import { BASE_URL } from '../../constants';
const Home = () => {
  const [wines, setwines] = useState([])
  const [winesCopy,setwinesCopy] = useState([])
  const getWines = async () => {
    try {
      const res = await axios(`${BASE_URL}wines`)
      setwines(res.data)
      setwinesCopy(res.data)
    } catch (error) {
      console.log(error);
      
    }
  }


const filteredWines = wines.filter((w)=>w.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))

useEffect(() => {
  

  getWines()
}, [])


  return (


    <>
   <Grid container spacing={2}>
    {
      wines.length >0 && filteredWines.map((w)=>{
        return  (<Grid size={{ xs: 12, md: 6, lg: 4 }} key={w._id}>
          <div className={styles["wine"]}>
              <img src={w.imageUrl} alt={w.title} />
              <h3 className={styles.title}>{w.title}</h3>
              <p> {w.oldPrice ? <span className={styles["old-price"]}>$ {w.oldPrice}</span> : ""} $ {w.price}</p>
              <p><Rating name="half-rating" defaultValue={w.raiting} />
              </p>
              <button className={styles["cart"]}> <LuShoppingCart />
                  Add to Cart</button>
              <div style={{ display: "flex", gap: "1rem" }}>
                  <Link to={`wines/${w._id}`}><FaInfoCircle /></Link>
                  <FaRegHeart onClick={() => { toggleWishlist(w) }} />
              </div>
          </div>
      </Grid>)

      })
    }
        
    
      </Grid>
    </>
  )
}

export default Home