import StatCard from "./StatCard";
import {icon1,icon2, icon3} from '/src/assets/images'
const Stat = () => {
  return (
    <section className=" bg-gray w-11/12 m-auto min-h-fit pt-1 pb-10">
      <div className="text-center">
        <h2 className="text-2xl text-darker_violet font-bold py-1">
          Advanced Statistics
        </h2>
        <p className="text-lg p-2 md:p-3 lg:text-2xl lg:p-5 line-clamp-2 w-11/12">
          Track how your links are performing accross the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <section className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 max-sm:gap-10 gap-5">
        <div>
          <StatCard
            icon={icon1}
            title="Brand Recognition"
            desc="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
          />
        </div>
        {/* <div className="bg-cyan h-2 w-full "></div> */}
        <div className="lg:translate-y-8">
          <StatCard
            icon={icon1}
            title="Brand Recognition"
            desc="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
          />
        </div>
        <div className="lg:translate-y-16">
          <StatCard
            icon={icon1}
            title="Brand Recognition"
            desc="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
          />
        </div>
      </section>
    </section>
  );
};

export default Stat;
