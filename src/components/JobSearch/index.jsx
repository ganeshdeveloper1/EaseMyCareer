import React, { useState } from 'react'
import './jobSearch.css'
import { Company, items, Skills } from './data'

const JobSearch = () => {
  const [skills, setSkills] = useState(false)
  const [company, setCompany] = useState(false)
  const [locations, setLocations] = useState(false)
  const [functions, setFunctions] = useState(false)
  const [industry, setIndustry] = useState(false)
  const [roles, setRoles] = useState(false)

  return (
    <div className='job-sec'>
      <div className='about'>
        <h2>Find Job Vacancies</h2>
        <div className='job-catg'>
          <ul className='tab-catg'>
            <li className='tab-catg-link'>
              <div className='activeItem' onClick={() => setSkills(true)}>
                Skills
              </div>
              {skills ? <Skills /> : ''}
            </li>
            <li className='tab-catg-link'>
              <div className='activeItem' onClick={() => setCompany(true)}>
                Company
              </div>
              {company ? <Company /> : ''}
            </li>
            <li className='tab-catg-link'>
              <div className='activeItem' onClick={() => setLocations(true)}>
                Locations
              </div>
            </li>
            <li className='tab-catg-link'>
              <div className='activeItem' onClick={() => setFunctions(true)}>
                Function
              </div>
            </li>
            <li className='tab-catg-link'>
              <div className='activeItem' onClick={() => setIndustry(true)}>
                Industry
              </div>
            </li>
            <li className='tab-catg-link'>
              <div className='activeItem' onClick={() => setRoles(true)}>
                Roles
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='call-services'>
        <div className='call-services-link'>
          <p className='call-services-header'>
            Find Better & faster Call Sevices
          </p>
          <div className='contact-form'>
            <input
              type='text'
              placeholder='Enter your mobile Number'
              className='input-search-bar'
            />
            <input
              type='submit'
              value='Get a call back'
              className='submit-btn'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobSearch

//  key={item.id}
//                   // href={`${item.text}`}
//                   onClick={() => {
//                     setActiveItem(item.id)
//                     setShowItem(true)
//                   }}
//                   className={activeItem === item.id ? 'activeItem' : 'inactive'}
//                 >
//                   {item.text}
//                 </div>
