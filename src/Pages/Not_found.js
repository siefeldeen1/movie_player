import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header"
function Not_found() {
  const name = window.location.pathname.split( '/' )

  return (
    <div >
    <Header/>
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <div style={{fontSize:"160px",fontWeight:"bolder",marginLeft:"60px"}}>:(</div>
    <div style={{fontSize:"30px",fontWeight:"bold",display:"flex",justifyContent:"center",marginTop:"40px"}}>Sorry...We don't have a {name[2]} page yet. <spam style={{color:"rgb(8, 116, 189)"}}>Why not check our <a href="https://www.linkedin.com/in/sief-eldeen-b038b7231/" target="_blank" style={{textDecoration: "none",color:"none"}}>linkedin</a></spam> </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Not_found