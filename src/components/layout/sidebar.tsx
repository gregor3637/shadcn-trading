import { useState, useEffect } from "react";
import useSidebar from "@/hooks/useSidebar";
import { SideNav } from "@/components/layout/side-nav";
import { NavItems } from "@/components/constants/side-nav";
import { BsArrowLeftShort } from "react-icons/bs";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import { selectNavMenu } from "@/services/store/reducers/navMenuSlice";

export default function Sidebar() {
  const { isOpen, status } = useSelector(selectNavMenu);

  return (
    <nav
      className={cn(
        `relative hidden h-screen border-r sm:block `,
        status && "duration-500",
        isOpen ? "w-72" : "w-[78px]"
      )}
    >
      <div className="space-y-4 py-10 px-4 h-full ">
        <SideNav
          items={NavItems}
          className={`${
            isOpen
              ? ""
              : "text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
          }`}
        />
      </div>
    </nav>
  );
}
