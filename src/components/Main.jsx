import React, { Suspense, useState } from "react";
import Form from "./Form";
const LinkResult = React.lazy(() => import('./LinkResult'))
import Stat from "./Stat";
import BoostSection from "./BoostSection";
import Footer from "./Footer";
import Loading from "./Loading";
const Main = () => {
  const [inputValue, setInputValue] = useState("");
  //tying to lazyload the component providing shortened links
  return (
    <div className=" w-full top-[-20%] max-lg:top-[-10%]">
      <Form setInputValue={setInputValue} />
      <Suspense fallback={<Loading/>}>
        <LinkResult inputValue={inputValue} />
      </Suspense>
      <Stat />
      <BoostSection />

    </div>
  );
};

export default Main;
