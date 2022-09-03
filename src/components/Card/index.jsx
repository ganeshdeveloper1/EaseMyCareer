import './card.css'

const Card = ({
  jobTitle,
  companyName,
  experience,
  Package,
  loc,
  jobDesc,
  skills,
}) => {
  return (
    <div className='card'>
      <h3 className='jobTitle'>{jobTitle}</h3>
      <span className='companyName'>{companyName}</span>
      <div className='tags-row'>
        <div className='exp mr'>
          <span>
            <i class='fa fa-briefcase' aria-hidden='true'></i>
            <small>{experience}</small>
          </span>
        </div>
        <div className='package mr'>
          <span>
            <i class='fa fa-inr' aria-hidden='true'></i>
            <small>{Package}</small>
          </span>
        </div>
        <div className='loc mr'>
          <span>
            <i class='fa fa-map-marker' aria-hidden='true'></i>
            <small>{loc}</small>
          </span>
        </div>
      </div>
      <p className='description'>
        Job Description : {`${jobDesc.substr(0, 230)}`}
      </p>
      <p className='skill'>
        <span>Skills : </span>
        {skills}
      </p>
      <div className='activity'>
        <i class='fa fa-share-alt' aria-hidden='true'></i>
        <button className='apply'>APPLY</button>
      </div>
    </div>
  )
}

export default Card
