import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <h3>Front End/UI Developer-Html/CSS/JS</h3>
      <span>company name</span>
      <div className="tags-row">
        <div className="exp">
          <span>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <small>2-5Yrs</small>
          </span>
        </div>

        <div className="package">
          <span>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <small>3.5k LPA</small>
          </span>
        </div>

        <div className="loc">
          <span>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <small>Bangalore/Bengaluru</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
