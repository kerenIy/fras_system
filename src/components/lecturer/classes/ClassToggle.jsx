import {
  faEllipsisVertical,
  faInfo,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Attendance from "./Attendance";
import AttendanceList from "./AttendanceList";
import People from "./People";

export default function ClassToggle() {
  const tabs = [
    // {
    //     id: 1,
    //     label: 'Schedules',
    //     content: 'Schedule'
    // },
    // {
    //   id: 2,
    //   label: "People",
    //   content: <People />,
    // },
    {
      id: 3,
      label: "Attendance ",
      // content: 'Attendance'
      // content: <Attendance />
      content: <AttendanceList />,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="my-5">
        <div className="bg-white p-3 mx-5 rounded-lg">
          <div className="flex">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`text-sm mx-5 font-normal cursor-pointer
                            ${
                              activeTab.id === tab.id
                                ? "tab-active"
                                : "text-zinc-600"
                            }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.label}
              </div>
            ))}

            <div className="icons flex justify-end items-end ml-[540px]">
              <FontAwesomeIcon icon={faInfoCircle} />
              <FontAwesomeIcon icon={faEllipsisVertical} className="ml-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg mx-5 p-6 mt-5 h-[85vh]">
        <p className="text-zinc-600 text-3xl mt-3 mb-6 ">
          All {activeTab.label}
        </p>
        {activeTab.content}
      </div>
    </>
  );
}
