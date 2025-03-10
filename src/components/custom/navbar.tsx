import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import styles from "../topnavigation.module.css";

const navItems = [
  { name: "About", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Experience", link: "/experience" },
  { name: "Contact", link: "/contact" },
];

const TopNavigation = () => {
  return (
    <NavigationMenu className={styles.NavigationMenu}>
      <NavigationMenuList className="flex justify-center space-x-4">
        {navItems.map(({ name, link }, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild>
              <Link href={link}>{name}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default TopNavigation;
