import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { Moon, Sun, Expand, Shrink } from "lucide-react";

const CollapseMenuButton = ({ isExpanded }) => {
  const testClass = isExpanded
    ? ""
    : "absolute text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-10 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100";

  return (
    <>
      {isExpanded ? (
        <Shrink className={cn("h-8 w-8", "text-sky-500")}  size={64}/>
      ) : (
        <Expand className={cn("h-8 w-8", "text-sky-500")} />
      )}
      <span className={cn("text-base duration-200", testClass)}>
        {isExpanded ? "Shrink" : "Expand"}
      </span>
    </>
  );
};

const ThemeButton = ({ theme, isExpanded }) => {
  const testClass = isExpanded
    ? ""
    : "absolute text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-10 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100";

  return (
    <>
      {theme === "dark" ? (
        <Sun className={cn("h-8 w-8", "text-sky-500")} />
      ) : (
        <Moon className={cn("h-8 w-8", "text-sky-500")} />
      )}
      <span className={cn("text-base duration-200", testClass)}>
        {theme === "dark" ? "Light" : "Dark"}
        {" mode"}
      </span>
    </>
  );
};

function SideNavButton({ onClick, children, className }) {
  return (
    <Button
      onClick={onClick}
      className={cn("group relative flex h-12 justify-start gap-3 w-full")}
      variant={"outline"}
    >
      {children}
    </Button>
    // <a
    //   onClick={onClick}
    //   // href={'/'}
    //   className={cn(
    //     buttonVariants({ variant: "ghost" }),
    //     "group relative flex h-12 justify-start"
    //   )}
    // >
    //   <Moon className={cn("h-5 w-5" )} />
    //   <span
    //     className={cn("absolute left-12 text-base duration-200", className)}
    //   >
    //     dddddddddd
    //   </span>
    // </a>
  );
}
SideNavButton.Theme = ThemeButton;
SideNavButton.CollapseMenu = CollapseMenuButton;
export default SideNavButton;
