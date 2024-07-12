import React from 'react'
import "../Styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faYoutube,faPinterest,faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (

    <>  
    <link rel="stylesheet" href="../Styles/footer.css" />

    <div className='footer-body'>
    <div className='footer-body-first'>

    <div className='first-box'>
        <h2>SUPPORT</h2>
        <p>Contact Us</p>
        <p>Promotions & Sale</p>
        <p>Track Order</p>
        <p>Shoe Care</p>
        <p>Tech Glossary</p>
        <p>Initiate Return / Exchange</p>
        <p>Running Shoes</p>
    </div>
    <div className='second-box'>

    <p>FAQs</p>
    <p>My Account</p>
    <p>Exchange & Return Policy</p>
    <p>Privacy Policy</p>
    <p>Terms & Conditions</p>
    <p>Sneakers</p>
    <p>Cookie Settings</p>


    </div>
    <div className='third-box'>
    <h2>ABOUT</h2>
    <p>Company</p>
    <p>Corporate News</p>
    <p>Press Center</p>
    <p>Investors</p>
    <p>Sustainability</p>
    <p>Careers</p>
    <p>Store Locator</p>
    <p>PUMA Articles</p>
    </div>
    <div className='fourth-box'>
    <h2>STAY UP TO DATE</h2>

    <h3>Sign Up for Email</h3>
    <ul>
        <li> <FontAwesomeIcon icon={faYoutube} /> </li>
        <li><FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} /> </li>
        <li><FontAwesomeIcon icon={faPinterest} style={{color: "#ffffff",}} /></li>
        <li><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></li>
        <li><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} /></li>
    </ul>
    </div>

    </div>
    <hr />
    <div className='footer-body-last'>

        <div className='box1'></div>
        <div className='box2'></div>
        <div className='box3'></div>
    </div>
   
    </div>
    </>
  )
}

export default Footer
