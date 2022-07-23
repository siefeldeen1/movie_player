import React from 'react'
import "./Footer.css"

import {useNavigate} from 'react-router-dom'
import { RiFacebookFill,RiTwitterFill,RiWhatsappFill,RiLinkedinBoxFill } from "react-icons/ri";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
function Footer() {
 
  const navigate = useNavigate()
  

  return (
    <>
    <div className='foot'>
        <div className='cole'>
            <h1>45K</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus ullam ipsum laboriosam, nam quam error hic omnis, dolorem cum numquam amet veritatis quasi. Quasi architecto quae tenetur nisi sed.</p>
        
        </div>

            <div className='cole'>
                <h3>Office <div className='under'><span className='spam'></span></div></h3>
                <p>715 Pawnee St.
                New Port Richey, FL 34653,USA</p>
                <div>sirsiefeldeen@gmail.com</div>
                <p>+20-01274346857</p>
            </div>

            <div className='cole' > 
            <h3>Links<div className='under'><span className='spam'></span></div></h3>
            <div onClick={() =>navigate("/")}>Home</div>
            <div onClick={() =>navigate("/Movies")}        >Movies</div>
            <div onClick={() =>navigate("/Tv_series")}     >TV series</div>  
            <div onClick={() =>navigate("/Most_watched")} >Most watched</div>  
            </div>

            <div  className='cole' >
               <h3>Contact us<div className='under'><span className='spam'></span></div></h3> 
            <div>
              <div>
            <input className='input' type="text" placeholder="Please Enter Text" id='popo' />
          
            <span class="underline"></span>
           <div  className='fbtn'>
           <BsFillArrowRightSquareFill  size={26 } onClick={()=> document.querySelector("#popo").value=""} />
           </div>
            </div>
            
            
            </div>
                <div className='icons'>
                  
                <RiFacebookFill   onClick={() =>
                  navigate("/Not_available_yet/"+"facebook") } className='fb' size={35}/>
                <RiTwitterFill   onClick={() =>
                  navigate("/Not_available_yet/"+"Twitter") }  className='tw' size={35}/>
                <RiWhatsappFill   onClick={() =>
                  navigate("/Not_available_yet/"+"Whatsapp") } className='wa' size={35}/>
                <div><a href="https://www.linkedin.com/in/sief-eldeen-b038b7231/" target="_blank" > <RiLinkedinBoxFill className='li' size={35}/></a></div>
                </div>
            </div>




    </div>
    
    </>
  )
}

export default Footer