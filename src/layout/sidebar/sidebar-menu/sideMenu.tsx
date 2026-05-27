import type { SubMenuItem } from "../../../constants/layout-const";

interface SideMenuProps {
  submenu?: SubMenuItem[];
}

export const SideMenu = ({ submenu }: SideMenuProps) => {
  if (!submenu) return null;

  return (
    <div className="sidebar-items-sideMenu">
      {submenu.map((item: SubMenuItem, index: number) => (
        <div key={index} className="sidebar-items-sideMenu-item">
          {item.title}
        </div>
      ))}
    </div>
  );
};
