import React, { useEffect, useState } from 'react'
import Movies from '../Movies.json'
import "./Discribtion.css"
import Footer from "../components/Footer/Footer"
import { FaPlayCircle } from "react-icons/fa";
import { BsFillStarFill,BsFillCloudArrowDownFill } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header'
function Discribtion_page() {
  const [download, setdownload] = useState("")
    const {id} = useParams()
    const [data, setdata] = useState([])
const [link, setlink] = useState("")
  useEffect(() => {
    let my_movies = Movies.filter((movie_id) => movie_id.id === parseInt(id)) 
    setdata(my_movies);
    setlink(my_movies[0].video)
setdownload(my_movies[0].download)
 
  }, [id])
  
  return (
    <>
<Header/>


    {data.map((ele,i)=>{
     return(
      <div key={i} className='table_img'  >

   
      <img src={ele.img} alt="" />
      <table>
          
      <h1>{ele.name}</h1>
    <tr>
      <th>Language • Country</th>
      <td>{ele.Lang}</td>
    </tr>
    <tr>
      <th>Classification</th>
      <td>PG • Parental Guidance Suggested </td>
    </tr>
    <tr>
    <th>Genre</th>
    <td>{ele.Genre}</td>
    </tr>
    
    <tr >
    <th>Rating</th>
    
    <td ><BsFillStarFill color="yellow" /> {ele.rating} out of 10 </td>
  
    </tr>
    
    <tr>
    <th>Duration</th>
    <td>	{ele.Duration} </td>
    </tr>
  
    <tr>
    <th>Quality</th>
    <td>1080P</td>
    </tr>
  
    

    <tr >
    <th className='booo'>Description</th>
    <td className='hra'>{ele.description}</td>
    </tr>
  
  </table>
  
  </div>
      
     )

    }
    
    )

    }
   <div  className='btn_cont' >
<button onClick={() => window.open(download,"_target")} className='down_btn'  ><BsFillCloudArrowDownFill size={20} style={{marginRight:"5px",marginTop:"2px"}} />download </button>
<button  onClick={() => window.open(link,"_target")} className='down_btn2'  ><FaPlayCircle size={20} style={{marginRight:"5px",marginTop:"2px"}} 
/>Watch</button>
    </div> 

    
    
    
    
    <Footer/>
    </>
  )
}

export default Discribtion_page