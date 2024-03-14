import React from 'react'
import './FooterStyle.css'
export default function Footer() {
  return (
    <>
      
      <footer className=' pt-4 text-center'>
          <div className="container pb-3 ">
            <div className="row">
              <div className="col-md-6 col-lg-4 py-4 px-2">
                <h3 className='fw-bold text-white mb-3'>LOCATION</h3>
                <p className=' text-white mb-3'>2215 John Daniel Drive</p>
                <p className=' text-white mb-3'>Clark, MO 65243</p>
              </div>

              <div className="col-md-6 col-lg-4 py-4 px-2">
                <h3 className='fw-bold text-white mb-3'>AROUND THE WEB</h3>

                <div className='d-flex justify-content-center align-items-center'>
                  <a  href="https://www.facebook.com" className='footer-links d-flex justify-content-center align-items-center'>
                    <i className="fa-brands fa-facebook mx-1 fa-lg text-white" />
                  </a>

                  <a href="https://www.twitter.com" className='footer-links d-flex justify-content-center align-items-center'> 
                    <i className="fa-brands fa-twitter mx-1 fa-lg text-white" />
                  </a>

                  <a
                    href="https://www.linkedin.com" className='footer-links d-flex justify-content-center align-items-center'>
                    <i className="fa-brands fa-linkedin-in mx-1 fa-lg text-white" />
                  </a>
                  <a href="https://www.google.com" className='footer-links d-flex justify-content-center align-items-center'>
                    <i className="fa-solid fa-globe mx-1 fa- text-white" />
                  </a>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 py-4 px-2">
                <h3 className='fw-bold text-white'>ABOUT FREELANCER</h3>
                <p className=' text-white '>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
       

        <div className="footer-copyright text-white py-3">
          <p>Copyright © Your Website 2021</p>
        </div>

      </footer>
    </>
  )
}
