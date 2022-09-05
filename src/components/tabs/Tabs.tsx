import clsx from "clsx";
import { useEffect, useState } from "react";

const Tabs = ({
  option,
  onChange,
}: {
  option: string[];
  onChange?: (e?: any) => void;
}) => {
  const [selectedTab, setSelectedTab] = useState("");
  useEffect(() => {
    setSelectedTab(option[0]);
  }, []);
  const handleTabChange = (value: string) => {
    setSelectedTab(value);

    if (onChange) {
      onChange(value);
    }
  };
  return (
    <div className="flex gap-10 my-5 border-b ">
      {option.map((value) => (
        <button
          key={value}
          className={clsx(
            "capitalize cursor-pointer transition-all hover:text-gray-900 active:font-medium text-gray-400 text-xl py-1 font-normal",
            {
              "border-b-2 p-1 border-orange-700 !text-black":
                value === selectedTab,
            }
          )}
          onClick={() => {
            return handleTabChange(value);
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
