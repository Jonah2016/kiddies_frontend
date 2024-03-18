import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RegisterBanner from "../../components/RegisterBanner";
import "./BookDetails.css";
import useFetchData from "../../middleware/hooks";
import RatingStars from "../../components/RatingStars";
import { BsAward } from "react-icons/bs";
import HeaderHeroShort from "../../components/HeaderHeroShort";

function BookDetails() {
  const { id } = useParams(); // Access the ID parameter

  const { data: bookData } = useFetchData(process.env.REACT_APP_BOOKS_URL + id);

  const heroProperties = {
    banner:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainTitle: {
      text: "Book Details",
      color: "#f8f8f8",
      show: true,
    },
    subTitle: {
      text: "",
      color: "#ffff",
      show: false,
    },
    button: { show: false, url: "#", text: "Read more" },
  };

  return (
    <main className="md:m-6 m-auto max-w-[1280px] ">
      <Navbar />

      <section className="mb-12">
        <HeaderHeroShort properties={heroProperties} />
      </section>

      <section className="mb-12">
        <div className="details_card_wrapper">
          <div className="details_card">
            {/* details_card left */}
            <div className="product-imgs">
              <div className="details_img_display">
                <div className="details_img_showcase">
                  <img
                    className="details_card_img"
                    src={bookData.image}
                    alt="book details"
                  />
                </div>
              </div>
            </div>
            {/* details_card right */}
            <div className="product-content">
              <h2 className="product-title">{bookData.title}</h2>
              <div className="product-rating">
                <span>
                  {bookData.rating && (
                    <div className="my-2">
                      <span>Rating: </span>
                      <RatingStars rate={bookData.rating} />
                    </div>
                  )}
                </span>
              </div>
              <div>
                {bookData.award_status === 1 && (
                  <div className="my-4">
                    <b className="py-3">Best Selling Award: </b>
                    <BsAward
                      size={50}
                      className="text-green-500"
                      title="Best selling award"
                    />
                  </div>
                )}
              </div>

              {/* <div className="product-price">
                 <p className="last-price">
                  Old Price: <span>$257.00</span>
                </p>
                <p className="new-price">
                  New Price: <span>$249.00 (5%)</span>
                </p>
              </div> */}
              <div className="product-detail">
                <h2 className="font-bold">about this book: </h2>
                <p>{bookData.description}</p>
                <ul>
                  <li>
                    Category: <span>{bookData.category}</span>
                  </li>
                  <li>
                    Genre: <span>{bookData.genre}</span>
                  </li>
                  <li>
                    Year Published: <span>{bookData.year_published}</span>
                  </li>
                  <li>
                    Age Group: <span>{bookData.age_group}</span>
                  </li>
                  <li>
                    Diversity: <span>{bookData.diversity}</span>
                  </li>
                </ul>
              </div>
              <div className="purchase-info">
                <button type="button" className="btn">
                  Add to Cart <i className="fas fa-shopping-cart" />
                </button>
                <Link to={bookData.url} className="btn2">
                  Visit Store Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 min-h-100">
        <RegisterBanner />
      </section>

      <section className="min-h-100">
        <Footer />
      </section>
    </main>
  );
}

export default BookDetails;
