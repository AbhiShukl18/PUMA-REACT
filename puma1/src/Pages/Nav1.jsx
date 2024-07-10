import React from 'react'
import "../Styles/nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Nav1 = () => {
  return (
   <div>
   <>
   
    <link rel="stylesheet" href="../Styles/nav.css"/>
    

  
        <div classNameName="main-body">
            <div className="firstnav">
                <p><b>Free Deliveries. Free Returns.</b> </p>
            </div>
    
            <div className="secondnav">
                <div id="logo">
                    <img 
                    src="https://static.vecteezy.com/system/resources/previews/010/994/248/non_2x/puma-logo-white-symbol-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg"
                     alt="Puma"
                     width="100%"
                     height="100%"/>
                </div>
                <div id="menu">
                    
                    <p>New</p>
                    <p>Women</p>
                    <p>Men</p>
                    <p>Kids</p>
                    <p>Motorsport</p>
                    <p>Collaborations</p>
                    <p>Sports</p>
                    <p>Outlet</p>
                
                </div>
                <div className="last">
                    <div id="search">
                    <p id='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} /> </p>
                    <p> SEARCH </p>
                                    </div>   
                <div className="icons"> 
                <p><FontAwesomeIcon icon={faHeart} /></p>
                <p><FontAwesomeIcon icon={faCartShopping} /></p>
                <p><FontAwesomeIcon icon={faUser} /></p>
            </div> 
            </div>
    
            </div>
    
            <div className="thirdnav">
                <p id="firstline">Extra 15% OFF*</p>
                <p id="secondline">*On Clothing above ₹1999 । * on footwear above ₹3999</p>
                <p id="thirdline">Auto-applied at Checkout । *Exclusions apply</p>
            </div>
    
        </div>
  
    </>
    </div>
  )
}

export default Nav1
