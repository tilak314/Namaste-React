import Restaurent from "./Restaurent";
import resdata from "../constants/mockData"; //default import
import { useState, useEffect } from "react";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4425254&lng=78.6479238&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);
      setAllRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

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
            const list = allRestaurants.filter((res) => res.info.avgRating < 4);
            setAllRestaurants(list);
          }}
        >
          Filter
        </button>
      </div>
      <div className="res-cont">
        {allRestaurants.map((res) => (
          <Restaurent key={res.id} resdata={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
