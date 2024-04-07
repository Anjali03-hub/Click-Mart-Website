import React from 'react'
import Nav from './Nav'
import './App.css';

const AboutUs = () => {
  return (
    <>
      <div className='banner-about'>
  <div className='banner-content'  >
         <h2>#KnowUs</h2> 
         <p>Save more with Coupone & up to 70% off</p> 
          </div>   
            </div>
        



<div class="container">
<div class="row justify-content-between align-items-center">
    <div class="col-lg-6 col-md-5 mb-4 order-lg-1 order-md-1 order-2">
        <h2 class="fonts-about"  >
        <p>Who We Are ? </p>
        </h2>
        <p style={{textAlign:"justify"}}>
        "Welcome to ClickMart, your ultimate destination for hassle-free online shopping! At ClickMart,
         we pride ourselves on offering an extensive range of products to cater to every need and preference.
          Whether you're searching for the latest tech gadgets, trendy fashion pieces, home essentials, or gourmet treats,
           we've got you covered. With a diverse selection of high-quality items sourced from trusted brands and vendors, 
           finding what you need has never been easier. From everyday essentials to unique finds,
            ClickMart ensures a seamless shopping experience from the comfort of your own home.
             Browse our virtual aisles today and discover the convenience of ClickMart!"
      
        </p>
    </div>
    <div class="col-lg-5 col-md-5 mb-4 order-1  order-lg-2 order-md-1">
        <img src="/images/about-image.jpg" class="w-100" ></img>
    </div>
</div>
</div>


<footer>
      <div class="row primary">
        <div class="column about">
          <h3>Click Mart</h3>
          <p>
          "Welcome to Click Mart - Your Ultimate Online Shopping Destination! 
          Explore Thousands of Products at Your Fingertips. Shop Smart, Shop Conveniently, Shop Click Mart!"
          </p><br></br>
          <h3>Contact Us</h3>
          <a href="tel:+917999164265" class="text-white">+917999164265</a>
          <p>
            <a href="mailto:parmalanjali@gmail.com" class="text-white" >parmalanjali@gmail.com</a> 
            </p>
            <p>
              <a href=""  class="text-white">Freeganj ujjain</a>
            </p>
        </div>
        <div class="column links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="products">Products</a>
            </li>
            <li>
              <a href="aboutus">About Us</a>
            </li>
            <li>
              <a href="contactus">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="column subscribe">
          <h3>Reviews</h3>
          <div>
            <input className='input1' type="email" placeholder="Please enter your Review" />
            <button className='button1'> Review</button>
          </div>
          
        </div>
      </div>
      
        
      
      <div class="row copyright">
        <p>Copyright &copy; 2024 <a href="https://instagram.com/anjali__parmar28?igshid=MzRlODBiNWFlZA=="><font color="white">Anjali_parmal28</font></a></p>
      </div>
    </footer>


</>





  )
}

export default AboutUs