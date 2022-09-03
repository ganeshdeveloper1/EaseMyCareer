import React from 'react'
import Card from '../Card'
import cardItems from './cardData'
import './jobsinfo.css'

const JobsInfo = () => {
  return (
    <div>
      {cardItems.map((items, i) => (
        <Card
          jobtitle={items.jobTitle}
          companyName={items.companyName}
          experience={items.experience}
          Package={items.package}
          loc={items.location}
          jobDesc={items.jobDesc}
          skills={items.skills}
          key={i}
        />
      ))}
    </div>
  )
}

export default JobsInfo
