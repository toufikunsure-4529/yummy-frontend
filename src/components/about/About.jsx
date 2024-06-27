import React from 'react'

function About() {
  return (
    <div className='w-100 bg-white'>
      <div className='container mx-auto d-flex justify-content-center align-items-center flex-column'>
        <p className='lead my-3 custom-list-item'>ABOUT US</p>
        <p className='lead fs-2 '>Learn More <span className='text-danger custom-list-item'>About Us</span></p>
        <div className='row align-items-center '>
          <div className='col-md-6'>
            <img src="/img/about-img.jpg" alt="About Us Image" className='img-fluid rounded' />
            <div className='h-auto w-50 mt-4 bg-warning border-2 rounded d-flex justify-content-center align-items-center flex-column py-3'>
              <p className='lead fw-bold'>Book a Table</p>
              <p className='lead fw-bold text-bg-danger'>+91 9090899999</p>
            </div>
          </div>

          <div className='col-md-6 mt-4 mt-md-0'>
            <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className='lead fs-6'>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</li>
            </ul>
            <div className='col-md-8 order-md-2 '>
              <img src="/img/about-2.jpg" alt="About Us Image 2" className='img-fluid rounded' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About