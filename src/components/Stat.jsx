import StatCard from "./StatCard";
import { icon1, icon2, icon3 } from "/src/assets/images";
const Stat = () => {
  return (
    <section className="w-11/12 m-auto min-h-fit pt-1 pb-10 lg:pb-32">
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl text-darker_violet font-bold py-1">
          Advanced Statistics
        </h2>
        <p className=" text-xl p-2 text-slate-600">
          Track how your links are performing <br /> accross the web with our
          advanced statistics dashboard.
        </p>
      </div>
      <section className="relative mt-16 grid md:grid-cols-3 max-sm:gap-16 gap-5">
        <div className="md:h-2 w-full absolute top-1/2 bg-cyan"></div>
        <div>
          <StatCard
            icon={icon1}
            title="Brand Recognition"
            desc="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
          />
        </div>
        <div className="md:translate-y-8 relative">
          <StatCard
            icon={icon2}
            title="Detailed Records"
            desc="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
        </div>
        <div className="md:translate-y-16">
          <StatCard
            icon={icon3}
            title="Fully Customizable"
            desc="Improve brand awareness and content discoverability through customizable links. superchanging audience engagement."
          />
        </div>
      </section>
    </section>
  );
};

export default Stat;
