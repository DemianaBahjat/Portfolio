import React from 'react'
import './ContactStyle.css'

export default function Contact() {
  return (
    <div>
      <h2 className=' contact text-center fw-bolder mt-5 '>CONATCT SECTION</h2>
      <div className='icon d-flex justify-content-center align-items-center mb-3 '>

              <i className='fa-solid fa-star'></i>
          </div>

      <form   class="w-50 p-3 mx-auto mt-5 ">
        
        <input   type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative "/>
        
        <input   type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative "/>
        
        <input   type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative "/>
       
        <input   type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative "/>
        <button className="btn btn-primary mt-4 text-white" > send Message </button>
        
      </form>
      
    </div>
  )
}
