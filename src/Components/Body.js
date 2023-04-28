import React, { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import {CardShimmerUI} from "./ShimmerUI";
import { Link } from "react-router-dom";

function Body() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurantList, setfilterRestaurantList] = useState([]);
  const [totalRestaurant, setTotalRestaurant] = useState("");
  const [isLoad, setisLoad] = useState(false);

  useEffect(() => {
    const restaurantFetchData = fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&page_type=DESKTOP_WEB_LISTING"
    );

    restaurantFetchData
      .then((data) => data.json())
      .then((element) => {
        setTotalRestaurant(
          element?.data?.cards[2]?.data?.data?.totalRestaurants
        );
        setRestaurantList(element?.data?.cards[2]?.data?.data?.cards);
        setfilterRestaurantList(element?.data?.cards[2]?.data?.data?.cards);
        setisLoad(true);
      });
  }, []);


  return isLoad === false ? (
    <CardShimmerUI />
  ) : (
    <>
      <div className="restaurantList">
        {/* Heading of the restaurtant List  */}

        <div className="heading">
          <h2>{totalRestaurant} restaurant</h2>
          <ul>
            <li>Relevance</li>
            <li>Delivery Time</li>
            <li>Rating</li>
            <li>Cost: Low to High</li>
            <li>Cost: High to Low</li>
          </ul>
        </div>

        <div className="cards_lists">
          {filterRestaurantList.map((element) => (
            <Link to={"/restaurant/" + element.data.id} key={element.data.sla.restaurantId}>
              <RestaurantCards {...element.data} key={element.data.id} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
