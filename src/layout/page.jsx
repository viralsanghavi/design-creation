import React from "react";

const PageLayout = ({children}) => {
  return (
    <div className="h-full flex flex-col justify-center items-start w-full max-w-screen-2xl mx-auto">
      {children}
    </div>
  );
};

export default PageLayout;
