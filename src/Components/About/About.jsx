import React from 'react'
import "./About.css"
import { useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const About = ({ bottleRef }) => {

    useEffect(()=>{
        
        if(!bottleRef?.current) return;

        gsap.fromTo(".hl",{
            y:-40,
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:0.8,
            stagger:1,
            scrollTrigger:{
                trigger: ".about",
                start: "-60%",
                end: "0%",
                scrub:true,
                // markers: true,
            }
        })

        gsap.fromTo(".bw",{
            y:-40,
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:0.1,
            scrollTrigger:{
                trigger: ".about",
                start: "-60%",
                end: "-50%",
                scrub:true,
                // markers: true,
            }
        })

        gsap.fromTo(".bq",{
            x:-50,
            opacity:0
        },{
            x:0,
            opacity:1,
            duration:1,
            stagger:2,
            scrollTrigger:{
                trigger: ".about",
                start: "-60%",
                end: "-10%",
                scrub:true,
                // markers: true,
            }
        })

        gsap.fromTo(".bi",{
            x:50,
            opacity:0
        },{
            x:0,
            opacity:1,
            duration:1,
            stagger:2,
            scrollTrigger:{
                trigger: ".about",
                start: "-60%",
                end: "-10%",
                scrub:true,
                // markers: true,
            }
        })

        gsap.from(bottleRef.current,{
            x:60,
            y:50,
            width: 350,
            rotation: 0
        })
        
        gsap.to(bottleRef.current,
            {
            x:500,
            width: 280,
            rotation: 10,
            scrollTrigger:{
                trigger: ".about",
                start: "0%",
                end: "145%",
                scrub:true,
                // markers: true,
            }
        })

    },[])

  return (
    <>
        <div className="about">
            <div className="heritageLine">
            
                <div className="hl ourSelection">Our Selection</div>

                <div className="hl heritageHeading">The Heritage Line</div>

                <div className="hl heritageSubtext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quae aliquid totam voluptate iste dicta qui quidem minima nihil consectetur?</div>
            
                <button className='hl exploreAllBtn'>Explore All</button>
            
            </div>

            <div className="aboutBottleImg">
                {/* <img src="/bottleImg.png" alt="" className='aboutBottleLogo'/> */}
            </div>

            <div className="brewedWith">
                
                <div className="bw brewedWithHeading">Brewed With</div>

                <div className="brewedItems">
                    
                    <div className="brewedItem">
                        <div className="bq brewedQuantity">500ml</div>
                        <div className="bi brewedItemDetails">
                            <div className="brewedItemName">Spring Water</div>
                            <div className="brewedItemSubText">Pure glacier-sources for clarity and smoothness.</div>
                        </div>
                    </div>
                    
                    <div className="brewedItem">
                        <div className="bq brewedQuantity">250g</div>
                        <div className="bi brewedItemDetails">
                            <div className="brewedItemName">Organic Barley</div>
                            <div className="brewedItemSubText">Locally malted for a rich. golden body.</div>
                        </div>
                    </div>
                    
                    <div className="brewedItem">
                        <div className="bq brewedQuantity">100g</div>
                        <div className="bi brewedItemDetails">
                            <div className="brewedItemName">Wild Hops</div>
                            <div className="brewedItemSubText">Foraged from mountain slopes, slow-dried.</div>
                        </div>
                    </div>
                    
                    <div className="brewedItem">
                        <div className="bq brewedQuantity">50g</div>
                        <div className="bi brewedItemDetails">
                            <div className="brewedItemName">Roasted Oak</div>
                            <div className="brewedItemSubText">Infused for warmth and oaky aroma.</div>
                        </div>
                    </div>
                    
                    <div className="brewedItem">
                        <div className="bq brewedQuantity">1%</div>
                        <div className="bi brewedItemDetails">
                            <div className="brewedItemName">Natural Yeast</div>
                            <div className="brewedItemSubText">Wild fermented, slow-aged for balance.</div>
                        </div>
                    </div>
                
                </div>

            </div>
        </div>
    </>
  )
}

export default About