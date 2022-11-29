import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFlashDealsItem } from "../../features/flashDealsSlice";
import "./flashDeals.css";
import SingleItem from "./singleItem/SingleItem";
import Carousel from "@itseasy21/react-elastic-carousel";

function FlashDeals() {
  const dispatch = useDispatch();
  const { flashDealsItems } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getFlashDealsItem());
  }, [dispatch]);

  const [width, setWidth] = useState(window.innerWidth);
  const handleWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, []);

  const breakPoints = [
    { width: 300, itemsToShow: 2 },
    { width: 500, itemsToShow: 3 },
    { width: 700, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 2 },
  ];

  return (
    <div className="flashDeals-container">
      <div className="heading">
        <p>Flash Deals</p>
      </div>
      <div className="flashDealsItems">
        <Carousel
          breakPoints={breakPoints}
          showArrows={width >= 400 ? true : false}
        >
          {flashDealsItems?.map((item) => (
            <SingleItem
              key={item.id}
              img={item?.images[0]}
              img1={item?.images[2]}
              rating={item?.rating}
              name={item?.title}
              brand={item?.brand}
              categories={item?.category}
              oriPrice={item?.price}
              discountPrice={item?.discountPercentage}
              stock={item?.stock}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default FlashDeals;
