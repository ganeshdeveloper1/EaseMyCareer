import React from 'react'
import { useState } from 'react'
import './dropDown.css'

const SideNav = ({ name }) => {
  const [click, setClick] = useState(false)
  return (
    <div className='filter-accordion-row'>
      <div className='hr-line'></div>
      <div className='filter-options' onClick={() => setClick((prev) => !prev)}>
        <span className='accordion-header'>{name}</span>
        <div className='dropDownIcon'>
          <i className='fa fa-angle-down' aria-hidden='true'></i>
        </div>
      </div>

      {click && (
        <div className='filter-search'>
          <ul className='filter-list'>
            <li className='list-header'>
              <input type='checkbox' name='inputs' className='input-checkbox' />
              <label htmlFor='#'>Software engineer</label>
            </li>
            <li className='list-header'>
              <input type='checkbox' name='inputs' className='input-checkbox' />
              <label htmlFor='#'>Software engineer</label>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SideNav
