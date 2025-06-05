import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  ITEM_IMG_CDN_URL,
} from "../constants/cloudId";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      const json = await response.json();

      // Set restaurant data
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);


      const uniqueMenuItems = json?.data?.cards
        ?.filter((x) => x.groupedCard)
        ?.map((x) => x.groupedCard?.cardGroupMap?.REGULAR?.cards)
        ?.flat()
        ?.filter((y) => y.card?.card?.["@type"] === MENU_ITEM_TYPE_KEY);

      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }
  if (!restaurant) {
    return <MenuShimmer />;
  }

  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>

          <div className="res-info-card">
            <div className="restaurant-details">
              <div class="rating-badge">⭐
                {restaurant?.avgRatingString +
                  " (" +
                  restaurant?.totalRatingsString +
                  ")  - "}
                {restaurant?.costForTwoMessage}
              </div>

              <p className="restaurant-tags">
                {restaurant?.cuisines?.join(", ")}
              </p>
              <div className="outlet-info">{restaurant?.locality}</div>
              <div className="delivery-time">{restaurant?.sla?.slaString}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="toggle-group">
        <div class="toggle-wrapper veg active">
          <div class="icon-box">
            <div class="dot"></div>
          </div>
        </div>

        <div class="toggle-wrapper nonveg">
          <div class="icon-box">
            <div class="triangle"></div>
          </div>
        </div>
      </div>

      <div className="menu-accordion">
        {menuItems.map((category, index) => {
          const itemCategory = category?.card?.card;
          const items = itemCategory?.itemCards || [];

          return (
            <div key={index} className="accordion-section">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                {itemCategory?.title} {"(" + items.length + ")"}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </div>

              {openIndex === index && (
                <div className="accordion-content">
                  {items.map((itemCard, idx) => {
                    const info = itemCard?.card?.info;
                    return (
                      <div key={info?.id || idx} className="menu-item">
                        <div className="menu-item-text">
                          <div className="menu-item-name">{info?.name}</div>
                          <div className="menu-item-price">
                            ₹{(info?.price || info?.defaultPrice) / 100}
                          </div>
                          <div className="menu-item-description">
                            {info?.description}
                          </div>
                        </div>
                        <img
                          src={
                            ITEM_IMG_CDN_URL +
                            info?.imageId
                          }
                          alt={info?.name}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
