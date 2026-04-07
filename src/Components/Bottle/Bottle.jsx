import { forwardRef, useLayoutEffect } from 'react'
import "./Bottle.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';

const Bottle = forwardRef((_, bottleRef) => {

  useGSAP(()=>{

    gsap.from(bottleRef.current,{
            x:0,
            y:0,
          })
          
          gsap.to(bottleRef.current,{
            x:0,
            y:0,
            width: 380,
            rotation: 18,
            opacity:1,
            scale:1,
            duration:1,
            delay:3,
        })
  },[])

  return (
    <>
        <div className="bottle">
            <img ref={bottleRef} src={`${import.meta.env.BASE_URL}bottleImg.webp`} alt="Bottle-Img" className='bottleImg'/>
        </div>
    </>
  )
});

export default Bottle