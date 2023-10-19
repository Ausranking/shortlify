import Button from "./Button";
import { worker } from "../assets/images";
import { useSpring, animated } from "@react-spring/web";
import { useDispatch, useSelector } from "react-redux";
import { setFocus, clearFocus } from "../redux/focus";

const Hero = () => {
  const { isFocused } = useSelector(state => state.focused)

  console.log(isFocused)
  //false in the console shows state is active

  /*I can also do 
  const isFocused = useSelector(state=> state.focused.isFocused)*/
  const dispatch = useDispatch()

  // const springs = useSpring({
  //   opacity: isFocused ? 1 : 0,
  //   transform: isFocused ? 'scale(1)' : 'scale(0.8)',
  // })



  return (
    <section
      onFocus={() => dispatch ((setFocus))}
      onBlur={() => dispatch(changeFocus(clearFocus))}
      tabIndex="0"

      className="flex max-lg:flex-col-reverse lg:grid grid-cols-2 auto-cols-fr pb-24 place-items-center lg:h-[75vh] items-center w-11/12 m-auto ">
      <div className="w-full">
        <h1
          // style={{ ...s
          className=" herotext text-3xl max-sm:text-5xl md:text-8xl lg:text-7xl max-lg:text-center text-darker_violet font-bold"
        >
          More than just shorter links
        </h1>

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
