import React, { Suspense, useState } from "react";
import Form from "./Form";
const LinkResult = React.lazy(() => import('./LinkResult'))
import Stat from "./Stat";
import BoostSection from "./BoostSection";
const Main = () => {
  const [inputValue, setInputValue] = useState("");
//tying to lazyload the component providing shortened links
  return (
    <section id="resources" className="h-[70vh] bg-gray w-full relative">
      <div className="absolute w-full top-[-20%] max-lg:top-[-10%]">
        <Form setInputValue={setInputValue} />
        <Suspense fallback={<p className="text-orange-900 text-xl text-center">loading....</p>}>
          <LinkResult inputValue={inputValue} />

        </Suspense>
        <Stat />
        <BoostSection/>

      </div>
    </section>
  );
};

export default Main;
