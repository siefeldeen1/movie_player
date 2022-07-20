import React from 'react'
import './Header.css';
import {useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';

function Header({home,movies,series,most}) {
  
  
  
  
  const navigate = useNavigate()
  return (
    <header  className='header' >
  <div className='left_header' >
  <h1>45K</h1>
  </div>
 
  <div className='right_header'  >
  <h3 onClick={() =>navigate("/")} className={home ? "active" : ""}  >Home</h3>
  <h3 onClick={() =>navigate("/Movies")} className={movies ? "active" : ""}>Movies</h3>
  <h3 onClick={() =>navigate("/Tv_series")}  className={series ? "active" : ""}>Tv series</h3>
  <h3  onClick={() =>navigate("/Most_watched")}  className={most ? "active" : ""}>Most watched</h3>

  </div>




    </header>
  )
  


}




export default Header






