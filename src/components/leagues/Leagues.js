import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./leagues.css"



const  Leagues = () => {
  const [data, setData] =useState([]);
  useEffect(() => {
    axios("https://api-football-standings.azharimm.site/leagues").then((res) =>{
      console.log(res.data.data);
      setData(res.data.data)
    })

  },[])

  
 
  return (
    <div className='Leagues-container'>
 {data.map((item)=> (
  <div key={item.id} className="leagues-div">
    <img src={item.logos.light} alt="#" />
    <h2>{item.name} </h2>
    
     </div>
 ))}
    </div>
  )
}

export default  Leagues