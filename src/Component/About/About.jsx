import React from 'react'
import './AboutStyle.css'
export default function About() {
  return (
    <section className=' about vh-100  d-flex justify-content-center align-items-center '>
      <div className='container d-flex justify-content-center flex-column align-items-center '>
        <div className=' text-center pt-4 text-white'>
          <h2 className=' mb-3 fs-1 fw-bolder'> ABOUT COMPONENT </h2>

          <div className='iconAbout  d-flex justify-content-center align-items-center mb-3 '>
            
              <i className='fa-solid fa-star'></i>
              
            </div>
          </div>
         <div className='row px-5 text-white'>
          <div className='col-md-6 '>
            <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className='col-md-6 '>
            <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
         </div>
        </div>
      
    </section>
  )
}
