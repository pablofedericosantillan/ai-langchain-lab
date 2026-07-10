import SidebarItem from "./SidebarItem";
import { SidebarIcons } from "./types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AvatarDefault from "@/shared/assets/default-avatar.jpg";

interface SidebarContentProps {
  isResponsive?: boolean;
  hasCloseButton?: boolean;
  onClose?: () => void;
}

const content = {
  adminPanel: {
    title: "Admin Panel",
    items: [
      {
        icon: "chart",
        title: "Users",
        href: "/",
      },
    ],
  },
  logout: {
    icon: "logout",
    title: "Log Out",
  },
};


const SidebarContent = ({
  isResponsive = true,
  hasCloseButton = false,
  onClose,
}: SidebarContentProps) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      getMe(token).then((data) => {
        setUser(data);
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.replace("/login");
  };

  return (
    <div className={`flex flex-col box-shadow px-4 py-6 rounded-2xl h-full`}>
      <nav className="flex flex-col flex-1 justify-between">
        <div>

          {/* Admin Panel Section */}
          <h2
            className={`mt-6 mb-2 font-secondary font-normal text-slate-blue ${isResponsive ? "max-lg:text-[8px]" : ""} dark:text-ice-gray text-xs uppercase leading-3.5 tracking-wider`}
          >
            {content.adminPanel.title}
          </h2>

          <div className="space-y-1 flex flex-col">
            {content.adminPanel.items.map((item) => (
              <Link key={item.href} href={item.href}>
                <SidebarItem
                  icon={item.icon as SidebarIcons}
                  title={item.title}
                  isResponsive={isResponsive}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <SidebarItem
            onClick={handleLogout}
            icon={content.logout.icon as SidebarIcons}
            title={content.logout.title}
            isResponsive={isResponsive}
          />

          <div className="flex items-center gap-2 p-1">
            <Image
              src={AvatarDefault }
              className="rounded-md"
              width={40}
              height={40}
              alt="Avatar"
            />
            <div
              className={`${isResponsive ? "max-lg:hidden" : ""} flex-1 min-w-0`}
            >
              <div className="flex items-center justify-between mb-2">
                {user && user.email ? (
                  <p className="font-bold text-black dark:text-cool-slate text-xs 2xl:text-sm truncate">
                    {user.email}
                  </p>
                ) : (
                  ""
                )}
              </div>
              {user && user.email ? (
                <p className="font-secondary text-black dark:text-icy-slate text-xs truncate">
                  {user.email}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SidebarContent;
