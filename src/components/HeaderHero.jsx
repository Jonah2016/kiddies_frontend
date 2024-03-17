import React from "react";
import { Link } from "react-router-dom";

function HeaderHero(props) {
  const { banner, mainTitle, subTitle, button } = props.properties;
  const heroTitle = mainTitle.text;
  const showMainTitle = mainTitle.show;
  const mainTitleColor = mainTitle.color;
  const heroSubTitle = subTitle.text;
  const showSubTitle = subTitle.show;
  const subTitleColor = subTitle.color;
  const btnUrl = button.url;
  const btnText = button.text;
  const showBtn = button.show;

  return (
    <div className="md:flex md:flex-row sm:flex-col">
      <div className="w-[100%]">
        <img
          loading="lazy"
          className="h-[25rem] md:h-[36rem] w-full object-cover"
          src={banner}
          alt="hero"
        />
        <div className="absolute top-[25%] left-[10%] right-[10%] md:top-[25%] md:left-[15%] md:right-[15%] lg:top-[40%] lg:left-[20%] lg:right-[20%] text-center">
          {showMainTitle && (
            <h1
              className={`md:text-7xl text-4xl font-extrabold mb-3`}
              style={{ color: mainTitleColor }}
            >
              {heroTitle}
            </h1>
          )}
          {showSubTitle && (
            <h3
              className={`md:text-lg text-md font-light tracking-wide mb-3`}
              style={{ color: subTitleColor }}
            >
              {heroSubTitle}
            </h3>
          )}
          {showBtn && (
            <div className="mt-[2rem]">
              <Link
                className="text-white bg-[#f3701d] hover:bg-[#ee8d51] focus:outline-none focus:ring-4 focus:ring-[#d67e48] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                to={btnUrl}
              >
                {btnText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderHero;
