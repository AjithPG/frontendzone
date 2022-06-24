import React, { Children } from "react";
import SideNav from "./SideNav";


export default function Layout({ children }) {

  return (
    <div className="w-full font-primary">
    <div className="flex flex-row gap-3">
      <aside className="sidenav hidden lg:block lg:w-1/4 xl:1/5">
        <SideNav />
      </aside>
      <main className="right-section flex-auto xl:flex-1">{children}</main>
    </div>
    </div>
  );
}
