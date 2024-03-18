import React from "react";
import Navbar from "../components/Navbar";
import styles from "../assets/css/custom.module.css";
import HeaderHero from "../components/HeaderHero";
import RegisterBanner from "../components/RegisterBanner";
import Footer from "../components/Footer";
import useFetchData from "../middleware/hooks";

import SvgIcon from "../components/SvgIcon";
import Loading from "../components/Loading";

const { LOAD_5 } = require("../constants/index.js");

const heroProperties = {
  banner:
    "https://scientia.themerex.net/wp-content/uploads/2018/01/bg_study-copyright.jpg?id=332",
  mainTitle: {
    text: "Services",
    color: "#ffff",
    show: true,
  },
  subTitle: {
    text: "More than just fun, it's learning in action! Kiddies Adventure Zone provides a stimulating environment where children explore, solve problems, and socialize.",
    color: "#ffff",
    show: true,
  },
  button: { show: false, url: "#", text: "Read more" },
};

function renderService(services) {
  const serviceItems = services.map((item) => (
    <div className="mb-14 lg:mb-20" key={item._id}>
      <div className="block m-5 h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#202020] hover:bg-gray-800">
        <div className="flex justify-center">
          <div
            className={`-mt-8 inline-block rounded-full ${styles.primary__bg} p-4 shadow-md hover:rotate-45`}
          >
            <SvgIcon svgData={item.icon} fillColor="#ffff" />
          </div>
        </div>
        <div className="p-6">
          <h5 className="mb-4 text-3xl text-[#f8f8f8] hover:text-[#fe7259] font-semibold">
            {item.title}
          </h5>
          <p className="text-gray-300 ">{item.description}</p>
        </div>
      </div>
    </div>
  ));

  return serviceItems;
}

function Services() {
  const { data, loading } = useFetchData(process.env.REACT_APP_SERVICE_API_URL);

  return (
    <main className="md:m-6 m-auto max-w-[1280px]">
      <Navbar />
      <HeaderHero properties={heroProperties} />

      <div className="container my-20 mx-auto md:px-6">
        <section className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold">Why is it so great?</h2>
          <p className="mb-16 lg:w-2/3 w-100 lg:mx-auto mx-4">
            Unleash the Adventure! Kiddies Adventure Zone offers a safe and
            stimulating play area for children of all ages. Book your visit
            today and let them explore, climb, and make memories that last!
          </p>

          <div className="grid lg:grid-cols-3 lg:gap-x-12">
            {!loading ? (
              data.length > 0 && renderService(data)
            ) : (
              <Loading repeatNumber={3} type={LOAD_5} />
            )}
          </div>
        </section>
      </div>

      {/* register banner */}
      <section className="min-h-100">
        <RegisterBanner />
      </section>

      <section className="min-h-100">
        <Footer />
      </section>
    </main>
  );
}

export default Services;
