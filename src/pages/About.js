import React from "react";
import Navbar from "../components/Navbar";
import styles from "../assets/css/custom.module.css";
import HeaderHero from "../components/HeaderHero";
import {
  GiShakingHands,
  GiSpockHand,
  GiArcheryTarget,
  GiBullseye,
  GiTakeMyMoney,
  GiTeamIdea,
  GiTeamUpgrade,
  GiMedicalPack,
} from "react-icons/gi";
import IconCard from "../components/IconCard";
import Title from "../components/Title";
import RegisterBanner from "../components/RegisterBanner";
import Footer from "../components/Footer";
import useFetchData from "../middleware/hooks";
import Loading from "../components/Loading";

const { LOAD_1 } = require("../constants/index.js");

const valuesData = [
  {
    maintext: "Respect",
    subtext:
      "We treat clients, staff, volunteers and our community with dignity, courtesy, and consideration.",
    icon: (
      <GiShakingHands
        className={`absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl ${styles.primary__text} bg-opacity-20 duration-300 group-hover:rotate-45`}
        size={80}
      />
    ),
    show: true,
  },
  {
    maintext: "Commitment",
    subtext:
      "We are committed to ensuring excellence and partnering effectively with families, organizations, and communities.",
    icon: (
      <GiSpockHand
        className={`absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl ${styles.primary__text} bg-opacity-20 duration-300 group-hover:rotate-45`}
        size={80}
      />
    ),
    show: true,
  },
  {
    maintext: "Accountability",
    subtext:
      "We exercise honesty and responsibility in our actions, decisions, and use of resources.",
    icon: (
      <GiTakeMyMoney
        className={`absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl ${styles.primary__text} bg-opacity-20 duration-300 group-hover:rotate-45`}
        size={80}
      />
    ),
    show: true,
  },
  {
    maintext: "Collaboration",
    subtext:
      "We strive to work collaboratively with individuals, families, organizations, and communities.",
    icon: (
      <GiTeamUpgrade
        className={`absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl ${styles.primary__text} bg-opacity-20 duration-300 group-hover:rotate-45`}
        size={80}
      />
    ),
    show: true,
  },
  {
    maintext: "Teamwork",
    subtext:
      "Our mission is successfully carried out through staff, volunteers and partners sharing ideas talents and resources.",
    icon: (
      <GiTeamIdea
        className={`absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl ${styles.primary__text} bg-opacity-20 duration-300 group-hover:rotate-45`}
        size={80}
      />
    ),
    show: true,
  },
  {
    maintext: "Safety",
    subtext:
      "We treat clients, staff, volunteers and our community with dignity, courtesy, and consideration.",
    icon: (
      <GiMedicalPack
        className={`absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl ${styles.primary__text} bg-opacity-20 duration-300 group-hover:rotate-45`}
        size={80}
      />
    ),
    show: true,
  },
];

function About() {
  const { data: aboutData, loading } = useFetchData(
    process.env.REACT_APP_ABOUT_API_URL
  );

  const heroProperties = {
    banner:
      "https://scientia.themerex.net/wp-content/uploads/2019/05/Depositphotos_155947488_xl-2015_2-copyright.jpg?id=1442",
    mainTitle: {
      text: "About Us",
      color: "#ffff",
      show: true,
    },
    subTitle: {
      text: aboutData.briefing,
      color: "#ffff",
      show: true,
    },
    button: { show: false, url: "#", text: "Read more" },
  };

  return (
    <main className="md:m-6 m-auto max-w-[1280px] ">
      <Navbar />
      <HeaderHero properties={heroProperties} />

      <section className="bg-[#ffff] pt-20 pb-0 lg:pt-[120px] lg:pb-11">
        {!loading ? (
          <div className="lg:container mx-auto ">
            <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
              <div className="flex flex-wrap">
                <div className="w-full lg:px-4">
                  <div className="w-full items-center overflow-hidden lg:flex">
                    <div className="w-full p-7 md:pr-12 lg:w-[60%] ">
                      <span
                        className={`mb-5 inline-block ${styles.primary__bg} py-2 px-5 text-sm font-medium text-white`}
                      >
                        Know Us
                      </span>
                      <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                        {aboutData.company_name}
                      </h2>
                      <p className="mb-2 text-gray-500 text-[0.88rem] leading-relaxed">
                        {aboutData.description}
                      </p>

                      <div className="m-0 flex flex-wrap">
                        <div className="w-full md:px-0 px-2 md:w-1/2">
                          <IconCard
                            icon={
                              <GiArcheryTarget
                                className={`${styles.primary__bg} text-white p-2 absolute top-0 left-0 z-[-1] flex rotate-[25deg] items-center justify-center rounded-2xl bg-opacity-20 duration-300 group-hover:rotate-45`}
                                size={60}
                              />
                            }
                            maintext="Mission"
                            subtext={aboutData.mission}
                          />
                        </div>
                        <div className="w-full md:px-0 px-2 md:w-1/2">
                          <IconCard
                            icon={
                              <GiBullseye
                                className={`${styles.primary__bg} text-white p-2 absolute top-0 left-0 z-[-1] flex rotate-[25deg] items-center justify-center rounded-2xl bg-opacity-20 duration-300 group-hover:rotate-45`}
                                size={60}
                              />
                            }
                            maintext="Mission"
                            subtext={aboutData.vision}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center w-full lg:w-[40%]">
                      <div className="relative z-10 inline-block">
                        <img
                          src={aboutData.image_one}
                          alt="about children"
                          className="mx-auto lg:ml-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <Title style={`${styles.header__text}`} title="Core Values" />
            </div>
            <div className="m-0 flex flex-wrap border ">
              {valuesData.map((value) => (
                <div
                  key={value.maintext}
                  className="w-full px-4 md:w-1/2 lg:w-1/3 border"
                >
                  <IconCard
                    icon={value.icon}
                    maintext={value.maintext}
                    subtext={value.subtext}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Loading repeatNumber={1} type={LOAD_1} />
        )}
      </section>

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

export default About;
