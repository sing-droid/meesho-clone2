import "./card.css";

import { useEffect, useState } from "react";
import { FaPercentage } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addDataLoading,
  addDATASuccess,
  setProductData,
} from "../../store/actions";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/header-footer'/Navbar";

export const Final = () => {
  //   const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { text } = location.state;

  console.log(location);

  // data = data.data;
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
      .then((res) => res.json())
      .then((res) => {
        // console.log(("res", res));
        dispatch(addDATASuccess(res));
      });
  };
  let { data } = useSelector((state) => ({
    data: state.addDataReducer.productData,
  }));
  console.log("data", data);
  console.log(text)
  return (
    <>
      <Navbar />
      <div className="productFullPage" id="proContainer">
        {data.filter((category) => {if(category.category== text){return category}}).map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
            rating,

          }) => (
            <div
              className="productCard"
              // onClick={() => {
              //   navigate(`/details/${id}`);
              // }}
            >
              <Link to = {`/details/${id}`} state = {{id : id,tit: title, description:description,price:price,image:image,rating:rating}}> 
              
              <div key = {id} className="card-body text-left">
                <div className="card">
                  <img
                    src={image}
                    alt="product"
                    className="card-img-top productImg"
                  />
                </div>
                <div className="card-title">
                  <h4 className="card-title">{title}</h4>
                </div>

                <div className="price">
                  <div className="currentPrice">
                    <FaRupeeSign />
                    {price}
                  </div>
                  <div className="actualPrice">
                    <del>{price}</del>
                  </div>
                  {/* <div className="discount">
                    <FaPercentage className="percentage" />
                    {discounted_price} off
                  </div> */}
                </div>

                <div className="startingOffer">
                  <p className="startingOffer">
                    <FaPercentage className="percentage" />
                    <FaRupeeSign />
                    100 disocunt on first order
                  </p>
                </div>
                
                <div className="freeDelivery text-center">
                  <div className="badge">
                    <span>Free Delivery</span>
                  </div>
                </div>

                <div className="ratings">
                  <p>
                    <span className="badge">
                      {rating.rate}
                      <FaStar className="FaStar" />
                    </span>
                    Supplier
                  </p>
                </div>
             
              </div>
              </Link>
            </div>
            
          )
        )}
      </div>
    </>
  );
};
