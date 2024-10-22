import {motion} from "framer-motion";

const BarWithBall = () => {
  // Define the bar animation using Framer Motion
  //   const barAnimation = {
  //     initial: {rotate: -15},
  //     animate: {rotate: 15},
  //     transition: {
  //       ease: "easeInOut",
  //       duration: 3,
  //       repeat: Infinity, // Ensures the animation loops
  //       repeatType: "reverse", // Makes the animation reverse on repeat
  //       delay: 1,
  //     },
  //   };

  //   // Define the ball animation using Framer Motion
  //   const ballAnimation = {
  //     initial: {left: "calc(100% - 40px)", rotate: 360},
  //     animate: {left: "calc(0% - 20px)", rotate: 0},
  //     transition: {
  //       ease: "easeInOut",
  //       duration: 3,
  //       repeat: Infinity, // Ensures the animation loops
  //       repeatType: "reverse", // Makes the animation reverse on repeat
  //       delay: 1,
  //     },
  //   };

  //   return (
  //     <div className="h-screen w-screen flex justify-center items-center">
  //       <motion.div
  //         className="relative w-48 h-[12.5px] bg-[#FFDAAF] rounded-full"
  //         initial="initial"
  //         animate="animate"
  //         variants={barAnimation}
  //       >
  //         <motion.div
  //           style={{
  //             width: 150,
  //             height: 150,
  //             borderRadius: 30,
  //             backgroundColor: "#fff",
  //           }}
  //           animate={{rotate: 360}}
  //           transition={{
  //             duration: 1,
  //             repeat: Infinity,
  //             repeatType: "reverse",
  //           }}
  //         />
  //         <motion.div
  //           className="absolute w-12 h-12 bg-white rounded-full"
  //           style={{top: "-50px"}} // You can convert this to Tailwind but added inline for clarity
  //           initial="initial"
  //           animate="animate"
  //           variants={ballAnimation}
  //         >
  //           <div className="absolute top-1/2 right-1 w-[5px] h-[5px] bg-black rounded-full"></div>
  //         </motion.div>
  //       </motion.div>
  //     </div>
  //   );

  const shapeVariants = {
    initial: {opacity: 0, scale: 0.5, rotate: 0},
    animate: {opacity: 1, scale: 1, rotate: 360},
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  // Animation settings for the text
  const textVariants = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    transition: {
      delay: 0.5,
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Animated Geometric Shape */}
      <motion.div
        className="relative w-24 h-24 border-[6px] border-gray-800 rounded-full"
        initial="initial"
        animate="animate"
        variants={shapeVariants}
      >
        <motion.div
          className="absolute w-16 h-16 border-[6px] border-gray-600 rounded-full top-4 left-4"
          variants={shapeVariants}
        />
      </motion.div>

      {/* Animated Loader Text */}
      <motion.div
        className="mt-6 text-lg font-bold tracking-wider text-gray-800"
        initial="initial"
        animate="animate"
        variants={textVariants}
      >
        Building Your Vision...
      </motion.div>
    </div>
  );
};
// };

export default BarWithBall;
