import React, { Suspense, useState } from "react";
import Form from "./Form";
const LinkResult = React.lazy(() => import('./LinkResult'))
import Stat from "./Stat";
import BoostSection from "./BoostSection";
const Main = () => {
  const [inputValue, setInputValue] = useState("");
  //tying to lazyload the component providing shortened links
  // this component is already rensdered dynamically and won't undo
  return (
    <section id="resources" className="h-max bg-gray w-full relative">
        <Form setInputValue={setInputValue} />
        <Suspense fallback={<p className="text-orange-900 text-xl text-center">loading....</p>}>
          <LinkResult inputValue={inputValue} />
        </Suspense>
      <Stat />
        <BoostSection/>

    </section>
  );
};

export default Main;
