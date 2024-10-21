import React from "react";

const PageLayout = ({ children }) => {
  return (
    <div className=" h-full flex flex-col justify-center items-start w-[85%] mx-auto">
      {children}
    </div>
  );
};

export default PageLayout;
