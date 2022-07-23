import React,{useState,useEffect} from 'react'
import Header from '../components/Header/Header'
import Movies from '../Movies.json'
import Footer from "../components/Footer/Footer"
import { useNavigate } from "react-router-dom";
import "./Most_watched.css"
function Most_watched() {
  const navigate = useNavigate()
  const [top, settop] = useState([])
  useEffect(() => {
    let top_m = Movies.filter((movie_rank) => movie_rank.rank == "1st" || movie_rank.rank == "2nd" || movie_rank.rank == "3rd"|| movie_rank.rank == "4th"|| movie_rank.rank == "5th") 
  settop(top_m)
  
  }, [null])
  
  
    return (
      <>
      <Header most={true}/>
      <div className='cony' >
        
      {top.map((ele,i)=>{
        
       return(
        
<>

 
  
        <div  key={i} className='kiddo' onClick={() =>
                  navigate("/Discribtion_page/"+ele.id) }>
            <img  className='img_banner' src={ele.img} alt=""/>
                    <div style={{maxWidth:"90%",textAlign:"center",fontWeight:"500"}}>{ele.name}</div> 
                    <div style={{textAlign:"center",fontSize:"20px",fontWeight:"700",color:"black"}}>{ele.rating}</div>
         </div>
            
           
  
            
           
 
  
  </>
  
       )
       })
      }
  </div>
  <Footer/>
      </>
    )
}

export default Most_watched