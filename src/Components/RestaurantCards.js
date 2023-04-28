import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function RestaurantCards({
  name,
  cloudinaryImageId,
  cuisines,
  costForTwoString,
  slaString,
  avgRating,
  promoted
}) {

    const myRef = useRef(null);
    const myRating = useRef(null);

    const handleMouseOver = ()=>{
        myRef.current.style.visibility = "visible"
    }

    const handleMouseLeave = ()=>{
        myRef.current.style.visibility = "hidden"
    }

    const rating = () => {
        if(avgRating >= 4){
            myRating.current.style.backgroundColor = "#1ba01b"
        }
        else if(avgRating >= 2 && avgRating < 4){
            myRating.current.style.backgroundColor = "#c76017"
        }
        else{
            myRating.current.style.backgroundColor = "transparent"
            myRating.current.style.color = "black"
        }
    }

    useEffect(() => {
        rating()
    }, [])

  return (
    <div className="cards" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <div className="cards_img">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt="cards_img"
        />
        {/* <div className="ribbon" ref={myRibbon}>
            <p>Promoted</p>
        </div> */}
      </div>

      <div className="cards_info">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>

        <ul>
          <li className="rating" ref={myRating}>
            <FontAwesomeIcon
              icon={faStar}
              style={{
                padding: "2px 1px",
                fontSize: "10px",
                textAlign: "center",
              }}
            />
            <span> {avgRating} </span>{" "}
          </li>
          <li>{slaString}</li>
          <li>{costForTwoString}</li>
        </ul>
      </div>

      <div className="hidden" ref={myRef}>
        <p>QUICK VIEW</p>
      </div>
    </div>
  );
}

export default RestaurantCards;
