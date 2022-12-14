import React from "react";
import { useState } from "react";
import News from "../News/News";
import Finance from "../Finance/Finance";
import TabList from "./TabList";

function Tabs() {
  const arr = [{ name: "Finance" }, { name: "News" }, { name: "Markets" }];
  const [active, setActive] = useState("Finance");

  const tabArr = {
    Finance: <Finance />,
    News: <News />,
  };
  return (
    <>
      <div class="flex justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap text-center">
          {arr?.map((obj) => (
            <TabList active={active} obj={obj} setActive={setActive} />
          ))}
        </ul>
      </div>
      {tabArr[active]}
    </>
  );
}

export default Tabs;
