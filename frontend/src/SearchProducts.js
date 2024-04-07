import './App.css';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const SearchProducts = () => {
    const {searchTerm} = useParams();
    const navigate=useNavigate();


    
    const [data, setData] = useState([])

    useEffect(() => {
  
      const fetchData = async () => {
        const api = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
        const data = await api.json();

        setData(data.products)
        // console.log(data)
      }
  
      fetchData();
    }, [searchTerm])


    const OrderDone=()=>{
      alert("Your order is placed successfully!")
      navigate('/')
    }


  return (
    <>
         <div>
  <h2 className='fonts text-center'> Search Products</h2>
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
</div>


    </>
  )
}

export default SearchProducts