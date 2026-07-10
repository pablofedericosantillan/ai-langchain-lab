import { icons, SidebarIcons } from "./types";
import { colors } from "@/shared/utils/customStyles";

interface SidebarItemProps {
  selected?: boolean;
  icon: SidebarIcons;
  title: string;
  onClick?: () => void;
  isResponsive?: boolean;
}

const SidebarItem = ({
  icon,
  title,
  selected = false,
  isResponsive = true,
  onClick,
}: SidebarItemProps) => {
  const { deepSlate } = colors;
  const Icon = icons[icon];


  const widthClasses = isResponsive ? "w-[227px] max-lg:w-[52px]" : "w-[227px]";

  const textClasses = isResponsive ? "max-lg:hidden" : "";

  return (
    <button
      className={`p-1 rounded-lg ${widthClasses} transition-all cursor-pointer duration-200`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <div className="bg-snow-mist dark:bg-midnight-gray p-2 2xl:p-3 rounded-lg">
          <div className="flex justify-center items-center rounded-sm">
            <Icon
              width={20}
              height={20}
              color={deepSlate}
            />
          </div>
        </div>
        <span
          className={`${textClasses} font-semibold text-graphite dark:text-light-gray text-xs 2xl:text-sm`}
        >
          {title}
        </span>
      </div>
    </button>
  );
};

export default SidebarItem;
