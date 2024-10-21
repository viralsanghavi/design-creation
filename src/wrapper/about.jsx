import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ABOUT_ACCORDION_1,
  ABOUT_ACCORDION_2,
  FRAMEWORK_IMAGES,
  VALUES,
} from "@/lib/constants";

const AboutWrapper = () => {
  return (
    <div>
      <div className="w-full mt-20 overflow-hidden">
        {/* <img src="/icons/5.webp"  /> */}
        <iframe
          src="https://player.vimeo.com/video/877769356?background=1"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen=""
          className="w-full h-[720px]"
        />
        <p className="text-4xl font-normal leading-10 my-20 text-center mx-auto w-full max-w-3xl">
          From concept to delivery, Archipelago offers holistic expertise in
          architecture, urban design, landscape and strategic planning.
        </p>
      </div>
      <div>
        <h1 className="text-8xl leading-[96px] border-b border-t py-6">
          Our Services
        </h1>
        <div className="max-w-xl mt-20">
          <p className="text-base leading-6 font-normal">
            Our thoughtful consideration of the bigger picture - including how
            different services interact and complement one another demonstrates
            our thorough understanding of industry requirements, regulations,
            expectations and opportunities.
          </p>
          <p className="text-base leading-6 font-normal">
            We believe architecture does not exist in isolation, so our services
            and expertise don't either.
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
              <Accordion type="single" collapsible>
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
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{title}</AccordionTrigger>
                  <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#484a3c]">
        <div className="py-20">
          <>
            <p title="Design Creation" className="text-white leading-snug" />
            <p title="Framework" className="text-white leading-snug" />
          </>
        </div>
        {/* Framework definition */}

        <div className="py-20">
          <div className="flex gap-8 justify-end text-xl text-white flex-wrap">
            <div className="flex gap-8 flex-col flex-[0.35]">
              <p>
                Our approach, driven by creative ideas and grounded in
                evidence-based research, unveils opportunities often unseen at a
                project's inception. This methodology ensures we reach positive,
                transformative outcomes.
              </p>
              <p>
                Our portfolio of city-shaping master plans and extensive urban
                projects showcases our ability to harness opportunities within
                the context. We unlock each site's full potential, crafting
                public spaces and respectful buildings that enhance the unique
                character of the neighbourhoods we engage with.
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
                <img src={img} />
              ))}
            </div>
            <img src="https://cdn.prod.website-files.com/65249822a54c89915817034b/653641efb55fc64b2d631992_archipelago-framework-line.webp" />
          </>
        </div>
      </div>
      {/* Vision */}
      <div className="">
        <h1 className="text-8xl leading-[96px] border-b border-t py-6">
          Our Framework
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
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-20 mx-auto">
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              {VALUES.map(({title, description}) => (
                <div class="p-4 md:w-1/3 flex">
                  <div class="flex-grow pl-6" key={title}>
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                      {title}
                    </h2>
                    <p class="leading-relaxed text-base">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default AboutWrapper;
