import React from "react";
import "./BookCard.css";
import RatingStars from "./RatingStars";
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_BASE_URL + "library/";

function BookCard({ props }) {
  const {
    _id,
    title,
    category,
    year_published,
    rating,
    briefing,
    author,
    image,
  } = props;

  return (
    <div className="md:w-1/2 w-full p-3" key={_id}>
      <div className="books">
        <div>
          <img src={image} alt={title} className="book-img" />
        </div>
        <div className="descp">
          <h2 className="book-name">
            {/* <Link to={`${baseUrl}${process.env.REACT_APP_BOOKS_URL}/${_id}`}> */}
            {title}
            {/* </Link> */}
          </h2>
          <h3 className="author">by {author}</h3>
          <h3 className="rating">
            {rating && (
              <div className="my-2">
                <RatingStars rate={rating} />
              </div>
            )}
          </h3>
          <h3 className="author">Category: {category}</h3>
          <h3 className="author">Year: {year_published}</h3>
          <p className="info">{briefing} </p>
          <div className="mt-6">
            <Link className="book_button" to={`${baseUrl}${_id}`}>
              See the Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
