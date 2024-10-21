import React from "react";

const TeamCard = ({
  name = "Peter Edwards",
  post = "Founding Director",
  imageUrl = "https://cdn.prod.website-files.com/6526826b6b1a6430815a209b/65516eb5746087a008bdd428_Peter%20Edwards%20hover-p-500.webp",
}) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <div>
        <img
          className="rounded-sm aspect-[4 / 4] object-cover w-full hover:scale-105 transition-all ease-out"
          src={imageUrl}
        />
      </div>
      <h3 className="leading-normal text-xl font-semibold">{name}</h3>
      <h5 className="leading-normal text-base font-normal">{post}</h5>
    </div>
  );
};

export default TeamCard;
