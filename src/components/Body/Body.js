import React from 'react'
import './Body.css';
import { GrFormNextLink , GrFormPreviousLink } from "react-icons/gr";
import { BrowserRouter as router, Routes, Route ,Link,useNavigate } from "react-router-dom";

const next =()=>{
  document.querySelector(".movie_banners_cont").scrollTo({
    top:0,
    left:window.innerWidth,
    behavior:"smooth"
  })
  console.log(document.querySelector(".movie_banners_cont").scrollLeft);
}
const prev = ()=>{
  document.querySelector(".movie_banners_cont").scrollTo({
    top:0,
    left: -window.innerWidth,
    behavior:"smooth"
  })
  console.log(document.querySelector(".movie_banners_cont").scrollLeft);
}



 function Body({movies}) {
  const navigate = useNavigate()
  return (
    <>
    
    <div  className='div_main_img'>
        <img  className='main_img'  src="https://i.pinimg.com/originals/5f/5b/23/5f5b23e16624652074f017c3e32864c4.jpg" alt="" />
    </div>
    
    <div className='pop_now'>
   
   <h2>Popular on 45K</h2>
    <div className='arrows' >
    <GrFormPreviousLink size={45} onClick={prev} />
    <GrFormNextLink  size={45} onClick={next}    />

    </div>
     <div className='movie_banners_cont'>
{
movies?.map((ele,i)=>{
  
  return(
             <div key={i} className='movie_banner'>
                <img  className='img_banner' src={ele.img} alt="" onClick={() =>
                  navigate("/Discribtion_page/"+ele.id) } />
                 <div style={{maxWidth:"90%",textAlign:"center",fontWeight:"500"}}>{ele.name}</div> 
                 <div style={{textAlign:"center",fontSize:"20px",fontWeight:"700",color:"black"}}>{ele.rating}</div>
              </div>
  

    )
    
})


}
    
    </div>


    </div>
    
    
    </>



  )
}

export default Body