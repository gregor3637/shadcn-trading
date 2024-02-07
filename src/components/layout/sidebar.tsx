import { SideNav } from "@/components/layout/side-nav";
import { NavItems } from "@/components/constants/side-nav";
import { cn } from "@/lib/utils";

export default function Sidebar({ className }) {
  return (
    <nav
      className={cn(
        `relative hidden h-screen border-r md:block w-72`,
        className
      )}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <SideNav
              items={NavItems}
              className="text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
