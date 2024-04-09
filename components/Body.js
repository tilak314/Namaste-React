import Restaurent from "./Restaurent";
import resdata from "../constants/mockData"; //default import
import { useState } from "react";

const Body = () => {
  const [listofrestaurents, setListofrestaurents] = useState(resdata);
  return (
    <div className="body">
      <div className="search-cont">
        <input className="search" type="text" placeholder="Search"></input>
        <button className="search-btn">Search</button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const list = listofrestaurents.filter((res) => res.avgRating > 4);
            setListofrestaurents(list);
          }}
        >
          Filter
        </button>
      </div>
      <div className="res-cont">
        {listofrestaurents.map((res) => (
          <Restaurent key={res.id} resdata={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
