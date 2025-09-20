import React,{useEffect} from 'react'
import "./Sidebar.css"
import { gsap } from "gsap";

const Sidebar = () => {

    useEffect(()=>{
        gsap.fromTo(".socialMedia div",
          {y:-100,opacity:0},
          {
          y:0,
          opacity:1,
          duration:0.6,
          ease:"power1.out",
          stagger:0.7
          })
      },[])

  return (
    <>
        <div className="sidebar">
            <div className="socialMedia">
                <div className="instagram">
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="linkedIn">
                    <i class="fa-brands fa-linkedin"></i>
                </div>
                <div className="twitter">
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar