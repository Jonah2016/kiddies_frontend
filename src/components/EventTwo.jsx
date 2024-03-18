import React from "react";
import styles from "../assets/css/custom.module.css";
import Title from "./Title";
import NormalCardTwo from "./NormalCardTwo";
import useFetchData from "../middleware/hooks";
import Loading from "./Loading.jsx";
const { LOAD_3 } = require("../constants/index.js");

function EventTwo({ limit }) {
  const { data: eventData, loading: eventLoading } = useFetchData(
    process.env.REACT_APP_EVENT_API_URL
  );

  return (
    <>
      <div className="p-4 md:p-6" key={Math.random()}>
        <div className="p-4">
          <Title style={`${styles.header__text} `} title="News and Events" />
        </div>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 gap-10 ">
          {!eventLoading ? (
            eventData.slice(0, limit).map((item) => (
              <NormalCardTwo
                key={item._id}
                data={{
                  id: item._id,
                  title: item.name,
                  image: item.image,
                  description: item.description,
                  briefing: item.briefing,
                  host: item.host,
                  url: item.url,
                  rate: item.rating,
                }}
              />
            ))
          ) : (
            <Loading repeatNumber={3} type={LOAD_3} />
          )}
        </div>
      </div>
    </>
  );
}

export default EventTwo;
