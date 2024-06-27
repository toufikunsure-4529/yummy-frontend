import React from 'react'

function HeroSection() {
  return (
    <div className="w-100 bg-light">
      <div className='container mx-auto py-5 d-flex justify-content-center align-items-center gap-4 flex-column flex-md-row'>

        <div className='text-center text-md-start'>
          <h3 className="display-5 fw-bold">Enjoy Your Healthy <br /> Delicious Food</h3>
          <p className='lead my-3'>We are team of talented designers making websites with Bootstrap</p>
          <button className='btn btn-danger btn-lg rounded-pill'>Book a Table</button>

        </div>

        <div className='w-2 h-2 mt-4 mt-md-0'>
          <img src="/img/hero-img.png" alt="" className='img-fluid animated' />
        </div>

      </div>

    </div>
  )
}

export default HeroSection