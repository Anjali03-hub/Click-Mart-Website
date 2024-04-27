
import './App.css';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Nav = () => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const[users,Setusers]=useState([]);



  const navigate = useNavigate()
  const [input, setInput] = useState('')

  

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  }


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

  const Login=()=>
  {
    console.log(users);
    let found=false;
    for(let i=0;i<users.length ;i++){
      if(email==users[i]['email1']&& password==users[i]['password1']){
        found=true;
        break;
      }
    }
    if(found)
    {
      alert("Login Succesfully");
      navigate('/')

    }
    
    else
    {
      alert("Login Failed");
    }
  

  }
  return (
    <div class="m-4">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a href="/" class="navbar-brand">
            <img
              alt="..."
              src='images/logo1.png'
              style={{ width: "100px", height: "100px", overflow: "hidden", borderRadius: "150px" }}
            /></a>
          <a href='/' class="navbar-band"></a>



          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">

            <div class="navbar-nav ms-auto">
              <a class="nav-link" href="/"  ><font color="black">Home</font>  </a>
              <a class="nav-link" href="products" ><font color="black">Products</font>  </a>
              <a class="nav-link" href="aboutus" ><font color="black">About Us</font>  </a>
              <a class="nav-link" href="contactus" ><font color="black">Contact us</font>  </a>
            </div>
          </div>
          <form class="d-flex" role="search" onSubmit={handleSubmit}>
            <input class="form-control me-2" placeholder="Search" aria-label="Search"
              onChange={(e) => setInput(e.target.value)}
              type="text" />
            <button class="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
        {/* <Button  class="btn btn-outline-dark"  onClick={handleShow}>
       Login
      </Button> */}
        <button type="button" class="btn btn-outline-dark ml-2" onClick={handleShow}>
  Login
</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle m-2" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
            User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}  />
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}  />
      </Form.Group>
    
      <Button variant="btn btn-info"  type="submit" onClick={Login}>
        Submit
      </Button>
    </Form>



        </Modal.Body>
      </Modal>

      </nav>
    </div>
  )
}

export default Nav