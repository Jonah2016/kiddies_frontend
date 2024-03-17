import React from "react";
import Navbar from "../components/Navbar";
import HeaderHero from "../components/HeaderHero";
import Footer from "../components/Footer";

const heroProperties = {
  banner:
    "https://images.unsplash.com/photo-1537655780520-1e392ead81f2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  return (
    <main className="md:m-6 m-auto max-w-[1280px] ">
      <Navbar />

      <section className="mb-12">
        <HeaderHero properties={heroProperties} />
      </section>

      <section className="min-h-100">
        <Footer />
      </section>
    </main>
  );
}

export default Media;
