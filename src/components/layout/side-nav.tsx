import { LayoutDashboard } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function SideNav({ items, className }) {
  return (
    <nav className="space-y-2">
      {items.map((item) => {
        return (
          <a
            key={item.title}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "group relative flex h-12 justify-start"
            )}
          >
            <item.icon className={cn("h-5 w-5", item.color)} />
            <span className={cn("absolute left-12 text-base duration-200")}>
              {item.title}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
