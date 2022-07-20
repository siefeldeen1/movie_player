import React,{useState,useEffect} from 'react'
import Movies from '../../Movies.json'
import "./Card.css"
import { useNavigate } from "react-router-dom";
function Card() {
    const navigate = useNavigate()

    const [mm, setmm] = useState([])
useEffect(() => {
  let mo = Movies.filter((movie_cat) => movie_cat.cat == "movies") 
setmm(mo)

}, [null])
   return(

    mm.map((ele,i)=>{
        
    
    return (
    <div className='mother'>
        <div  key={i} className='kid' onClick={() =>
                  navigate("/Discribtion_page/"+ele.id) }>

            <img  className='img_banner' src={ele.img} alt=""/>
                    <div style={{maxWidth:"90%",textAlign:"center",fontWeight:"500"}}>{ele.name}</div> 
                    <div style={{textAlign:"center",fontSize:"20px",fontWeight:"700",color:"black"}}>{ele.rating}</div>
                    
        </div>
            
            </div>
            
  )
  
})


   )
}

export default Card