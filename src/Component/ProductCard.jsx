import React, { useEffect, useState } from "react";
import { callApi } from "../Utitlies/callAPI";

export default function ProductCard({ items, handlePageKey }) {
  useEffect(() => {
    getReview();
  }, []);

  const [productRating, setProductRating] = useState(0);
  const getReview = async () => {
    const addsReview = await callApi(`/review/ad/${items._id}`);
    let sumAllReview = 0;
    let averageReview = 0;
    addsReview.forEach((element) => {
      sumAllReview += parseInt(element.rating) || 0;
    });
    averageReview = sumAllReview / (addsReview || []).length || 0;
    setProductRating(parseInt(averageReview));
  };

  const showStar = () => {
    if (productRating === 0) {
      return (
        <React.Fragment>
          {" "}
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </React.Fragment>
      );
    } else if (productRating === 1) {
      return (
        <React.Fragment>
          {" "}
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star "></i>
          <i class="fa fa-star "></i>
          <i class="fa fa-star "></i>
          <i class="fa fa-star "></i>
        </React.Fragment>
      );
    } else if (productRating === 2) {
      return (
        <React.Fragment>
          {" "}
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star "></i>
          <i class="fa fa-star "></i>
          <i class="fa fa-star "></i>
        </React.Fragment>
      );
    } else if (productRating === 3) {
      return (
        <React.Fragment>
          {" "}
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star "></i>
          <i class="fa fa-star "></i>
        </React.Fragment>
      );
    } else if (productRating === 4) {
      return (
        <React.Fragment>
          {" "}
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star "></i>
        </React.Fragment>
      );
    } else if (productRating === 5) {
      return (
        <React.Fragment>
          {" "}
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star" style={{color:"yellow"}}></i>
          <i class="fa fa-star" style={{color:"yellow"}}></i>
        </React.Fragment>
      );
    }
  };
  return (
    <div className="col-lg-4 col-md-12 col-xl-3">
      <div className="card overflow-hidden">
        {/* <div className="ribbon ribbon-top-left text-danger">
      <span className="bg-danger">
        featured
      </span>
    </div> */}
        <div className="item-card9-img">
          <div className="item-card9-imgs">
            <img
              src="../assets/images/products/h4.png"
              alt="img"
              className="cover-image"
            />
          </div>
          <div className="item-card9-icons">
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
              href="#"
              className="item-card9-icons1 wishlist"
            >
              <i className="fa fa fa-heart-o" />
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="item-card9">
            {items.category}

            <a
              href="#"
              onClick={(e) => {
                handlePageKey(e, 101, items);
              }}
              className="text-dark mt-2"
            >
              <h4 className="font-weight-semibold mt-1">{items.title}</h4>
            </a>
            <p>{items.description}</p>
            <ul className="item-cards7-ic mb-0 ">
              <li>
                <i className="icon icon-location-pin text-muted me-1" />
                {items.location}
              </li>

              <li className="d-flex">
                <i className="icon icon-phone text-muted me-1" />{" "}
                {items.phonenumber}
              </li>
            </ul>
          </div>
        </div>
        <div className="card-footer">
          <div className="item-card9-footer d-flex">
            <div className="item-card9-cost">
              <h4
                className="
                    text-dark
                    font-weight-semibold
                    mb-0
                    mt-0
                    "
              >
                $263.99
              </h4>
            </div>
            <div class="ms-auto">{showStar()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
