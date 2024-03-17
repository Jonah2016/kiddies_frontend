import React from "react";
import styles from "../assets/css/custom.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Title from "./Title";
import { Link } from "react-router-dom";

function Hero(props) {
  const heroImg = props.image;
  return (
    <div className="md:flex md:flex-row sm:flex-col">
      <div className=" md:w-[70%] sm:w-[100%]">
        <img
          loading="lazy"
          className="h-[22rem] md:h-[36rem] w-full object-cover"
          src={heroImg}
          alt="hero"
        />
      </div>
      <div className="basis-4/12">
        {/* card 1 */}
        <div className="basis-12/12 h-50 md:h-48 bg-[#f2f0ee] text-left px-3 border-b-2">
          <div className="px-4 py-5 ">
            <Title style={`${styles.header__text}`} title="Library Guides" />
            <p className="pb-2">
              Find books, media, databases, e-journals and digital resources.
            </p>
            <Link
              to={"/library"}
              className="text-[1.2rem] font-extralight text-[#f3701d] flex items-center hover:underline underline-offset-4"
            >
              Find Books
              <span className="px-1">
                <AiOutlineArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        {/* card 2 */}
        <div className="basis-12/12 h-50 md:h-48 bg-[#f2f0ee] text-left px-3">
          <div className="px-4 py-5 ">
            <Title
              style={`${styles.header__text}`}
              title="Borrow, Reserve, Renews"
            />
            <p className="pb-2">
              Get advanced research assistance in dozens of subject areas.
            </p>
            <Link
              to={"/"}
              className="text-[1.2rem] font-extralight text-[#f3701d] flex items-center hover:underline underline-offset-4"
            >
              Read more
              <span className="px-1">
                <AiOutlineArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        {/* card 3, dates */}
        <div className="basis-12/12 h-48 bg-[#e93a27] text-center">
          <div className="px-4 py-12 transition duration-500 hover:scale-110">
            <h5 className="text-white text-md pb-5">
              The library is opened from
            </h5>
            <h3 className="text-white text-xl font-bold uppercase">
              Monday - Saturday
            </h3>
            <h3 className="text-white text-xl font-bold uppercase">
              6:00 AM – 8:00 PM
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
