import Button from "./Button";
import { worker } from "../assets/images";
import { useSpring, animated, to } from "@react-spring/web";

const Hero = () => {

  // hero text animated
  const springs = useSpring({
    from: { x: -100, y: 30 },
    to: { x: 0, y: 0 }
  })

  return (
    <section className="flex max-lg:flex-col-reverse lg:grid grid-cols-2 auto-cols-fr pb-24 place-items-center lg:h-[75vh] items-center w-11/12 m-auto ">
      <div className="w-full">
        <animated.h1
          style={{ ...springs }}
          className=" herotext text-3xl max-sm:text-5xl md:text-8xl lg:text-7xl max-lg:text-center text-darker_violet font-bold"
        >
          More than just shorter links
        </animated.h1>

        <p className="max-lg:text-center my-3 text-[min(10vw,1.2rem)] lg:w-3/4 text-grayish_violet max-lg:text-3xl">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <div className=" grid max-lg:place-items-center">
          <Button text={"Get started"} />
        </div>
      </div>
      <div className="animate-pulse  ">
        <img src={worker} alt="working-illustration" />
      </div>
    </section>
  );
};

export default Hero;
