import { useState } from "react";
import "./panel-layout.css";
import SideBar from "../sidebar/sidebar/sidebar";
import { Main } from "../main/main";

const PanelLayout = () => {
  const [sidebarHandle, setSidebarHandle] = useState(false);

  return (
    <>
      <div className="PanelLayout">
        <SideBar sidebarHandle={sidebarHandle} />
        <Main
          sidebarHandle={sidebarHandle}
          setSidebarHandle={setSidebarHandle}
        />
      </div>
    </>
  );
};

export default PanelLayout;
