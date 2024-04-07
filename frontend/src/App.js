import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Nav from './Nav';


function App() {

    const [data, setData] = useState([])
    const navigate=useNavigate();

    useEffect(() => {
  
      const fetchData = async () => {
        const api = await fetch(`https://dummyjson.com/products`)
        const data = await api.json();
        const products=data.products.slice(0,6);
      
        console.log(data);
        setData(products)
        // console.log(data)
      }
      fetchData();
    }, [])


    const OrderDone=()=>{
      alert("Your order is placed successfully!")
      navigate('/')
    }

  return (
   <>
    <div className='background-image'>
    <Nav/>
   
   <div class="text" >
         Super  Value Deal On <br></br> 
          All Products<br></br>

          <button class="btn btn-outline-danger btn" type="submit">Shop Now</button>
          </div>
         
            </div>

 <h2 className='fonts '>Products</h2>
 <div className='container'>
  <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
    {data.map((i, index) => (
      <div key={index} className='col mb-4'> 
        <div className="card border-0 shadow h-100 card-image"> 
          <img src={i.images[0]} className="card-img-top" alt="Product" style={{ objectFit: 'contain', height: '180px', width: '100%' }} /> 
          <div className="card-body d-flex flex-column justify-content-between"> 
            <div >
              <h2 className="card-title">{i.title}</h2>
              <h2 className="mb-1">${i.price}</h2>
            </div>
            <div>
              <p>{i.description}</p>
           <div class='row'>
    <div class='col'>
        <p>Rating:{i.rating}</p>
        </div>
        <div class='col'>
        <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Order Now
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Product Detail</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicAddress" >
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address"   />
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Product"    />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="Quantity"   />
      </Form.Group>

      <a href="/" className="btn btn-dark mr-2">Cancel</a>

      <Button variant="btn btn-outline-danger" type="submit" onClick={OrderDone}>
       Order Done
      </Button>


    </Form>
      </div>
     
  </div>
</div>
        </div>
        
        </div>
    </div> 
          
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



<div className="text-center button">

    <a href='products' className="btn btn-outline-danger btn-sm">View More....</a>

  </div>


        <footer>
      <div class="row primary">
        <div class="column about">
          <h3>Click Mart</h3>
          <p>
          "Welcome to Click Mart - Your Ultimate Online Shopping Destination! Explore Thousands of Products at Your Fingertips.
           Shop Smart, Shop Conveniently, Shop Click Mart!"
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
  );
}

export default App;
