import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header"
import { useParams } from 'react-router-dom';
function Not_found() {
  const {id} = useParams() 


  return (
    <div  style={{display:'grid',gridTemplateRows:"10% 50% 40%",overflow:"hidden"}}>
    <Header/>
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <div style={{fontSize:"160px",fontWeight:"bolder",marginLeft:"60px"}}>:(</div>
    <div style={{fontSize:"30px",fontWeight:"bold",display:"flex",justifyContent:"center",marginTop:"40px"}}>Sorry...We don't have a {id} page yet. <spam style={{color:"rgb(8, 116, 189)"}}>Why not check our <a href="https://www.linkedin.com/in/sief-eldeen-b038b7231/" target="_blank" style={{textDecoration: "none",color:"none"}}>linkedin</a></spam> </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Not_found