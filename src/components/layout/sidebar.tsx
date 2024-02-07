import { SideNav } from "@/components/layout/side-nav";
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
            <SideNav  />
          </div>
        </div>
      </div>
    </nav>
  );
}
