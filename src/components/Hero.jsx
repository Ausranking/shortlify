import Button from "./Button";
import { hero, worker } from "../assets/images";
import { useSpring, animated, to } from "@react-spring/web";

const Hero = () => {

  // hero text animated
  const springs = useSpring({
    from: { x: -100, y: 30 },
    to: { x: 0, y: 0 }
  })
  return (
    <section className="relative h-[85vh] w-full grid max-lg:place-content-center lg:items-center m-auto bg-hero bg-no-repeat bg-cover max-sm:bg-center ">
      <div className="absolute h-full w-full bg-black/60"></div>
      <div className="md:ml-16 max-sm:text-center">
        <animated.h1
          style={{ ...springs }}
          className="md:text-6xl lg:text-7xl text-4xl mt-10 text-sea_salt font-bold"
        >
          More than just <br /> <span className="text-rose">shorter</span> links
        </animated.h1>

        <p className=" my-3 p-2 lg:w-3/4 text-sea_salt text-xl md:text-4xl lg:text-xl">
          Build your brand's recognition and get detailed insights <br /> on how your
          links are performing
        </p>
        <div className=" grid max-lg:place-items-center max-sm:mb-20">
          <Button text={"Get started"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
