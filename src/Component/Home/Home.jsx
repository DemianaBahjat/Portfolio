import React from 'react'
import './HomeStyle.css'
import {ReactComponent as Logo} from '../../assests/avataaars.svg' 
export default function Home() {
  return <>
      <header className=' header vh-100 d-flex justify-content-center align-items-center'>
       <div >
        <span className='w-50 '>
           <Logo/>
        </span>
       
       <h1 className='fw-bold text-white my-4'>START FRAMEWORK</h1>

       <div className='iconHome d-flex justify-content-center align-items-center'>
          <i className='fa-solid fa-star text-white fa-xl '></i>
       </div>
        <p className='text-white mt-3 text-center'>Graphic Artist - Web Designer - Illustrator</p>
       </div>

      

      </header>
  
  
  </>
}
