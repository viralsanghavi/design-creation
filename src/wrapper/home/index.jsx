import Counter from "@/components/count";
import ScrollText from "@/components/scroll-text";
import Services from "@/components/services";
import {Button} from "@/components/ui/button";
import PageLayout from "@/layout/page";

const HomeWrapper = () => {
  return (
    <PageLayout>
      <section className="min-h-[200vh] w-full">
        <ScrollText />
      </section>
      <section className="w-full">
        <div className="flex justify-center items-center flex-col gap-12 py-12">
          <h1 className="text-6xl font-normal">
            Crafting Timeless Spaces, Elevating Luxury Living
          </h1>
          <Button className="text-lg bg-neutral-400 font-normal p-8">
            Let's Design Your Space
          </Button>
        </div>
        <Services />
      </section>
      <section className="py-20">
        <div className="mb-12">
          <p
            title="Design Creation"
            className="leading-snug text-8xl font-medium"
          >
            Comprehensive Design
          </p>
          <p
            title="Design Creation"
            className="leading-snug text-8xl font-medium"
          >
            and Architectural Solutions
          </p>
        </div>
        <p className="text-sm font-normal">
          From residential to commercial, we design your dreams...
        </p>
        <div className="grid place-items-center grid-cols-2 gap-8 my-20">
          <div>
            <div className="flex gap-8">
              <p className="mt-8 text-4xl">Projects</p>
              <img
                src="https://cdn.prod.website-files.com/65249822a54c89915817034b/6527350e5ca90c6ad85788d9_archipelago-workshops.svg"
                className="w-80"
              />
            </div>
            <div className="text-[120px]">
              <Counter counter={500} className="flex w-32 gap-4"></Counter>
            </div>
          </div>
          <div>
            <div className="flex gap-8">
              <p className="mt-8 text-4xl">Experience</p>
              <img
                src="https://cdn.prod.website-files.com/65249822a54c89915817034b/654445a386ff33269150df5a_Games%20Precincts%20%2B%20Event%20Overlay%20v2.svg"
                className="w-60"
              />
            </div>
            <div className="text-[120px]">
              <Counter counter={21} className="flex w-32 gap-4"></Counter>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-20">
          <div>
            <div className="flex gap-8">
              <p className="mt-8 text-4xl">Cities</p>
              <img
                src="https://cdn.prod.website-files.com/65249822a54c89915817034b/654445a3aee534573fd421ba_Housing%20icon%20v2.svg"
                className="w-80"
              />
            </div>
            <div className="text-[120px]">
              <Counter counter={150} className="flex w-32 gap-4"></Counter>
            </div>
          </div>
          <div>
            <div className="flex gap-8">
              <p className="mt-8 text-4xl">Clientele</p>
              <img
                src="https://cdn.prod.website-files.com/65249822a54c89915817034b/6527350e22c77e92a4306f72_archipelago-city.svg"
                className="w-60"
              />
            </div>
            <div className="text-[120px]">
              <Counter counter={500} className="flex w-32 gap-4"></Counter>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <h5 className="leading-snug text-8xl font-medium">CLIENTS</h5>
        <div className="animate-marquee-right flex gap-16 items-center max-w-screen-lg">
          {[
            "https://bobbymukherji.com/wp-content/uploads/2023/08/client_bharat_hotel.png",
            "https://bobbymukherji.com/wp-content/uploads/2024/04/wyndhamGrand-1.jpg",
            "https://bobbymukherji.com/wp-content/uploads/2023/08/client_bharat_hotel.png",
            "https://bobbymukherji.com/wp-content/uploads/2024/04/wyndhamGrand-1.jpg",
            "https://bobbymukherji.com/wp-content/uploads/2023/08/client_bharat_hotel.png",
            "https://bobbymukherji.com/wp-content/uploads/2024/04/wyndhamGrand-1.jpg",
            "https://bobbymukherji.com/wp-content/uploads/2023/08/client_bharat_hotel.png",
            "https://bobbymukherji.com/wp-content/uploads/2024/04/wyndhamGrand-1.jpg",
          ].map((src) => (
            <img key={src} src={src} className="w-40 h-40 object-contain" />
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default HomeWrapper;
