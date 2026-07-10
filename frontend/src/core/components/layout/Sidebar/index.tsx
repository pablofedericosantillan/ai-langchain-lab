"use client";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {

  return (
    <div className="max-md:hidden p-4 h-full flex-shrink-0">
      <SidebarContent />
    </div>
  );
};

export default Sidebar;
