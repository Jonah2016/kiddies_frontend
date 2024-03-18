import React, { useEffect, useState } from "react";
import styles from "../assets/css/custom.module.css";
import Title from "./Title";
import NormalCard from "./NormalCard";

function Events({ limit }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_EVENT_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <>
      <div className="p-4 md:p-6" key={Math.random()}>
        <div className="p-4">
          <Title style={`${styles.header__text} `} title="News and Events" />
        </div>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          {events.slice(0, limit).map((item) => (
            <NormalCard
              key={item._id}
              data={{
                id: item._id,
                title: item.name,
                image: item.image,
                briefing: item.description,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;
