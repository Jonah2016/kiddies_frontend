import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RegisterBanner from "../../components/RegisterBanner";
import "./EventDetails.css";
import useFetchData from "../../middleware/hooks";
import RatingStars from "../../components/RatingStars";
import HeaderHeroShort from "../../components/HeaderHeroShort";

function EventDetails() {
  const { id } = useParams(); // Access the ID parameter

  const { data: eventData } = useFetchData(
    process.env.REACT_APP_EVENT_API_URL + id
  );

  const heroProperties = {
    banner:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainTitle: {
      text: "Event Details",
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
                    src={eventData.image}
                    alt="book details"
                  />
                </div>
              </div>
            </div>
            {/* details_card right */}
            <div className="product-content">
              <h2 className="product-title">{eventData.name}</h2>
              <div className="product-rating">
                <span>
                  {eventData.rating && (
                    <div className="my-2">
                      <span>Rating: </span>
                      <RatingStars rate={eventData.rating} />
                    </div>
                  )}
                </span>
              </div>

              <div className="product-detail">
                <h2 className="font-bold">about this event: </h2>
                <p>{eventData.briefing}</p>
                <ul>
                  <li>
                    Date: <span>{eventData.date}</span>
                  </li>
                  <li>
                    Category: <span>{eventData.category}</span>
                  </li>
                  <li>
                    Location: <span>{eventData.location}</span>
                  </li>
                  <li>
                    Host: <span>{eventData.host}</span>
                  </li>
                </ul>
              </div>
              <div className="purchase-info">
                <Link to="#" className="btn">
                  Register Event
                </Link>
                <Link to={eventData.url} className="btn2">
                  Visit Store Site
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="product-info-tabs">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <Link
                className="nav-link active"
                id="description-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="description"
                aria-selected="true"
              >
                Full Description
              </Link>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show "
              id="description"
              aria-labelledby="description-tab"
            >
              <p>{eventData.description}</p>
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

export default EventDetails;
