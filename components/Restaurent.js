import { cloudinaryImageIdURL } from "../constants/cloudId";


const Restaurent = (props) => {
    const { resdata } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    areaName,
    cuisines,
    costForTwo
  } = resdata;
    return (
        <div className='res-card'>
           <img
          className="res-logo"
          src={
            cloudinaryImageIdURL+
            cloudinaryImageId}
        />
        <h2>{name}</h2>
        <h4>{avgRating} stars</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        </div>
    )
}

export default Restaurent;