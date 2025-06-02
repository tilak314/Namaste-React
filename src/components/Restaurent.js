import { cloudinaryImageIdURL } from "../constants/cloudId";


const Restaurent = (props) => {
  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    sla,
  } = props.resdata.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={cloudinaryImageIdURL + cloudinaryImageId} />
      <div className="res-name">{name}</div>
  <div className="res-area">{areaName}</div>

  <div className="res-meta">
  <div className="rating-distance">
    <span className="res-rating">⭐ {avgRating}</span>
    <span className="res-distance">{sla?.lastMileTravelString ?? "2.0 km"}</span>
  </div>
  <div className="res-cuisines">
    {cuisines.slice(0, 3).join(", ")}
  </div>
</div>
    </div>
  )
}

export default Restaurent;