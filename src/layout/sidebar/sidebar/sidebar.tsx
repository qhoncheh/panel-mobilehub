import { useState } from 'react';
import SvgWeb from '../../../icons/SvgWeb';
import SvgPlus from '../../../icons/SvgPlus';
import './SideBar.css';
import { menu, type SubMenuItem } from '../../../constants/layout-const';
import { SideBarProfile } from '../sidebar-profile/sideBar-profile';
import { SideMenu } from '../sidebar-menu/sideMenu';
import { ThemeSidebar } from '../../theme-sidebar/theme-sidebar';

const SubMenu = ({ submenu }: { submenu?: SubMenuItem[] }) => {
  if (!submenu) return null;

  return (
    <div className="sidebar-submenu">
      {submenu.map((item, index) => (
        <div key={index} className="sidebar-submenu-item">
          {item.title}
        </div>
      ))}
    </div>
  );
};

const SideBar = ({ sidebarHandle }: { sidebarHandle: boolean }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleMenu = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <aside className={`sidebar ${sidebarHandle ? 'sidebar-handle' : ''}`}>
      <div className="sidebar-head">
        <span className='text-gray-300 sidebar-title'>پنل مدیریتی </span>
        <SvgWeb />
      </div>
      <div className="sidebar-body">
        <button className="sidebar-new-project">
          <SvgPlus />
          <span>پروژه جدید</span>
        </button>
        <ul className="sidebar-menu">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`sidebar-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button onClick={() => toggleMenu(index)}>
                {item.icon}
                <span>{item.title}</span>
              </button>
              {item.submenu &&
                <>
                  <SubMenu submenu={item.submenu} />
                  <SideMenu submenu={item.submenu} />
                </>}
            </li>
          ))}
        </ul>
      </div>
      { !sidebarHandle && 
      <>
        <SideBarProfile />
        <ThemeSidebar />  
      </>
      }

    </aside>
  );
};

export default SideBar;
