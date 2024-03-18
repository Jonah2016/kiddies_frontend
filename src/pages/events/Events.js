import React from "react";
import Navbar from "../../components/Navbar.jsx";
import HeaderHeroShort from "../../components/HeaderHeroShort.jsx";
import Footer from "../../components/Footer.jsx";
import RegisterBanner from "../../components/RegisterBanner.jsx";
import EventTwo from "../../components/EventTwo.jsx";
import CardsSlider from "../../components/CardsSlider.jsx";
import Title from "../../components/Title.jsx";
import styles from "../../assets/css/custom.module.css";
import { COLORS } from "../../assets/theme/theme.js";
import useFetchData from "../../middleware/hooks.js";
import Loading from "../../components/Loading.jsx";

const { LOAD_7 } = require("../../constants/index.js");

const heroProperties = {
  banner:
    "https://images.unsplash.com/photo-1467307983825-619715426c70?q=80&w=2577&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  mainTitle: {
    text: "Kiddies Events",
    color: "#f8f8f8",
    show: true,
  },
  subTitle: {
    text: "Browse through several kids' adventurous events, and also book us for your next party.",
    color: "#ffff",
    show: true,
  },
  button: { show: false, url: "#", text: "Read more" },
};

function Events() {
  const { data: bookData, loading: bookLoading } = useFetchData(
    process.env.REACT_APP_CATALOG_API_URL
  );

  return (
    <main className="md:m-6 m-auto max-w-[1280px] ">
      <Navbar />

      <section className="mb-12">
        <HeaderHeroShort properties={heroProperties} />
      </section>

      {/* events section */}
      <section className="min-h-100 m-0 md:m-6">
        <EventTwo limit={10} />
      </section>

      <section className="mb-12 min-h-100">
        <RegisterBanner />
      </section>

      {/* library books */}
      <section className="min-h-100 bg-white">
        <div className="container mx-auto h-[36rem] md:h-[40rem]">
          <div className="pt-12 pb-6 px-12">
            <Title
              style={`${styles.header__text} `}
              title="Explore Our Books"
            />
          </div>
          <div className="px-6 md:px-12">
            {!bookLoading ? (
              <CardsSlider
                data={bookData}
                containerHeight="25rem"
                slide={{
                  mdw: "15rem",
                  w: "100%",
                  titleColor: COLORS.dark,
                  bodyColor: COLORS.faintBlack,
                  btnColor: COLORS.primary,
                }}
                slideImage={{ h: "12rem", w: "100%" }}
                options={{
                  title: true,
                  genre: true,
                  author: true,
                  briefing: true,
                  button: true,
                }}
              />
            ) : (
              <Loading repeatNumber={6} type={LOAD_7} />
            )}
          </div>
        </div>
      </section>

      <section className="min-h-100">
        <Footer />
      </section>
    </main>
  );
}

export default Events;
