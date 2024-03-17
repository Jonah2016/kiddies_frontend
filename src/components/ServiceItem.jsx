import React from "react";
import { COLORS } from "../assets/theme/theme";
import styles from "../assets/css/custom.module.css";

function ServiceItem(props) {
  const { id, title, gist, icon } = props.data;

  return (
    <div className="mb-12 md:mb-0" key={id}>
      <div
        className={`mb-6 inline-block rounded-full text-[${COLORS.primary}] bg-[#eae7e4] p-8 text-primary`}
      >
        {icon}
      </div>
      <h5
        className={`mb-4 h-auto sm:h-14 text-lg font-bold ${styles.clamp__3}  ${styles.clamp__2__sm} `}
      >
        {title}
      </h5>
      <p
        className={`text-neutral-500 dark:text-neutral-300"  ${styles.clamp__4}  ${styles.clamp__4__sm} `}
      >
        {gist}
      </p>
    </div>
  );
}

export default ServiceItem;
