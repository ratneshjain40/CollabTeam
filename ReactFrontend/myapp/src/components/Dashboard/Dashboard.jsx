import Sidebar from "./Sidebar/Sidebar";
import Screen from "./Screen/Screen";
import { useState } from "react";

function Dashboard({ isLogged }) {
  let [sideBarOptions, setSideBarOptions] = useState(0);
  console.log("From Dashboard "+sideBarOptions);
  return (
    <div className="dashboard container">
      <Sidebar
        sideBarOptions={sideBarOptions}
        setSideBarOptions={setSideBarOptions}
      />
      <Screen isLogged={isLogged} sideBarOptions={sideBarOptions} />
    </div>
  );
}

export default Dashboard;
