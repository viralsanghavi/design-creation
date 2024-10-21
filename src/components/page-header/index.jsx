import React from "react";

const PageHeader = ({ header = "" }) => {
  return <div className="font-bold text-8xl">{header}</div>;
};

export default PageHeader;
