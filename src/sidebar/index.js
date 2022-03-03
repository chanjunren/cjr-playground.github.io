import React from "react";
import ReactDOM from "react-dom";
import SidebarIcon from "./sidebaricon.js";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import IcecreamIcon from "@mui/icons-material/Icecream";

export default function Sidebar(props) {
  const sidebar = (
    <div
      className="fixed top-0 left-0 h-screen w-20
			m-0 flex flex-col text-white shadow bg-blue-900 space-y-3"
    >
      <br />
      <SidebarIcon icon={<HomeIcon />} text="Home" path="/" />
      <SidebarIcon icon={<ArticleIcon />} text="Form" path="/form" />
      <SidebarIcon
        icon={<IcecreamIcon />}
        text="Tic Tac Toe"
        path="/tictactoe"
      />
    </div>
  );
  return ReactDOM.createPortal(
    sidebar,
    document.getElementById("sidebar-hook")
  );
}
