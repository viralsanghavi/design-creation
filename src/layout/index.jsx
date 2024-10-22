import {useRouter} from "next/router";

const MainLayout = ({children}) => {
  const router = useRouter();
  return (
    <div
      initial={{y: 300, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      exit={{y: 0, opacity: 0}}
      transition={{duration: 0.1, ease: "easeInOut"}}
      className="w-full h-full max-h-screen relative"
    >
      <div className="w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
