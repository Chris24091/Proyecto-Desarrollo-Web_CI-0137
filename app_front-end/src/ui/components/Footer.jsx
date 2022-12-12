import React from 'react';
import { GrInstagram } from 'react-icons/gr'
import { ImFacebook2 } from 'react-icons/im'
import {IconContext} from "react-icons"
import '../../chiz-burgers/pages/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className='contenedor-footer'>
        <div className='row'>
          <div className='col-4 d-flex justify-content-start align-items-center'>
            <p className='footer-text2'>6123-2442</p>
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <p className='footer-text'>Chiz&Burgers</p>
          </div>
          <div className='col-4 d-flex justify-content-end align-items-center'>
            <p className='footer-text1'>wilmer.araya@ucr.ac.cr</p>
            <p className='footer-text1'>christopher.perez.cr@gmail.com</p>
            <IconContext.Provider value={{ style: { fontSize: '25px', color: "rgb(218, 212, 199)", marginBottom:'15px' } }}>
              <div>
              <ImFacebook2 />
              </div>
              <div className='mx-4'>
              <GrInstagram />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </footer>
  )
}
