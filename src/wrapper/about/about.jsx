import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/layout/page";
import {
  ABOUT_ACCORDION_1,
  ABOUT_ACCORDION_2,
  FRAMEWORK_IMAGES,
  VALUES,
} from "@/lib/constants";

const AboutWrapper = () => {
  return (
    <PageLayout>
      <div className="w-full mt-20 ">
        <iframe
          src="https://player.vimeo.com/video/877769356?background=1"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowFullScreen=""
          className="w-full h-[720px]"
        />
        <p className="text-4xl font-normal leading-10 my-20 text-center mx-auto w-full max-w-3xl">
          Comprehensive Design and Architectural Solutions
        </p>
      </div>
      <div>
        <h1 className="text-8xl leading-[96px] border-b border-t py-6">
          Our Story
        </h1>
        <div className="mt-20">
          <p className="text-base leading-6 font-normal">
            With over three decades of unwavering dedication and boundless
            creativity, we've been crafting spaces that reflect our clients'
            dreams and aspirations. Our journey has been enriched by the trust
            and support of our clients, who have made our design dreams a
            reality.
          </p>
          <p className="text-base leading-6 font-normal">
            We are excited to introduce the next generation of innovation at our
            company—my twin daughter and son. As skilled architects, they have
            joined our team, allowing us to expand our services from interior
            design to comprehensive architectural building design. Together, we
            continue to shape environments that inspire and endure.
          </p>
        </div>
        <div className="flex gap-6 py-40">
          <div className="w-full flex-[.5]">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              className="w-full max-w-xl object-contain"
            />
          </div>
          <div className="flex flex-[.5] flex-col">
            <h3 className="text-2xl leading-6 font-normal border-b pb-6">
              Our Expertise
            </h3>

            {ABOUT_ACCORDION_1.map(({title, content}) => (
              <Accordion type="single" collapsible key={title}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{title}</AccordionTrigger>
                  <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
            <h3 className="text-2xl leading-6 font-normal border-b py-6">
              Supporting Services
            </h3>
            {ABOUT_ACCORDION_2.map(({title, content}) => (
              <Accordion type="single" collapsible key={title}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{title}</AccordionTrigger>
                  <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className="py-20">
          <>
            <p
              title="Design Creation"
              className="leading-snug text-8xl font-medium"
            >
              Design Creation
            </p>
            <p title="Framework" className="leading-snug text-8xl font-medium">
              Framework
            </p>
          </>
        </div>
        {/* Framework definition */}
        <div className="py-20">
          <div className="flex gap-8 justify-end text-xl flex-wrap">
            <div className="flex gap-8 flex-col flex-[0.35]">
              <p>
                At Design Creation, our story is one of passion, creativity, and
                a commitment to excellence. Founded by Mr. Chandresh Lathia, a
                visionary interior designer with over three decades of
                experience, we have established ourselves as leaders in crafting
                spaces that are not only functional but also truly inspiring.
                Every space we create is a reflection of our clients' dreams and
                personalities, infused with elegance, luxury, and innovation.
              </p>
            </div>
            <div className="flex gap-8 flex-col flex-[0.35]">
              <p>
                Looking widely, we are able to discern opportunities, patterns,
                and connections. This results in improved project quality and
                amenity, without compromising on cost-effectiveness.
              </p>
              <p>
                The value we infuse through design benefits not only our clients
                but also those who live, learn, work, and play in the places we
                shape.
              </p>
            </div>
          </div>
        </div>
        <div className="py-20 px-8">
          <>
            <div className="flex gap-8 justify-between w-full lg:px-16 pb-2 overflow-x-auto">
              {FRAMEWORK_IMAGES.map((img) => (
                <img src={img} key={img} />
              ))}
            </div>
            <img
              src="https://cdn.prod.website-files.com/65249822a54c89915817034b/653641efb55fc64b2d631992_archipelago-framework-line.webp"
              className="bg-neutral-400"
            />
          </>
        </div>
      </div>
      {/* Vision */}
      <div className="">
        <h1 className="text-8xl leading-[96px] border-b border-t py-6">
          The Next Generation
        </h1>
        <div className="flex w-full flex-col items-center justify-center py-20">
          <img src="https://cdn.prod.website-files.com/65249822a54c89915817034b/6536524d0580816a6a399f95_archipelago_our-approach.svg" />
          <p className="mt-4 leading-normal text-5xl font-semibold">
            Our Approach to
          </p>
          <p className="leading-normal text-5xl font-semibold">
            Delivering Enduring Value
          </p>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container py-20 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              {VALUES.map(({title, description}) => (
                <div key={title} className="p-4 md:w-1/3 flex">
                  <div className="flex-grow" key={title}>
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                      {title}
                    </h2>
                    <p className="leading-relaxed text-base">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <h5 className="text-2xl font-semibold">Clients & collaborators.</h5>
        <div className="overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap ">
            <span className="text-4xl mx-4">Marquee Item 1</span>
            <span className="text-4xl mx-4">Marquee Item 2</span>
            <span className="text-4xl mx-4">Marquee Item 3</span>
            <span className="text-4xl mx-4">Marquee Item 4</span>
            <span className="text-4xl mx-4">Marquee Item 5</span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutWrapper;
