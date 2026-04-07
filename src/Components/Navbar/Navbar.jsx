import { useLayoutEffect } from 'react'
import { useGSAP } from "@gsap/react";
import "./Navbar.css"
import { gsap } from "gsap";

const Navbar = ({isIntroPlaying}) => {
    
    useGSAP(()=>{
      
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

  const handleClick = (e,sid) =>{
    e.preventDefault();

    const pageId = document.querySelector(`#${sid}`);

    pageId.scrollIntoView({behavior: "smooth"});

    window.history.replaceState(null,null,null);
  }

  return (
    <>
        <nav className="navbar">
            <div className="logo">
                <h2 className='logoName'>Craftedge</h2>
            </div>
            <ul className="navbarItems">
                <li className='navbarItem'>
                  <a
                onClick={(e)=>handleClick(e,"Home")}
                style={{pointerEvents: isIntroPlaying ? "none": "auto",
                  opacity: isIntroPlaying ? 0.5 : 1
                }}
                >
                    Home</a>
                </li>

                <li className='navbarItem'>
                  <a
                  onClick={(e)=>handleClick(e,"Feature")}
                  style={{pointerEvents: isIntroPlaying ? "none": "auto",
                  opacity: isIntroPlaying ? 0.5 : 1
                }}
                >
                    Feature</a>
                </li>


                <li className='navbarItem'>
                  <a
                  onClick={(e)=>handleClick(e,"History")}
                  style={{pointerEvents: isIntroPlaying ? "none": "auto",
                  opacity: isIntroPlaying ? 0.5 : 1
                }}
                >
                    Timeline</a>
                </li>

                {/* <li className='navbarItem'><a href="">Contact</a></li> */}
            </ul>
        </nav>
    </>
  )
}

export default Navbar