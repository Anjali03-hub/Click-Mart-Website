import './App.css';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SearchProducts = () => {
    const {searchTerm} = useParams();

    
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
        <a href="#" class="btn btn-outline-danger">Order Now</a>
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