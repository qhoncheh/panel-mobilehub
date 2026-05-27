import type { MainProps } from "../../types";
import { MainHeader } from "../header/main-header";


export const Main = ({ sidebarHandle, setSidebarHandle }: MainProps) => {
  return (
    <div>
      <div className={`main ${sidebarHandle ? "main-inc" : ""}`}>
        <MainHeader setSidebarHandle={setSidebarHandle} sidebarHandle={sidebarHandle} />
      </div>
    </div>
  );
}; 
