import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='jobseeker'>
        <ul>
          <li>
            <a href='#' className='footer-items'>
              Job Search
            </a>
          </li>
          <li>
            <a href='#' className='footer-items'>
              Upload Resume
            </a>
          </li>
          <li>
            <a href='#' className='footer-items'>
              Job Seekers LogIn
            </a>
          </li>
          <li>
            <a href='#' className='footer-items'>
              Job By Location
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
