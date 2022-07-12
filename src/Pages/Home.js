import React from 'react'
import Body from '../components/Body/Body';
import Header from '../components/Header/Header'
import Movies from '../Movies.json'
function Home() {
  return (
   <>
   <Header/>
 <Body movies = {Movies}/>
   
   
   
   
   </>

  )
}

export default Home