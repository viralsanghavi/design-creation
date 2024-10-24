import {useRouter} from "next/router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {NAV_LINKS} from "@/lib/constants";
import HorizontalLine from "../horizontal-line";

const PageHeader = () => {
  const {push, pathname} = useRouter();
  const handleNavigation = (link) => {
    push(link);
  };
  return (
    <div
      className={`w-full flex- justify-center items-start ${
        pathname === "/" ? "text-white" : "text-black"
      }`}
    >
      <NavigationMenu className="max-w-full flex justify-around items-center h-24">
        {NAV_LINKS &&
          NAV_LINKS?.map((item) => (
            <NavigationMenuList key={item?.label}>
              <NavigationMenuItem
                onClick={() => handleNavigation(item?.link)}
                className="text-xl font-medium cursor-pointer"
              >
                {item?.label}
              </NavigationMenuItem>
            </NavigationMenuList>
          ))}
      </NavigationMenu>
      <div className=" w-[85%] mx-auto text-5xl font-semibold mt-12">
        <img
          src={pathname === "/" ? "/logo.svg" : "/logo-black.svg"}
          className="h-60 w-60 scale-125 cursor-pointer"
          onClick={() => handleNavigation("/")}
        />
        <HorizontalLine />
      </div>
    </div>
  );
};

export default PageHeader;
