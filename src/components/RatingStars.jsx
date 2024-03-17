import React from "react";
import { BiStar, BiSolidStar, BiSolidStarHalf } from "react-icons/bi";

function RatingStars({ rate }) {
  function getRating(rateVal) {
    const defStars = (
      <>
        <div className="flex">
          <BiStar key="default1" className="text-gray-600 mr-1" />
          <BiStar key="default2" className="text-gray-600 mr-1" />
          <BiStar key="default3" className="text-gray-600 mr-1" />
          <BiStar key="default4" className="text-gray-600 mr-1" />
          <BiStar key="default5" className="text-gray-600 mr-1" />
        </div>
      </>
    );

    if (rateVal > 0) {
      const fullStars = Math.floor(rateVal);
      const hasHalfStar = Math.round(rateVal - fullStars, 1) === 0.5;

      let stars = [];
      for (let i = 1; i <= fullStars; i++) {
        stars.push(
          <BiSolidStar key={`full${i}`} className="text-yellow-400 mr-1" />
        );
      }
      if (hasHalfStar) {
        stars.push(
          <BiSolidStarHalf
            key={(Math.random() * 10).toFixed(0)}
            className="text-yellow-400 mr-1"
          />
        );
      }

      return <div className="flex">{stars}</div>;
    } else {
      return defStars;
    }
  }

  const stars = getRating(rate); // Store the generated stars

  return <>{stars}</>; // Return the JSX element directly
}

export default RatingStars;
