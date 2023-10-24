import { useState } from "react";
import { form_bg } from "../assets/images";

const Form = ({ setInputValue }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue(input);
    setInput(" ");
  };
  return (
    <>
      <div className=" relative bottom-16 w-11/12 m-auto h-36  grid place-items-center bg-dark_violet my-3 rounded-md ">
        <div className="absolute top-0 w-full h-full">
          <img
            src={form_bg}
            alt="input-background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="form">
          <div className=" grid lg:flex gap-2  ">
            <input
              className="p-3 w-full rounded-md"
              required
              type="text"
              value={input}
              placeholder="Enter a link to Shortlify ..."
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-tl from-cyan to-dark_violet hover:text-red shadow-xl text-white font-semibold font-serif rounded-md max-lg: w-full  p-3 text-sm"
              >
                Shortlify
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
