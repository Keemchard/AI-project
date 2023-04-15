import menu, { MenuItem } from "@/constants/menu";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <div className="my-5">
        {menu.map((item: MenuItem) => {
          //   note: yow this Math.random is temp, will delete this (im thinking of adding id property on MenuItem type for key lol)
          return (
            <div key={Math.random()}>
              <a className="text-[blue]" href={item.href}>
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
