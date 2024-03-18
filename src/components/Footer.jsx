import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo1.jpeg";

function Footer() {
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVICE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  function renderFooterServices(data) {
    const servData = data.map((item) => {
      return (
        <li key={item._id}>
          <Link to={"/"}>{item.title}</Link>
        </li>
      );
    });
    return servData;
  }

  return (
    <>
      <footer className="bg-gray-100 footer-area">
        <div className="mb-16 mx-auto px-12 footer-widget">
          <div className="container">
            <div className="row">
              <div className="w-full">
                <div className="items-end justify-between block mb-8 footer-logo-support md:flex">
                  <div className="flex items-end footer-logo">
                    <Link className="mt-8" to={"/"}>
                      <img
                        src={logo}
                        className="img-fluid block h-10 w-15"
                        alt="Logo"
                      />
                    </Link>

                    <ul className="flex mt-8 ml-8 footer-social">
                      <li>
                        <Link to={"/"}>
                          <i className="lni-facebook-filled"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <i className="lni-twitter-original"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <i className="lni-instagram-original"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <i className="lni-linkedin-original"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
                <div className="mb-8 footer-link">
                  <h6 className="footer-title">Company</h6>
                  <ul>
                    <li>
                      <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                      <Link to={"/events"}>Events</Link>
                    </li>
                    <li>
                      <Link to={"/library"}>Library Catalog</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="mb-8 footer-link">
                  <h6 className="footer-title">Our Services</h6>
                  <ul>{service.length > 0 && renderFooterServices(service)}</ul>
                </div>
              </div>
              <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/4">
                <div className="mb-8 footer-link">
                  <h6 className="footer-title">Help & Suuport</h6>
                  <ul>
                    <li>
                      <Link to={"/"}>Support Center</Link>
                    </li>
                    <li>
                      <Link to={"/"}>FAQ</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full sm:w-7/12 md:w-1/2 lg:w-1/3">
                <div className="mb-8 footer-newsletter">
                  <h6 className="footer-title">Subscribe Newsletter</h6>
                  <div className="newsletter">
                    <form action="#" className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="w-full py-3 pl-6 pr-12 duration-300 bg-gray-200 border border-gray-200 rounded-full focus:border-blue-600 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="absolute top-0 right-0 mt-3 mr-6 text-xl text-blue-600"
                      >
                        <i className="lni-angle-double-right"></i>
                      </button>
                    </form>
                  </div>
                  <p className="font-medium text-gray-900">
                    Subscribe weekly newsletter to stay upto date. We don’t send
                    spam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f2f0ee;] footer-copyright">
          <div className="container">
            <div className="row">
              <div className="w-full">
                <div className="py-6 text-center">
                  <p className="">
                    Portfolio Project Crafted by
                    <Link
                      className="text-[#f3701d] duration-300 px-1 hover:text-[#f36b1d]"
                      rel="nofollow"
                      to="https://www.linkedin.com/in/jonah-e-93a6a2167"
                      target="__blank"
                    >
                      Jonah
                    </Link>
                    &
                    <Link
                      className="text-[#f3701d] duration-300 px-1 hover:text-[#f36b1d]"
                      rel="nofollow"
                      to="https://www.linkedin.com/in/stephen-amponsah"
                      target="__blank"
                    >
                      Stephen
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
