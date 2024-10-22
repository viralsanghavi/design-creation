import {useEffect, useState} from "react";
import {useAnimation, motion, useInView} from "framer-motion";
import {useRef} from "react";
import {cn} from "@/lib/utils";

const Counter = ({counter = 10, className = "", children = <></>}) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true}); // 'once: true' triggers the animation once when the element comes into view.

  useEffect(() => {
    if (isInView) {
      controls.start({
        count: counter,
        transition: {duration: 5, ease: "easeInOut"},
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={cn("font-bold text-gray-800", className)}
      animate={controls}
      initial={{count: 0}}
      onUpdate={(latest) => setCount(Math.round(latest.count))}
    >
      {count}
    </motion.div>
  );
};

export default Counter;
