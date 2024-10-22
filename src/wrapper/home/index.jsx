import Carousel from "@/components/carousel";
import Counter from "@/components/count";
import ScrollText from "@/components/scroll-text";
import {Button} from "@/components/ui/button";
import PageLayout from "@/layout/page";
import {useState} from "react";

const HomeWrapper = () => {
  const [active, setActive] = useState("Architecture");
  return (
    <PageLayout>
      <section className="min-h-[200vh] w-full">
        <ScrollText />
      </section>
      <section className="w-full">
        <div className="flex justify-center items-center flex-col gap-12 py-12">
          <h3 className="text-2xl font-normal">WHO WE ARE</h3>
          <h1 className="text-6xl font-normal">
            A pluralistic, customer-centric design practice
          </h1>
          <p className="text-lg font-light">
            We thrive on challenges. We enjoy complexities. We welcome
            diversity.
          </p>
          <Button className="text-lg bg-neutral-400 font-normal p-8">
            learn more about us
          </Button>
        </div>
        <div className="flex gap-16 my-20">
          <div className="flex-[0.25]">
            <h3 className="text-xl font-normal my-4">Services</h3>
            <div className="flex flex-col gap-4">
              {[
                "Architecture",
                "Interior Design",
                "Landscape Design",
                "Lightning Design",
                "Urban Planning",
              ].map((arc) => (
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
          <div className="flex-[0.75] w-full">
            <Carousel />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mb-12">
          <p
            title="Design Creation"
            className="leading-snug text-8xl font-medium"
          >
            We're City
          </p>
          <p
            title="Design Creation"
            className="leading-snug text-8xl font-medium"
          >
            Making Design Leaders
          </p>
        </div>
        <p className="text-sm font-normal">
          From health and knowledge precincts to club houses...
        </p>
        <div className="grid grid-cols-2 gap-8 my-20">
          <div>
            <div className="flex gap-8">
              <p className="mt-8 text-4xl">Workshops More than</p>
              <img
                src="https://cdn.prod.website-files.com/65249822a54c89915817034b/6527350e5ca90c6ad85788d9_archipelago-workshops.svg"
                className="w-80"
              />
            </div>
            <div className="text-[194px]">
              <Counter counter={100} className="flex w-32 gap-4"></Counter>
            </div>
          </div>
          <div>
            <div className="flex gap-8">
              <p className="mt-8 text-4xl">
                Games Precincts, Venues + Overlay Plans
              </p>
              <img
                src="https://cdn.prod.website-files.com/65249822a54c89915817034b/654445a386ff33269150df5a_Games%20Precincts%20%2B%20Event%20Overlay%20v2.svg"
                className="w-60"
              />
            </div>
            <div className="text-[194px]">
              <Counter counter={12} className="flex w-32 gap-4"></Counter>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 my-20">
          <div>
            <div className="flex gap-8">
              <p className="mt-8 text-4xl">Dwellings currently on our boards</p>
              <img
                src="https://cdn.prod.website-files.com/65249822a54c89915817034b/654445a3aee534573fd421ba_Housing%20icon%20v2.svg"
                className="w-80"
              />
            </div>
            <div className="text-[194px]">
              <Counter counter={1250} className="flex w-32 gap-4"></Counter>
            </div>
          </div>
          <div>
            <div className="flex gap-8">
              <p className="mt-8 text-4xl">City Shaping Master Planning</p>
              <img
                src="https://cdn.prod.website-files.com/65249822a54c89915817034b/6527350e22c77e92a4306f72_archipelago-city.svg"
                className="w-60"
              />
            </div>
            <div className="text-[194px]">
              <Counter counter={100} className="flex w-32 gap-4"></Counter>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 my-20">
          <div>
            <div className="flex gap-8">
              <p className="mt-8 text-4xl">People-oriented precincts</p>
              <img
                src="https://cdn.prod.website-files.com/65249822a54c89915817034b/654445a3d1ae4eeb76cf2103_People%20Precincts.svg"
                className="w-60"
              />
            </div>
            <div className="text-[194px]">
              <Counter counter={40} className="flex w-32 gap-4"></Counter>
            </div>
          </div>
          <div>
            <div className="flex gap-8">
              <p className="mt-8 text-4xl">Beautiful bridges</p>
              <img
                src="https://cdn.prod.website-files.com/65249822a54c89915817034b/654445a3deab64c75a67e76d_bridgeicon%20v2.svg"
                className="w-80"
              />
            </div>
            <div className="text-[194px]">
              <Counter counter={20} className="flex w-32 gap-4"></Counter>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomeWrapper;
