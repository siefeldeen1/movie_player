import React from 'react'
import Body from '../components/Body/Body';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer"

function Movies() {
  return (
    <div >
    <Header movies={true}/>
    
    <div style={{display:"grid",gridTemplateColumns:"25% 25% 25% 25%",gap:"25px",justifyContent:"center",justifyItems:"center",}} ><Card /></div>
    
   
    <Footer/>
    </div>
    
  )
}

export default Movies