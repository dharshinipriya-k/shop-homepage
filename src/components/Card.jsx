import React, { useState } from "react";

function Card({ data, cartCount, setCartCount }) {
  let [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Sale badge--> */}
          <div
            className={
              data.isBadge
                ? "badge bg-dark text-white position-absolute"
                : "no-badge"
            }
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
          {/* <!-- Product image--> */}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{data.title}</h5>
              {/* <!-- Product reviews--> */}
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div
                  className={data.isRating ? "bi-star-fill" : "no-review"}
                ></div>
                <div
                  className={data.isRating ? "bi-star-fill" : "no-review"}
                ></div>
                <div
                  className={data.isRating ? "bi-star-fill" : "no-review"}
                ></div>
                <div
                  className={data.isRating ? "bi-star-fill" : "no-review"}
                ></div>
                <div
                  className={data.isRating ? "bi-star-fill" : "no-review"}
                ></div>
              </div>
              {/* <!-- Product price--> */}
              <span
                className={
                  data.isDiscount
                    ? "text-muted text-decoration-line-through"
                    : "no-discount"
                }
              >
                {data.originalPrice}
              </span>
              {data.isDiscount ? data.discountPrice : data.price}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {data.isOption ? (
                <button className="btn btn-outline-dark mt-auto">
                  View Options
                </button>
              ) : toggle ? (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {
                    setCartCount(cartCount + 1);
                    setToggle(false);
                  }}
                >
                  Add to cart
                </button>
              ) : (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {
                    setCartCount(cartCount - 1);
                    setToggle(true);
                  }}
                >
                  Remove from cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
