import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { BsCircleHalf } from "react-icons/bs";
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import RestaurantMenu from "./RestaurantMenu.js"
import {useState, useEffect} from "react"
import {ListShimmerUI} from './ShimmerUI.js';
import {useParams} from "react-router-dom"

const RestaurantPage = () => {
  
  const [allDetail, setAllDetail] = useState([])
  const [RestaurantPageDetail, SetRestaurantPageDetail] = useState([]);
  const [InfoDetail, setInfoDetail] = useState({});
  const [isLoad , SetisLoad] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    const dataFetch = fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6105073&lng=77.1145653&restaurantId=${id.slice(0)}&submitAction=ENTER`)
    dataFetch.then((data) => data = data.json()).then((data) => {
      setAllDetail(data);
      SetRestaurantPageDetail(data?.data)
      setInfoDetail(data?.data?.cards[0]?.card?.card?.info);
      SetisLoad(true);
    })
  },[]);

  // console.log(InfoDetail);

  return !isLoad ? <ListShimmerUI /> : (
    <>
      <section className="RestaurantPage">
        <div className="header_detail">
          <div className="left">
            <h1 className="restaurant_name">{InfoDetail.name}</h1>
            <p>{InfoDetail.cuisines?.join(", ")}</p>
            <p>
              {InfoDetail.areaName}, <span>4.5kms</span>
            </p>
          </div>

          <div className="right">
            <button>
              <p className="rating">
                <FontAwesomeIcon icon={faStar} /> <span>{InfoDetail?.avgRating}</span>
              </p>
              <p className="ratingStr">{InfoDetail?.totalRatingsString}</p>
            </button>
          </div>
        </div>

        <div className="header_deliveryTag">
          <p>
            {InfoDetail?.feeDetails?.message}
          </p>
        </div>

        <div className="header_timeandprice">
          <p> <BsCircleHalf style={{verticalAlign : 'middle'}}/> <span style={{paddingLeft : "5px", verticalAlign: "middle"}}>{InfoDetail?.sla?.slaString}</span></p>
          <p> <HiOutlineCurrencyRupee style={{verticalAlign : 'middle', fontSize: "1.4em"}}/><span style={{paddingLeft : "5px", verticalAlign: "middle"}}>{InfoDetail?.costForTwoMessage}</span></p>
        </div>

        <div className="main_section">
          <div className="main_input">
            <label htmlFor="">
              <span>Veg Only</span>
              <input type="checkbox" name="" id="" />
            </label>
          </div>

          <div className="restaurant_menuList">
              {RestaurantPageDetail.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((element, index) =>{ return index !== 0 ? <RestaurantMenu {...element?.card?.card} key={index}/> : ""})}
          </div>
        </div>

      </section>
    </>
  );
};

export default RestaurantPage;
