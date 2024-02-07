import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { Moon, Sun, Expand, Shrink } from "lucide-react";

const CollapseMenuButton = ({ className, isExpanded }) => {
  return (
    <>
      {isExpanded ? (
        <Shrink className={cn("h-5 w-5", "text-sky-500")} />
      ) : (
        <Expand className={cn("h-5 w-5", "text-sky-500")} />
      )}
      <span className={cn("text-base duration-200", className)}>
        {isExpanded ? "Shrink" : "Expand"}
      </span>
    </>
  );
};

const ThemeButton = ({ theme, className }) => {
  return (
    <>
      {theme === "dark" ? (
        <Sun className={cn("h-5 w-5", "text-sky-500")} />
      ) : (
        <Moon className={cn("h-5 w-5", "text-sky-500")} />
      )}
      <span className={cn("text-base duration-200", className)}>
        {theme === "dark" ? "Light" : "Dark"}
        {" mode"}
      </span>
    </>
  );
};

function SideNavButton({ onClick, children }) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "group relative flex h-12 justify-start gap-3 w-full"
      )}
      variant={"ghost"}
    >
      {children}
    </Button>
  );
}
SideNavButton.Theme = ThemeButton;
SideNavButton.CollapseMenu = CollapseMenuButton;
export default SideNavButton;
