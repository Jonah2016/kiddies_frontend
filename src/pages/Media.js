import React from "react";
import Navbar from "../components/Navbar";
import HeaderHero from "../components/HeaderHero";
import Footer from "../components/Footer";
import MediaTemplate from "../components/MediaTemplate";
import useFetchData from "../middleware/hooks";
import "../components/MediaTemplate.css";

const heroProperties = {
  banner:
    "https://images.unsplash.com/photo-1478145787956-f6f12c59624d?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  mainTitle: {
    text: "Kiddies Photos & Videos",
    color: "#f3701d",
    show: true,
  },
  subTitle: {
    text: "Browse through our fun adventurous photos and videos.",
    color: "#ffff",
    show: true,
  },
  button: { show: false, url: "#", text: "Read more" },
};

function Media() {
  const { data: mediaData, loading } = useFetchData(
    process.env.REACT_APP_ALL_MEDIA_API_URL
  );

  return (
    <main className="md:m-6 m-auto max-w-[1280px] ">
      <Navbar />

      <section className="mb-12">
        <HeaderHero properties={heroProperties} />
      </section>

      <section className="mb-12">
        <h4 className="heading">
          Share into our memories{" "}
          <span className="text-orange-500"> Kiddies Memory</span>
        </h4>
        <div id="gallery" className="container-fluid mx-auto">
          {mediaData.length > 0 &&
            mediaData.map((media, index) => (
              <MediaTemplate key={index} data={media} />
            ))}
        </div>
      </section>

      <section className="min-h-100">
        <Footer />
      </section>
    </main>
  );
}

export default Media;
