import './card.css'

const Card = ({ jobTitle, companyName, experience, Package, loc, jobDesc }) => {
  return (
    <div className='card'>
      <h3 className='jobTitle'>{jobTitle}</h3>
      <span>{companyName}</span>
      <div className='tags-row'>
        <div className='exp'>
          <span>
            <i class='fa fa-map-marker' aria-hidden='true'></i>
            <small>{experience}</small>
          </span>
        </div>

        <div className='package'>
          <span>
            <i class='fa fa-map-marker' aria-hidden='true'></i>
            <small>{Package}</small>
          </span>
        </div>

        <div className='loc'>
          <span>
            <i class='fa fa-map-marker' aria-hidden='true'></i>
            <small>{loc}</small>
          </span>
        </div>
      </div>
      <p className='description'>
        Job Description : {`${jobDesc.substr(0, 230)}`}
      </p>
    </div>
  )
}

export default Card
