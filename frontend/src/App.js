import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import axios from "axios";


function App() {

    const [data, setData] = useState([])
    const navigate=useNavigate();


    const[firstname,setFirst]=useState("");
  const[lastname,setLast]=useState("");
  const[email1,setEmail1]=useState("");
  const[mobileno,setMobile]=useState("");
  const[birthdate,setBirth]=useState("");
  const[gender,setGender]=useState("");
  const[address,setAddress]=useState("");
  const[password1,setPassword1]=useState("");
  const[confirm,setConfirm]=useState("");


  const [email,setEmail]=useState("");
  const[users,Setusers]=useState([]);



  

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

    function h()
    {
      axios.get("http://localhost:10000/viewuser")
      .then((result)=>Setusers(result.data))
      
  
      .catch((err)=>{console.log(err)})
      console.log(users);
    }
  
    useEffect(()=>
    {
      h();
    },[]);


    const OrderDone=()=>{
      // alert("Your order is placed successfully!")
      // navigate('/')
      console.log(users);
      let found=false;
    for(let i=0;i<users.length ;i++){
      if(email==users[i]['email1']){
        found=true;
        break;
      }
    }
    if(found)
    {
      alert("Your Order IS Placed Successfully");
      navigate('/')

    }
    
    else
    {
      alert("Please Register First");
    }
  

  

    }


    
  const Reg=()=>
  {
    const response=axios.post('http://localhost:10000/reg',{
      firstname:firstname,
      lastname:lastname,
      email1:email1,
      mobileno:mobileno,
      birthdate:birthdate,
      gender:gender,
      address:address,
      password1:password1,
      confirm:confirm,

    })
    .then(response=>{
      console.log(response.data);
    })
    .catch(error=>{
      console.log(error);
    });
    alert("Register Data Successfully");
  }



 

  return (
   <>
    <div className='background-image'>
    <Nav/>
   
   <div class="text" >
         Super  Value Deal On <br></br> 
          All Products<br></br>

          <button type="button" class="btn btn-outline-danger ml-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Registration
</button>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-2" id="exampleModalLabel">Registration</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>

<div class="row">
  <div class="col-md-6 mb-2">

    <div class="form-outline">
      <input type="text" id="firstName" class="form-control form-control" Value={firstname}  onChange={(e)=>setFirst(e.target.value)}  />
      <label class="form-label" for="firstName">First Name</label>
    </div>
   

  </div>
  <div class="col-md-6 mb-2">
    <div class="form-outline">
      <input type="text" id="lastName" class="form-control form-control" Value={lastname} onChange={(e)=>setLast(e.target.value)}  />
      <label class="form-label" for="lastName">Last Name</label>
    </div>

  </div>
</div>
<div class="row">
  <div class="col-md-6 mb-2 pb-2">

    <div class="form-outline">
      <input type="email" id="emailAddress" class="form-control form-control" Value={email1} onChange={(e)=>setEmail1(e.target.value)}  />
      <label class="form-label" for="emailAddress">Email</label>
    </div>

  </div>
  <div class="col-md-6 mb-2 pb-2">

    <div class="form-outline">
      <input type="number" id="phoneNumber" class="form-control form-control"  Value={mobileno} onChange={(e)=>setMobile(e.target.value)}  />
      <label class="form-label" for="phoneNumber">Mobile Number</label>
    </div>
  </div>
</div>
<div class="row">
                <div class="col-md-6 mb-2 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="date" class="form-control form-control" id="birthdayDate" Value={birthdate} onChange={(e)=>setBirth(e.target.value)}  />
                    <label for="birthdayDate" class="form-label">Birthday</label>
                  </div>

                </div>
                <div class="col-md-6 mb-2">

                  <h6 class="mb-2 pb-1">Gender: </h6>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="female" onChange={(e)=>setGender(e.target.value)}  Value={gender} />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="male" onChange={(e)=>setGender(e.target.value)}  Value={gender}  />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                </div>
              </div>
              
              <div class="form-outline mb-2">
                  <input type="text" id="form3Example8" class="form-control form-control" Value={address} onChange={(e)=>setAddress(e.target.value)}  />
                  <label class="form-label" for="form3Example8">Address</label>
                </div>

                <div class="row">
  <div class="col-md-6 mb-2 pb-2">

    <div class="form-outline">
      <input type="password" id="pass" class="form-control form-control" Value={password1}  onChange={(e)=>setPassword1(e.target.value)} />
      <label class="form-label" for="pass">Password</label>
    </div>

  </div>
  <div class="col-md-6 mb-2 pb-2">

    <div class="form-outline">
      <input type="password" id="conform" class="form-control form-control"  Value={confirm} onChange={(e)=>setConfirm(e.target.value)} />
      <label class="form-label" for="conform">Confirm Password</label>
    </div>
  

  </div>
</div>
<div class="mt-2 pt-2">
  <input class="btn btn-primary btn" type="submit" value="Signup"  onClick={Reg} />
</div>

</form>
      
        
      </div>
    </div>
  </div>
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
        <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal2">
  Order Now
</button>

<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel2">Product Detail</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Enter Register Email</Form.Label>
        <Form.Control type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}   />
      </Form.Group>
     
      
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
