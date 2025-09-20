import React, { useEffect } from 'react'
import "./Navbar.css"
import { gsap } from "gsap";

const Navbar = () => {

  useEffect(()=>{

    gsap.fromTo(".logo",{
      opacity:0,
    },{
      opacity:1,
      duration:2,
      delay:0.2
    })

    gsap.fromTo(".navbarItem",
      {y:-100,opacity:0},
      {
      y:0,
      opacity:1,
      duration:0.5,
      ease:"power1.out",
      stagger:0.5
      })
  },[])

  return (
    <>
        <nav className="navbar">
            <div className="logo">
                <h2 className='logoName'>Craftedge</h2>
            </div>
            <ul className="navbarItems">
                <li className='navbarItem'><a href="">Home</a></li>
                <li className='navbarItem'><a href="">Features</a></li>
                <li className='navbarItem'><a href="">Product</a></li>
                <li className='navbarItem'><a href="">Contact</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar