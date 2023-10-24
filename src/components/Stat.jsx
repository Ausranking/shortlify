import { useState } from "react";
import { Form } from "react-router-dom";
import LinkResult from "./LinkResult";

const Stat = () => {
      const [inputValue, setInputValue] = useState("");

  return (
    <section className=" bg-gray">

      <LinkResult inputValue={inputValue} />
      <div className="text-center">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing accross the web with our advanced
          statistics dashboard.
        </p>
      </div>
    </section>
  );
};

export default Stat;
