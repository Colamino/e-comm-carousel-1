import React from "react";
import ReactStars from "react-rating-stars-component";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { increase } from "../../../features/flashDealsSlice";

function SingleItem({
  img,
  img1,
  rating,
  name,
  brand,
  categories,
  oriPrice,
  discountPrice,
  stock,
}) {
  const itemColor = ["black", "#F5EBE0", "gray", "orange"];
  const discount = (oriPrice * discountPrice) / 100;
  const dispatch = useDispatch();

  return (
    <div className="flashDealsIteams-item">
      <div className="item-img">
        <img src={img} alt="" className="first-img" />
        <img src={img1} alt="" className="second-img" />
        {stock <= 50 && <div className="item-tag">Sale</div>}
        <div className="middle">
          <div className="text">Quick View</div>
        </div>
      </div>
      <div className="item-rating">
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          value={rating}
          isHalf
        />
      </div>
      <div className="item-name">{`${name} - ${brand} - ${categories}`}</div>
      <div className="item-price">
        <span className="ori-price">{`$${oriPrice}`}</span>
        <p>From</p>
        <p className="discount-price">{`$${(oriPrice - discount).toFixed(
          2
        )}`}</p>
      </div>
      <div className="item-color">
        {itemColor.map((color, i) => (
          <div
            key={i}
            style={{
              backgroundColor: color,
            }}
            className="colors"
          />
        ))}
      </div>
      <div className="cart-button">
        <button onClick={() => dispatch(increase())}>add to cart</button>
      </div>
      <div className="love">
        <AiOutlineHeart />
      </div>
    </div>
  );
}

export default SingleItem;
