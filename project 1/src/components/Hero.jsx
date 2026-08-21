import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <main className='hero'>
        <div className='hero-content'>
            <h1>YOUR FEET 
              DESERVE 
              THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                 <div className='hero_btn'>
            <button>shop now</button>
            <button className='second_btn'>category</button>
    </div>
    <div className='shopping'>
        <p>Also available on</p>
 </div>
 <div className='brand_icon'>
    <img src="/images/amazon.png" alt="amazon-logo" />
    <img src="/images/flipkart.png" alt="flip.png" />
 </div>
        </div>
   
        <div className='hero_img'>
            <img src="/images/shoe_image.png" alt="hero_logo" />
        </div>
    </main>
  )
}

export default Hero