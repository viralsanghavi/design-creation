import TeamCard from "@/components/team-card";
import {Button} from "@/components/ui/button";
import {TEAM} from "@/lib/constants";

const TeamsWrapper = () => {
  return (
    <div className="px-40">
      {/* Team cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-2xl justify-end items-end w-full py-20">
        {TEAM.map((props, index) => (
          <TeamCard {...props} key={index} />
        ))}
      </div>
      {/* Join the team */}
      <div className="py-20 flex gap-20">
        <div className="flex-[0.5]">
          <img
            src="https://cdn.prod.website-files.com/65249822a54c89915817034b/65540f3105b0d57b256f81b0_Two%20Archipelago%20team%20members%20having%20a%20conversation%20at%20a%20table-p-1080.webp"
            alt="Join the team"
            className="max-w-2xl w-full object-cover h-full"
          />
        </div>
        <div className="flex-[0.5]">
          <p className="my-20">Logo Here</p>
          <p className="font-bold mb-4">We're hiring</p>
          <p className="text-6xl font-normal leading-tight mb-8">
            Are you a passionate city maker eager to leave your mark on the
            urban landscape?
          </p>
          <p className="text-lg max-w-md mb-12">
            Join our dynamic Archipelago team and be part of crafting spaces
            that will shape Australia's cities for generations to come.
          </p>
          <Button className="w-full max-w-lg py-8 border-b-2">
            <div className="flex justify-between w-full items-center ">
              <p>Join the Team</p>
              <div className="w-4 h-4">
                <img src="/icons/arrow-right.svg" className="" />
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamsWrapper;
