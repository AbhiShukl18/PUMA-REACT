import React from 'react'
import "../Styles/home.css"
import Footer from './Footer'
const Home = () => {
  return (
    <>
    
    <div>
    <link rel="stylesheet" href="../Styles/home.css" />
    <div className='main-body'>

      <div className='end-of-season-sale'>
        <div id='text-box-1'>

          <h1>END OF SEASON SALE</h1>
          <h3>NEW STYLES ADDED</h3>
          <h5>+ EXTRA 5% OFF ON ALL ONLINE PAYMENTS</h5>
          <div id='for-text-box'>
            <button>FOR HIM</button>
            <button>FOR HER</button>
            <button>FOR KIDS</button>
          </div>
        </div>
      </div> {/* class end-of-season-sale ends here */}

    <div className='cool-styles'>

      <div className='cool-styles-box1'>

        <h1>COOL STYLES AT HOT DISCOUNTS</h1>
        <h3>FLAT 40% OFF | + EXTRA 5% OFF ON ALL ONLINE PAYMENTS</h3>
        <p id='images'>
          <img src="https://image.useinsider.com/pumaindia/defaultImageLibrary/sneakers-10%201%201%202-1720441879.jpeg" alt="" />
          <img src="https://image.useinsider.com/pumaindia/defaultImageLibrary/T-SHIRTS-10%201%201%201%20%281%29-1720441896.jpeg" alt="" />
          <img src="https://image.useinsider.com/pumaindia/defaultImageLibrary/TRAINING-10%201%201%201-1720441906.jpeg" alt="" />
          <img src="https://image.useinsider.com/pumaindia/defaultImageLibrary/MOTORSPORT-10%201%201%201-1720441933.jpeg" alt="" />
          <img src="https://image.useinsider.com/pumaindia/defaultImageLibrary/SPORTS-10%201%201%201-1720441944.jpeg" alt="" />
        <img src="https://image.useinsider.com/pumaindia/defaultImageLibrary/kids-110-summer-favs%201%201%201-1720441958.jpeg" alt="" />
        </p>
      </div> {/* cool-styles-box1 ends here */}

    </div> {/* cool-styles ends here*/}
      
    <div className='see-the-game'>

</div>

    </div> {/* class main-body ends here */}
    
    <Footer/>
    </div> 
    </>
  )
}

export default Home
