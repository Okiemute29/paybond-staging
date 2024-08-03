// This is the layout used by all other pages
import { Outlet } from "react-router-dom";
import Partial from "../partials/index";

export default function RootLayout() {
	return (
    <div className="nk-app-root">
      {/* main @s */}
      <div className="nk-main">
        <span></span>
        {/* Side Menu Start Here  */}
        <Partial.SideBar />
        {/* sidebar @e */}
        {/* wrap @s */}
        <div className="nk-wrap">
          {/* main header @s */}
          <Partial.Header />
          {/* main header @e */}
          {/* content @s */}
          <Outlet />
          {/* content @e */}
          {/* footer @s */}

          <Partial.Footer notlanding />
          {/* footer @e */}
        </div>
        {/* wrap @e */}
      </div>
      {/* main @e */}
    </div>
  );
}