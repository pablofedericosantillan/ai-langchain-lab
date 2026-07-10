import { SVGProps } from "react";
import Chart from "@/shared/assets/icons/Chart";
import Logout from "@/shared/assets/icons/Logout";
import Shield from "@/shared/assets/icons/Shield";
import Users from "@/shared/assets/icons/Users";
import File from "@/shared/assets/icons/File";
import Settings from "@/shared/assets/icons/Settings";
import Radar from "@/shared/assets/icons/Radar";

export type SidebarIcons =
  | "chart"
  | "logout"
  | "shield"
  | "users"
  | "file"
  | "settings"
  | "radar";

export const icons: {
  [key in SidebarIcons]: React.ComponentType<SVGProps<SVGSVGElement>>;
} = {
  chart: Chart,
  logout: Logout,
  shield: Shield,
  users: Users,
  file: File,
  settings: Settings,
  radar: Radar,
};
