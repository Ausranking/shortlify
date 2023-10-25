import React from "react";

const StatCard = ({ icon, title, desc }) => {
  return (
    <div className="card">
      <div className="logo bg-dark_violet ">
        <img src={icon} alt="stat-_-icon" className="icon object-scale-down" />
      </div>

      <h3 className="text-darker_violet font-bold text-xl p-2 md:mt-5">
        {title}
      </h3>
      <p className="text-gray p-2">{desc}</p>
    </div>
  );
};

export default StatCard;
