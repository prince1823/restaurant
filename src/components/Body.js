import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants,setListOfRestraunt] = useState(resList);

  useEffect(() =>{
    fetchData();
  },[]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    );
    const json = await data.json();
    console.log(json);

  };




    return (
      <div className="body">
        <div className="filter">
          <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
          >
            </button>
            </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant)=>(
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;