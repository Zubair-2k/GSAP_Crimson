import React from 'react'
import "./Timelines.css"
import { useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Timelines = ({bottleRef}) => {

    useEffect(()=>{

        // const tl =gsap.timeline()
        
        if(!bottleRef?.current) return;

        gsap.fromTo(".timelineHeading",
            {
                // x:-80,
                opacity:0
            },
            {
                // x:0,
                opacity:1,
                scrollTrigger:{
                    trigger: ".timelines",
                    start: "-38%",
                    end: "-15%",
                    scrub:true,
                    // markers: true,
                },
            })

        gsap.fromTo(".timelineOneImg",
            {
                x:-80,
                opacity:0
            },
            {
                x:0,
                opacity:1,
                scrollTrigger:{
                    trigger: ".timelines",
                    start: "3%",
                    end: "18%",
                    scrub:true,
                    // markers: true,
                },
            })
            gsap.fromTo(".tOnedetail",
                {
                    x:-50,
                    // y:-50,
                    opacity:0
                },
                {
                    x:0,
                    // y:0,
                    opacity:1,
                    stagger:2,
                    scrollTrigger:{
                        trigger: ".timelines",
                        start: "16%",
                        end: "23%",
                        scrub:true,
                        // markers: true,
                    },
                })
                gsap.fromTo(".timelineTwoImg",
                    {
                        x:80,
                        opacity:0
                    },
                    {
                        x:0,
                        opacity:1,
                        scrollTrigger:{
                            trigger: ".timelines",
                            start: "40%",
                            end: "46%",
                            scrub:true,
                            // markers: true,
                        },
                    })
                gsap.fromTo(".tTwodetail",
                    {
                        x:50,
                        // y:-50,
                        opacity:0
                    },
                    {
                        x:0,
                        // y:0,
                        opacity:1,
                        stagger:2,
                        scrollTrigger:{
                            trigger: ".timelines",
                            start: "46%",
                            end: "53%",
                            scrub:true,
                            // markers: true,
                        },
                    })

        gsap.set(bottleRef.current,{
            x:500,
            // y:50,
            width: 280,
            rotation: 10
        })
        
        gsap.to(bottleRef.current,
            {
            x:-300,
            // y:50,
            width: 280,
            rotation: -10,
            scrollTrigger:{
                trigger: ".timelines",
                start: "25%",
                end: "60%",
                scrub:true,
                // markers: true,
            },
        })

    },[bottleRef])

  return (
    <>
        <div className="timelines">
            <div className="timelineHeading">
                Our Timeline
            </div>

            <div className="timelineOne">
                
                <div className="timelineOneImg">
                    <img src={`${import.meta.env.BASE_URL}first_batch.png`} alt="timelineImg" className='timelineLogo'/>
                    <div className="timelineOneYear">1984</div>
                </div>

                <div className="timelineOneDetails">
                    <div className="tOnedetail timelineOneName">The First Batch</div>
                    <div className="tOnedetail timelineOneSubText">Our journey began in a wooden barn nestled among oak trees. The first batch was brewed with hand-milted barley and patience.</div>
                </div>

                <div className="timelineOneBottleImg">
                    {/* <img src="/bottleImg.png" alt="" className='timelineOneBottleLogo'/> */}
                </div>
            </div>

            <div className="timelineTwo">

                <div className="timelineTwoBottleImg">
                    {/* <img src="/bottleImg.png" alt=""  className='timelineTwoBottleLogo'/> */}
                </div>

                <div className="timelineTwoDetails">
                    <div className="tTwodetail timelineTwoName">The Fire Oak Revival</div>
                    <div className="tTwodetail timelineTwoSubText">A lightning storm sparked a fire that nearly ended our legacy. But from  the ashes, we rebuilt charred oak barrels, reclaimed tools, and a vow to never comprommise the craft.</div>
                </div>
                
                <div className="timelineTwoImg">
                    <img src={`${import.meta.env.BASE_URL}first_batch.png`} alt="timelineImg" className='timelineLogo'/>
                    <div className="timelineTwoYear">1989</div>
                </div>


            </div>
        </div>
    </>
  )
}

export default Timelines