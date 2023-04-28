import { BsChevronDown } from "react-icons/bs";
import { useRef } from "react";
import MenuList from "./MenuList";

const RestaurantMenu = ({ title, itemCards }) => {
  const widthChanger = useRef(null);

  const onChangeWidth = () => {
    if (widthChanger.current.style.display === "none") {
      widthChanger.current.style.display = "block";
    } else {
      widthChanger.current.style.display = "none";
    }
  };

  return itemCards === undefined ? (
    ""
  ) : (
    <>
      <div className="menu_header" onClick={onChangeWidth}>
        <h1>
          {title} (<span>{itemCards.length}</span>){" "}
        </h1>
        <p>
          <BsChevronDown values={{ className: "header_downIcon" }} />
        </p>
      </div>

      <div className="menu" ref={widthChanger}>
        {itemCards.map((element,index) => (
          <MenuList data={element} key={index} />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
