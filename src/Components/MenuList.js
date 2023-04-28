import React from "react";
import vegIcon from "./Assets/vegIcon.png"
import { FaStar } from "react-icons/fa";

export default function MenuList({ data }) {
  const { name, description, imageId, price, isBestseller, showImage, isVeg } =
    data?.card?.info;
  return (
    <>
      <ul>
        <li>
          <div className="menu_container">
            <div className="leftSide">
              <div className="menu_namePrice">
                <div className="menuList_top">
                  <div className="menu_vegIcon">
                    {(isVeg) ? <img src={vegIcon} alt="veg icon" /> : <img src="https://img.icons8.com/fluency/96/null/non-vegetarian-food-symbol.png" alt="non_veg icon"/>}
                  </div>
                  {isBestseller === true ? (
                    <span className="menu_bestsellerTag">
                      <FaStar style={{verticalAlign : 'centre'}}/> Bestseller
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
                <h2>{name}</h2>
                <p>
                  <span>&#8377;</span> <span>{price / 100}</span>
                </p>
              </div>

              <div className="menu_desp">
                <p>{description}</p>
              </div>
            </div>

            <div className={(showImage) ? "rightSide" : "nI-rightSide"}>
              { (showImage) ? 
                <div className="img">
                  <img
                    src={
                      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                      imageId
                    }
                    alt=""
                  />
                </div> : <></>
              }
              <div className="button_section">
                <button>
                  <div className="button_divADD">ADD</div>
                  <div className="button_divPLUS">+</div>
                </button>
                <div className="button_customisble">Customisble</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
