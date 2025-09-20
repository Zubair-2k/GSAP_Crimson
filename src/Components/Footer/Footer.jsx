import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
        <div className="footer">
            
            <div className="footerLogoName">Craftedge</div>

            <ul className="footerNavItems">
                <li><a href="">Home</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">Contact</a></li>
            </ul>

            <div className="footerSocialMedia">
                <div className="footerInstagram">
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="footerLinkedIn">
                    <i class="fa-brands fa-linkedin"></i>
                </div>
                <div className="footerTwitter">
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer