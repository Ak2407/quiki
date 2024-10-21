"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { MenuIcon } from "lucide-react";

const SidebarMenu = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="flex items-center justify-center rounded-full h-[50px] w-[50px] p-4 fixed bottom-2 left-2 sm:hidden  bg-white border border-sky-700  text-neutral-800 ">
      <button onClick={toggleSidebar}>
        <MenuIcon className="size-4" />
      </button>
    </div>
  );
};

export default SidebarMenu;
