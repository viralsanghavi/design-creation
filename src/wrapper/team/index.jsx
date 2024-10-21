import TeamCard from "@/components/team-card";
import {Button} from "@/components/ui/button";
import {TEAM} from "@/lib/constants";

const TeamsWrapper = () => {
  return (
    <div>
      {/* Team cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-2xl justify-end items-end lg:ml-auto w-full py-20 bg-gray-400">
        {TEAM.map((props, index) => (
          <TeamCard {...props} key={index} />
        ))}
      </div>
      {/* Join the team */}
      <div className="py-20 bg-red-400">
        <img
          src="https://cdn.prod.website-files.com/65249822a54c89915817034b/65540f3105b0d57b256f81b0_Two%20Archipelago%20team%20members%20having%20a%20conversation%20at%20a%20table-p-1080.webp"
          alt="Join the team"
        />
        <p className="my-8">Logo Here</p>
        <p className="font-bold mb-4">We're hiring</p>
        <p className="text-6xl font-normal leading-normal">
          Are you a passionate city maker eager to leave your mark on the urban
          landscape?
        </p>
        <p className="text-lg max-w-md ">
          Join our dynamic Archipelago team and be part of crafting spaces that
          will shape Australia's cities for generations to come.
        </p>
        <Button className="w-full">
          <div>
            <p>Join the Team</p>
            <img src="/icons/arrow-right.svg" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default TeamsWrapper;
