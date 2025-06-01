import { cloudinaryImageIdURL } from "../constants/cloudId";


const Restaurent = (props) => {
  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    costForTwo,
    sla,
  } = props.resdata.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={cloudinaryImageIdURL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{areaName}</h5>
      <h4>{avgRating}</h4>
      <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
      <h4>{costForTwo ?? "₹200 for two"}</h4>
    </div>
  )
}

export default Restaurent;