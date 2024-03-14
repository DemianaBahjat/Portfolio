// 


import React from 'react'
import style from './PortfolioStyle.css'
import img1 from '../../assests/poert1.png'
import img2 from '../../assests/port2.png'
import img3 from '../../assests/port3.png'

export default function Portfolio() {
  return (
    <>
    <section className={`${style.Portfolio} py-5`}>
      <div className="container">
        <div className="header text-center">
        <h2 className='text-uppercase'>Portfolio component</h2>
        <span className={`${style.star}`}><i className="fa-solid fa-star"></i></span>
        </div>
        <div className="row gy-2">
          <div className="col-md-4 p-3">
            <div className={`item rounded-3 overflow-hidden position-relative`}>
              <img src={img1} className='w-100' alt="img1" />
              <div className={`${style.layer} position-absolute  d-flex justify-content-center align-items-center text-white`}>
              <i className={`fa-solid fa-plus ${style.plus} `}></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="item rounded-3 overflow-hidden position-relative">
              <img src={img2} className='w-100' alt="img1" />
              <div className={`${style.layer} position-absolute  d-flex justify-content-center align-items-center text-white`}>
              <i className={`fa-solid fa-plus ${style.plus} `}></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="item rounded-3 overflow-hidden position-relative">
              <img src={img3} className='w-100' alt="img1" />
              <div className={`${style.layer} position-absolute  d-flex justify-content-center align-items-center text-white`}>
              <i className={`fa-solid fa-plus ${style.plus} `}></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="item rounded-3 overflow-hidden position-relative">
              <img src={img1} className='w-100' alt="img1" />
              <div className={`${style.layer} position-absolute  d-flex justify-content-center align-items-center text-white`}>
              <i className={`fa-solid fa-plus ${style.plus} `}></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="item rounded-3 overflow-hidden position-relative">
              <img src={img2} className='w-100' alt="img1" />
              <div className={`${style.layer} position-absolute  d-flex justify-content-center align-items-center text-white`}>
              <i className={`fa-solid fa-plus ${style.plus} `}></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="item rounded-3 overflow-hidden position-relative">
              <img src={img3} className='w-100' alt="img1" />
              <div className={`${style.layer} position-absolute  d-flex justify-content-center align-items-center text-white`}>
              <i className={`fa-solid fa-plus ${style.plus} `}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

