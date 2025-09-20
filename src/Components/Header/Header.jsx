import { useEffect, useRef, useState } from "react"
import "./Header.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Header = ({ bottleRef }) => {

    const [isAnimating, setIsAnimating] =useState(true)

    useEffect(()=>{
        window.scrollTo(0,0);
        
        if(!bottleRef?.current) return;

        document.body.style.overflow="hidden";

        const tl = gsap.timeline(
        {
            onComplete: () =>{
                document.body.style.overflow="auto";
                setIsAnimating(false);
            }
        }
        );
        
        // var headingRef = useRef(null)

        tl.fromTo(".headingOne",{
            opacity:0,
            x:300,
        },{

            opacity:1,
            x:0,
            delay:2,
            // zIndex:0
        })

        tl.fromTo(".headingTwo",{
            opacity:0,
            x:300,
        },{

            opacity:1,
            x:0,
            // zIndex:0
        })

        tl.from(bottleRef.current,{
            x:0,
            y:0,
            width: 400,
            rotation: 18,
        })

        tl.to(bottleRef.current,{ 
            x:60,
            y:50,
            width: 350,
            rotation: 0,
            scrollTrigger:{
                trigger: ".header",
                start: "10%",
                end: "100%",
                scrub:true,
                // markers: true,
            }
        })

        tl.fromTo(".stampLogo",{
            x:0,
            y:0,
            scale:10,
            opacity:0,
            // zIndex: 100
        },{
            x:0,
            y:0,
            scale:1,
            opacity:1,
            delay:0.5
            // zIndex: 100
        })

        return () =>{
            document.body.style.overflow = "auto";
        }

    },[])

  return (
    <>
        <div className="header">
            <div className="bottleImg">
                {/* <img src="/bottleImg.png" alt="BottleLogo" className='bottleLogo'/> */}
            </div>
            <div className="stampImg">
                <img src={`${process.env.PUBLIC_URL}/stamp.png`} alt="StampImg" className='stampLogo'/>
            </div>
            <div className="heading">
                <div className='headingOne'>Crimson</div> 
                <div className='headingTwo'>Fermentation</div>
            </div>
        </div>
    </>
  )
}

export default Header