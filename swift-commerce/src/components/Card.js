//Imports
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/card.css";

//card component
function Card({id, image, price, title, handleCount }) {
  const navigate = useNavigate();

  //Handle View function path to Product View
  function handleView() {
    navigate("/productview");
    console.log("Navigated");
  }

  return (
    <div className="card-container mx-1 mb-1">
      <div className="card-image">
        <img
          src={`${image}`}
          alt="online-card"
          className="card-image-inner w-full h-20"
        />
      </div>
      <div className="card-main">
        <div className="flex flex-col">
          <p className="text-xs h-3 mb-3">{title}</p>
          <p>$ {price}</p>
        </div>
        <div>
          <Link to={`/shop/${id}`}>
            <button
              className="flex flex-auto bg-slate-600"
              onClick={handleView}
            >
              View
            </button>
          </Link>
          <button className="flex flex-auto bg-slate-600" onClick={handleCount}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
