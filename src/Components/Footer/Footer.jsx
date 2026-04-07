import React from 'react'
import "./Footer.css"

const Footer = () => {

    const handleFooterClick = (e,sid) =>{
        e.preventDefault();

        const pageId = document.querySelector(`#${sid}`);

        pageId.scrollIntoView({behavior: "smooth"});

        window.history.replaceState(null,null,null);
    }

    return (
    <>
        <div className="footer">
            
            <div className="footerLogoName">Craftedge</div>

            <ul className="footerNavItems">

                <li>
                    <a onClick={(e)=>handleFooterClick(e,"Home")}>Home</a>
                </li>

                <li>
                    <a onClick={(e)=>handleFooterClick(e,"Feature")}>Feature</a>
                </li>

                <li>
                    <a onClick={(e)=>handleFooterClick(e,"History")}>Timeline</a>
                </li>

                {/* <li><a href="">Contact</a></li> */}
            </ul>

            <div className="footerSocialMedia">
                <div className="footerInstagram">
                    <i class="fa-brands fa-instagram">I</i>
                </div>
                <div className="footerLinkedIn">
                    <i class="fa-brands fa-linkedin">L</i>
                </div>
                <div className="footerTwitter">
                    <i class="fa-brands fa-twitter">T</i>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer