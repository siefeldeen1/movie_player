import React , { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Movies from '../Movies.json'
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer"
import ".././components/Card/Card.css"
function Tv_series() {
  const navigate = useNavigate()
const [seriez, setseries] = useState([])
useEffect(() => {
  let Tv_series = Movies.filter((movie_cat) => movie_cat.cat == "series") 
setseries(Tv_series)

}, [null])


  return (
    <div style={{height:"100%"}}>
    <Header series={true}/>
    {seriez.map((ele,i)=>{
     return(
<div  style={{display:"grid",gridTemplateColumns:"25% 25% 25% 25%",gap:"25px",justifyContent:"center",justifyItems:"center"}}>
      <div className='mother'>

      <div  key={i} className='kid' onClick={() =>
                navigate("/Discribtion_page/"+ele.id) }>

          <img  className='img_banner' src={ele.img} alt=""/>
                  <div style={{maxWidth:"90%",textAlign:"center",fontWeight:"500"}}>{ele.name}</div> 
                  <div style={{textAlign:"center",fontSize:"20px",fontWeight:"700",color:"black"}}>{ele.rating}</div>
                  
      </div>
          
         
          </div>
         
   </div> 


     )
     })
     
    }
<Footer />
    </div>
  )
}

export default Tv_series