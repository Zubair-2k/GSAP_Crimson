import { forwardRef, useEffect } from 'react'
import "./Bottle.css"
import { gsap } from "gsap";

const Bottle = forwardRef((_, bottleRef) => {

  useEffect(()=>{
    gsap.from(bottleRef.current,{
            x:0,
            y:0,
            width: 400,
            rotation: 18,
            opacity:0,
            scale:0,
        })

    gsap.to(bottleRef.current,{
            x:0,
            y:0,
            width: 400,
            rotation: 18,
            opacity:1,
            scale:1,
            duration:1,
            delay:3,
        })
  })

  return (
    <>
        <div className="bottle">
            <img ref={bottleRef} src="/bottleImg.png" alt="Bottle-Img" className='bottleImg'/>
        </div>
    </>
  )
});

export default Bottle