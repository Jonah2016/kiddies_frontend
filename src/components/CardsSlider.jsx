import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/css/custom.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const baseUrl = process.env.REACT_APP_BASE_URL + "library/";

function CardsSlider(props) {
  const { data, containerHeight, slide, slideImage, options } = props;

  const handleNextBtnClick = () => {
    const slidesContainer = document.querySelector(".slidesContainer");
    const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  };
  const handlePrevBtnClick = () => {
    const slidesContainer = document.querySelector(".slidesContainer");
    const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  };

  function renderCardItems(bookData) {
    // Use the map function on the data array
    const mappedData = bookData.map((item) => {
      return (
        <div
          key={item._id}
          className={`slide h-full w-[100%] md:w-[25%] sm:w-[25%] flex-shrink-0 snap-center rounded overflow-hidden`}
        >
          <div className="mx-3 mt-6 flex flex-col  rounded-lg sm:shrink-0 sm:grow sm:basis-0">
            <div className={`h-[${slideImage.h}] w-[${slideImage.w}]`}>
              <img
                src={item.image}
                loading="lazy"
                className={`aspect-square rounded-t-lg h-full w-full object-cover`}
                alt="Skyscrapers"
              />
            </div>
            <div className="py-6 ">
              {options.title && (
                <h5
                  className={`mb-3 text-xl h-auto md:h-12 font-medium leading-tight text-[${slide.titleColor}] dark:text-[${slide.titleColor}] `}
                >
                  <Link
                    to={`${baseUrl}${item._id}`}
                    className={`hover:underline hover:underline-offset-3 font-bold ${styles.clamp__2} text-[${slide.titleColor}] `}
                  >
                    {item.title}
                  </Link>
                </h5>
              )}
              {options.author && (
                <p
                  className={`mb-2 font-light text-sm text-[${slide.bodyColor}] ${styles.clamp__2}  ${styles.clamp__3__sm} dark:text-[${slide.bodyColor}]`}
                >
                  By {item.author}
                </p>
              )}
              {options.genre && (
                <p
                  className={`mb-4 font-light text-sm text-[${slide.bodyColor}] ${styles.clamp__2}  ${styles.clamp__3__sm} dark:text-[${slide.bodyColor}]`}
                >
                  {item.genre}
                </p>
              )}
              {options.button && (
                <Link
                  to={`${baseUrl}${item._id}`}
                  className={`pt-2 font-medium text-[1.15rem] flex items-center hover:underline hover:underline-offset-3 text-[${slide.btnColor}]`}
                >
                  Read more
                  <span className="px-1">
                    <AiOutlineArrowRight size={20} />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      );
    });
    return mappedData;
  }

  return (
    <div className="relative">
      <div
        className={`${styles.slides__container} slidesContainer h-[${containerHeight}] flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0`}
      >
        {data.length > 0 && renderCardItems(data)}
      </div>

      <div className="absolute top-0 -left-4 h-full items-center flex">
        <button
          className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group shadow-[0_2px_15px_-3px_rgba(0,0,0,0.08),0_10px_20px_-2px_rgba(0,0,0,0.08)] border"
          aria-label="prev"
          onClick={handleNextBtnClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-0 -right-4 h-full items-center flex">
        <button
          className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group shadow-[0_2px_15px_-3px_rgba(0,0,0,0.08),0_10px_20px_-2px_rgba(0,0,0,0.08)] border"
          aria-label="next"
          onClick={handlePrevBtnClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CardsSlider;
