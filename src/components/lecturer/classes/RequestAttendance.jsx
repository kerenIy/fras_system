import { useScroll } from "framer-motion";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

import { SessionContext } from "../../../context/SessionProvider";
import { useClass } from "../../../context/ClassProvider";
import { useContext } from "react";

import Loading from "../../global/Loading";
import load from "../../../assets/dotss.gif";

const VIEW_ATTENDANCE = `/Lecturer/VIewAttendanceByDate`;
import axios from "../../../api/url";
import { failure, success } from "../../../classes/Notifications";

export default function RequestAttendance() {
  const { token } = useContext(SessionContext);
  const { classID } = useClass();

  const [loading, setLoading] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const startDateRef = useRef();
  const endDateRef = useRef();

  const handleRequest = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      SessionKey: token,
      StartDate: startDate,
      EndDate: endDate,
      CourseID: classID,
    };

    console.log(formData);

    try {
      const response = await axios.post(VIEW_ATTENDANCE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "multipart/form-data",
        },
        credentials: true,
      });
      setLoading(false);
      console.log(response.data.data);
      let message = "";
      message = response.data.message;
      success(message);
    } catch (err) {
      setLoading(false);
      let message = "";
      if (err.response && err.response.data) {
        message = err.response.data.errors[0];
      }
      // if (err.response && err.response.status == 400) {
      //   message = "Invalid Username or Password";
      // }
      failure(message);
    }
  };
  return (
    <div>
      <div className="forms">
        <label htmlFor="Start Date">Start Date</label>
        <input
          type="date"
          placeholder="e.g. YYYY-MM-DD"
          className="gray-bd p-[1%] w-[39%] my-[1%] ml-2 rounded-md text-sm"
          ref={startDateRef}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <br />

        <label htmlFor="End Date">End Date</label>
        <input
          type="date"
          placeholder="e.g. YYYY-MM-DD"
          className="gray-bd p-[1%] my-[1%] w-[39%] ml-4 rounded-md text-sm"
          ref={endDateRef}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <br />

        <button
          className="bg-red-400 ml-[21%] w-[39%] mt-4 p-[1%] rounded-md text-white text-sm"
          onClick={handleRequest}
        >
          Request
        </button>
      </div>

      {loading && (
        <div className="load-popup">
          <div className="load-content">
            <div className="flex justify-end items-end">
              {/* <FontAwesomeIcon icon={faX} className='text-black w-3 h-3' onClick={handleClosePopup}/> */}
            </div>

            <div className="flex justify-center items-center">
              <Loading img={load} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
