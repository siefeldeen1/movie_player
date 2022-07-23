import React from 'react'
import Body from '../components/Body/Body';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer"

function Movies() {
  return (
    <div >
    <Header movies={true}/>
    
    <div className='sho' ><Card /></div>
    
   
    <Footer/>
    </div>
    
  )
}

export default Movies