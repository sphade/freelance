import React from "react";
import { Tabs } from "../../../components";

const RecentPlays = () => {
  const onChange = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      <Tabs option={["tab1", "tab2", "tab3"]} onChange={onChange} />
      <main>lawal</main>
    </div>
  );
};

export default RecentPlays;
