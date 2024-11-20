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
      <NavigationMenu className="max-w-full flex justify-around items-end">
        <img
          src={pathname === "/" ? "/logo.png" : "/logo-black.svg"}
          className="h-full w-32 scale-[1.1] object-contain cursor-pointer"
          onClick={() => handleNavigation("/")}
        />
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
      <div className="mx-auto text-5xl font-semibold">
        <HorizontalLine />
      </div>
    </div>
  );
};

export default PageHeader;
