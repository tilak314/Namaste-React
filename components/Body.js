import Restaurent from "./Restaurent";
import resdata from "../constants/mockData"; //default import
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchtxt, setSearchtxt] = useState("");
  const [filteredRestaurents, setFilteredrestaurents] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  function filterData(searchText, restaurants) {
    const resFilterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return resFilterData;
  }

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      console.log("filteredData", filteredData);
      setFilteredrestaurents(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredrestaurents(restaurants);
    }
  };

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
      setFilteredrestaurents(resData);
    } catch (error) {
      console.log(error);
    }
  }
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-cont">
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={searchtxt}
            onChange={(e) => {
              setSearchtxt(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              searchData(searchtxt, allRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const list = allRestaurants.filter((res) => res.info.avgRating < 4);
            setFilteredrestaurents(list);
          }}
        >
          Filter
        </button>
      </div>

      {errorMessage && <div className="error-container">{errorMessage}</div>}

      <div className="res-cont">
         {filteredRestaurents.map((res) => {
            return (
              <Link
                to={"/restaurent/" + res?.info?.id}
                key={res?.info?.id}
              >
                <Restaurent key={res.id} resdata={res} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
