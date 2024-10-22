import React from "react";
import {motion} from "framer-motion";

const MainLayout = ({children}) => {
  return (
    <div
      initial={{y: 300, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      exit={{y: 0, opacity: 0}}
      transition={{duration: 0.1, ease: "easeInOut"}}
      className="w-full max-h-screen"
    >
      {children}
    </div>
  );
};

export default MainLayout;
