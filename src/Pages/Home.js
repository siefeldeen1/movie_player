import React from 'react'
import Body from '../components/Body/Body';
import Footer from "../components/Footer/Footer"
import Header from '../components/Header/Header'
import Movies from '../Movies.json'


function Home() {
  return (
   <div >
   
    <Header home={true}/>
 <Body movies = {Movies}/>
   
   <Footer/>
   
   
   </div>

  )
}

export default Home