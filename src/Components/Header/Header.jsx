import "./Header.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Header = ({ bottleRef, setIsIntroPlaying }) => {
    
    useGSAP(()=>{
        
        if(!bottleRef?.current) return;
        
        const ctx = gsap.context(()=>{

                document.body.style.overflow="hidden";
        
                const tl = gsap.timeline(
                {
                    onComplete: () =>{
                        document.body.style.overflow="auto";
                        setIsIntroPlaying(false);
                    }
                }
                );
        
                tl.fromTo(".headingOne",{
                    opacity:0,
                    x:300,
                },{
        
                    opacity:1,
                    x:0,
                    delay:2,
                })
        
                tl.fromTo(".headingTwo",{
                    opacity:0,
                    x:300,
                },{
        
                    opacity:1,
                    x:0,
                })
        
                tl.fromTo(".stampLogo",{
                    x:0,
                    y:0,
                    scale:10,
                    opacity:0,
                },{
                    x:0,
                    y:0,
                    scale:1,
                    opacity:1,
                    delay:0.5
                })
        
                gsap.fromTo(bottleRef.current,
                    {
                        width: 380,
                        rotation: 18
                    },
                    { 
                    x:60,
                    y:50,
                    width: 370,
                    rotation: 1,
                    scrollTrigger:{
                        trigger: ".header",
                        start: "10%",
                        end: "100%",
                        scrub:true,
                    }
                })
            // }

        })

        return () =>{
            document.body.style.overflow = "auto";
            ctx.revert();
        }

    },[])

  return (
    <>
        <div className="header" id="Home">
            <div className="bottleImg">
            </div>
            <div className="heading">

                <div className="stampImg">
                    <img src={`${import.meta.env.BASE_URL}stamp.webp`} alt="StampImg" className='stampLogo'/>
                </div>

                <div className='headingOne'>Crimson</div> 
                <div className='headingTwo'>Fermentation</div>
            </div>
        </div>
    </>
  )
}

export default Header