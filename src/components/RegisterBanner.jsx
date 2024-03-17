import React from "react";
import styles from "../assets/css/custom.module.css";

function RegisterBanner() {
  return (
    <>
      <div
        className={`mx-auto flex flex-wrap h-full md:h-[15rem] p-12 md:p-6 ${styles.primary__gradient__bg}`}
      >
        <div className="flex w-full  justify-start items-center flex-wrap">
          <div className="container m-auto sm:px-6 flex items-center">
            <div className="w-full md:flex md:items-center">
              <div className="w-full sm:w-1/2 mb-3">
                <h1 className="my-4 text-white">Register</h1>
                <h1 className="text-4xl font-bold text-white">
                  Register to be part of our exclusive library services
                </h1>
              </div>
              <div className="w-full sm:w-1/6 mb-3">
                <div className="mb-6 sm:flex inline-block"></div>
              </div>
              <div className="w-full sm:w-1/3 mb-3">
                <div className="inline-block sm:flex justify-end">
                  <button
                    type="button"
                    className="text-black hover:text-white text-xl bg-white hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full px-16 py-7 text-center mr-2 mb-2 dark:bg-white-600 dark:hover:bg-orange-400 dark:focus:ring-gray-800"
                  >
                    Register Here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterBanner;
