import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

function SideNavItem({ title, href, color, className, icon: Icon }) {
  return (
    <a
      key={title}
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "group relative flex h-12 justify-start"
      )}
    >
      <Icon className={cn("h-5 w-5", color)} />
      <span
        className={cn("absolute left-12 text-base duration-200", className)}
      >
        {title}
      </span>
    </a>
  );
}

export default SideNavItem;
