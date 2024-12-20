import {motion, useViewportScroll, useTransform} from "framer-motion";

const ScrollText = () => {
  const {scrollY} = useViewportScroll();

  // Array of words to display
  const words = [
    "Design",
    "Creation",
    "was",
    "just",
    "a",
    "pen,",
    "a",
    "drawing",
    "board,",
    "and",
    "an",
    "idea",
    "in",
    "one",
    "young",
    "mind.",
  ];

  // Function to generate dynamic color for each word based on scroll
  const getWordStyle = (index) => {
    const start = index * 50; // Each word starts changing after 100px scroll
    const end = start + 200; // 200px scroll range for each word to complete color change
    const color = useTransform(scrollY, [start, end], ["#e4dfd7", "#333333"]); // Black to Red

    return {color};
  };

  return (
    <div className="text-8xl font-serif py-40 flex flex-wrap gap-6 w-full items-center justify-center sticky top-0">
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={getWordStyle(index)}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default ScrollText;
