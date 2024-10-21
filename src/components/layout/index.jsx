import React from "react";

const Layout = ({children}) => {
  return (
    <div className="max-w-screen-2xl w-full mx-auto sm: md:px-20">
      {children}
    </div>
  );
};

export default Layout;
