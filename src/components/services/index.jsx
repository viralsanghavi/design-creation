import {IMAGES, SERVICES} from "@/lib/constants";
import {useState} from "react";
import Carousel from "../carousel";

const Services = () => {
  const [active, setActive] = useState("Interior Design");

  return (
    <div className="flex gap-16 my-20">
      <div className="flex-[0.35]">
        <h3 className="text-xl font-normal mt-4 mb-8">Services</h3>
        <div className="flex flex-col gap-12">
          {SERVICES.map((arc) => (
            <p
              key={arc}
              className={`text-4xl cursor-pointer ${
                active === arc ? "font-medium" : "font-thin"
              }`}
              onClick={() => setActive(arc)}
            >
              {arc}
            </p>
          ))}
        </div>
      </div>
      <div className="flex-[0.65] w-full">
        <Carousel src={IMAGES[active]} />
      </div>
    </div>
  );
};

export default Services;
