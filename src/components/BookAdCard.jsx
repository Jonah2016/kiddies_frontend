import React from "react";
import "./BookAdCard.css";
import { Link } from "react-router-dom";

function BookAdCard() {
  return (
    <>
      <div className="carousel sec__container">
        <div className="carousel__wrapper">
          <div className="carousel__explanation">
            <div className="book__author">
              <figure className="book__author-img">
                <img
                  src="https://images.unsplash.com/photo-1610669057941-53c6b567554a?w=400&q=100"
                  alt="..."
                />
              </figure>
              <span className="book__author-name">Maria Allan Ric</span>
            </div>
            <div className="book__name">The Shape of Her</div>
            <div className="feedback">
              <div className="rating">
                <span className="rating__stars" style={{ rating: "4.58" }} />
                <div className="rating__number">
                  <span className="rating__score">4.5</span>
                  <div className="rating__reviews">(1346)</div>
                </div>
              </div>
              <div className="marketing__badge">
                <span className="marketing__badge-icon">
                  <i className="icon ri-pulse-fill" />
                </span>
                <span className="marketing__badge-title">BESTSELLER</span>
              </div>
            </div>
            <div className="book__summary">
              I have always lacked somethink in my mind, but I have no doubts
              about my love. Life is somethink like...
            </div>
            <div className="carousel__action">
              <Link className="btn btn__lg btn__primary rounded__pill" to={"/"}>
                Buy Now
              </Link>
              <div className="product__price rounded__pill">
                <i className="icon ri-money-dollar-circle-line" />
                <div className="price__content">
                  <div className="old__price">
                    32<span className="old__price-fraction">90</span>
                  </div>
                  <div className="price">
                    25<span className="price__fraction">66</span>
                  </div>
                </div>
                <div className="discount__rate">%22</div>
              </div>
            </div>
          </div>
          <div className="carousel__media">
            <figure className="carousel__media-item">
              <img src="https://i.hizliresim.com/pq42a5e.jpg" alt="..." />
            </figure>
            <figure className="carousel__media-item">
              <img src="https://i.hizliresim.com/5b3hszo.jpg" alt="..." />
            </figure>
            <figure className="carousel__media-item">
              <img src="https://i.hizliresim.com/shz83mt.jpg" alt="..." />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAdCard;
