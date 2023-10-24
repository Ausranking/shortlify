import React from "react";

const StatCard = ({ icon, title, desc }) => {
  return (
    <div className=" relative grid grid-flow-row rounded p-4 max-w-md m-auto bg-white/60 [&>*]:max-sm:text-center">
      <div className="h-20 w-20 rounded-full bg-dark_violet grid place-content-center -mt-14">
        <img
          src={icon}
          alt="stat icon"
          className=" h-full w-full object-cover"
        />
      </div>

      <h3 className="mt-12">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default StatCard;
