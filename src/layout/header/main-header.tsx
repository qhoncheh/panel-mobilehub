import { FiAlignLeft, FiAlignRight, FiSearch } from "react-icons/fi";
import ImageProfile from '../../assets/images/me.webp'
import type { MainProps } from "../../types";
import { useState } from "react";
import DropDownSetting from "./drop-down-setting";


export const MainHeader = ({ sidebarHandle, setSidebarHandle }: MainProps) => {
  const [visibleDrop, setVisibleDrop] = useState(false)

  return (
    <>
      <div className="main-header">
        <div className="main-header-right">
          <button
            onClick={() => setSidebarHandle(!sidebarHandle)}
            className="p-1"
          >
            {sidebarHandle ? (
              <FiAlignRight className="h-7 w-7 text-slate-300" />
            ) : (
              <FiAlignLeft className="h-7 w-7 text-slate-300" />
            )}
          </button>
          <h6 className="hidden sm:block text-md text-slate-300 font-medium whitespace-nowrap">
            داشبورد
          </h6>
        </div>
        <form className="main-header-center hidden md:flex">
          <input
            type="text"
            placeholder="جستجو..."
            className="bg-transparent outline-none flex-1 px-2 text-sm text-white"
          />
          <button type="submit" className="p-2 text-slate-400">
            <FiSearch />
          </button>
        </form>

        <div className="main-header-left" onClick={() => setVisibleDrop(prev => !prev)}>
          <div className="hidden lg:flex flex-col items-end leading-tight ml-3">
            <span className="text-gray-200 text-sm font-bold">غنچه عطایی</span>
            <span className="text-gray-400 text-xs">qhoncheh@</span>
          </div>
          <img src={ImageProfile} alt="profile" />
        </div>
      </div>

      <DropDownSetting setVisibleDrop={setVisibleDrop} visibleDrop={visibleDrop} />

    </>

  );
}; 
