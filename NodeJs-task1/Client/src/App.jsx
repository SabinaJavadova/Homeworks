import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
function App() {
  const BASE_URL = "http://localhost:3000";
  const [info,setInfo] =useState([]);

  const getAllData = async () => {
    try {
      const responce = await axios(`${BASE_URL}/products`)
      setInfo(responce.data || [])
    } catch (error) {
      console.log(error);
      
    }
  }

  const deleteProduct = async (pId) => {
    try {
      const res = await axios.delete (`${BASE_URL}/products/${pId}`)
      if (res.status===200) {
        setInfo(info.filter((p)=>p.id !==pId))

      }else{
        throw new Error("Failed!");
        
      }
    } catch (error) {
      console.log(error);
      
    }
  }


useEffect(() => {
  
  getAllData();
}, []);


  return (
    <>
    <ul>
      {info.length>0 && info.map((p)=>{
        return(
          <li key={p.id}>
            <span>{p.title}</span>
            <button onClick={() => {
                if (window.confirm("Are you sure you want to delete?")) {
                  deleteProduct(p.id);
                }
              }}>Delete</button>
          </li>
        )   
      })}
    </ul>
    
    </>
  )
}

export default App
