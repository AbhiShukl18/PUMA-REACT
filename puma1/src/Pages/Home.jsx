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

<div className='see-the-game-box'>
  <h1>SEE THE GAME LIKE WE DO</h1>
  <h3>PUMA x INDIAN OLYMPIC ASSOCIATION</h3>
  <h5 >OFFICIAL FOOTWEAR PARTNER</h5>
  <button>LEARN MORE</button>
</div> {/* see-the-game-box ends here*/}
</div> {/* see-the-game ends here*/}

<div className='see-spain'>
<div className='see-spain-box'>

  <h1>SEE SPAIN LIKE WE DO</h1>
  <h4>FOREVER. CHAMPIONS.</h4>
    <button>SHOP NOW</button>

</div> {/* see-spain-box ends here*/}

</div>{/* see-spain ends here*/}

<div className='play-loud'>
<div className='play-loud-box'>
<h1>PLAY LOUD</h1>
<h3>BREAK IT DOWN</h3>
<button>SHOP NOW</button>

</div> {/* play-loud-box ends here*/}

</div>{/* play-loud ends here*/}

<div className='back-to-azzurro'>

<div className='back-to-azzurro-box'>
  <h1>BACK TO AZZURRO</h1>
  <h3>SCUDERIA FERRARI MIAMI LIMITED EDITION</h3>
  <button>SHOP NOW</button>

</div> {/* back-to-azzurro-box ends here*/}
</div>{/* back-to-azzurro ends here*/}

<div className='puma-trolls'>

<div className='puma-trolls-box'>
  <h1>PUMA x TROLLS</h1>
  <h3>THAT FUZZY FEELING</h3>
  <button>SHOP NOW</button>


</div>{/* puma-trolls-box ends here*/}

</div>{/* puma-trolls ends here*/}

<div className='puma-carrots'>

  <div className='puma-carrots-box'>
    <h1>PUMA X CARROTS</h1>
    <h2>BY ANWAR CARROTS</h2>
    <h5>ORGANIC XL CARROTS</h5>
    <button>SHOP NOW</button>


  </div> {/* puma-carrots-box ends here*/}
</div> {/* puma-carrots ends here*/}

<div className='made-with'>

  <div className='made-with-box'>
    <h1>MADE WITH</h1>
    <h1>MILANISMO</h1>
    <h3>24/25 AC MILAN HOME KIT</h3>
    <button>SHOP NOW</button>


  </div> {/* made-with=box ends here*/}
</div> {/* made-with ends here*/}

<div className='forever-faster-vid'>

<video width= "99.9%" autoPlay muted loop src="https://cdn.sanity.io/files/qa41whrn/prod/41abad3662b8524f819e624d4ae4c6c5f6f38239.mp4">


</video>
<button>SHOP NOW</button>
</div>  {/* forever-faster-vid here*/}

<div className='kids-must'>
  <h1>KIDS' MUST-HAVE STYLES</h1>
  <div className='kids-must-box'>
  <div id='school-store'></div>
  <div id='casual-wear'></div>
  <div id='softride-shoes'></div>
  <div id='sets'></div>
  </div>
</div>
    </div> {/* class main-body ends here */}
    
    <Footer/>
    </div> 
    </>
  )
}

export default Home
