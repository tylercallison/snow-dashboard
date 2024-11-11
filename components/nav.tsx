import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Fragment } from "react";

const Nav = () => {
  return (
    <Fragment>
      <nav className="fixed top-0 z-20 w-full bg-white/80 p-4 backdrop-blur dark:bg-gray-900">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="https://tylercallison.com/" className="flex items-center">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Folsom Lake Marina
            </span>
          </a>
        </div>
      </nav>
      <NavigationMenu className="fixed top-16 z-20 w-full bg-white/80 p-4 backdrop-blur dark:bg-gray-900">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </Fragment>
  );
};

export { Nav };
