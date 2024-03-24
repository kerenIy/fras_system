import React, { useState, useEffect, useContext, useRef } from "react";
import ActionBtn from "../global/ActionBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import axios from "../../../api/url";
import { SessionContext } from "../../../context/SessionProvider";
import { failure, success } from "../../../classes/Notifications";

import load from "../../../assets/dotss.gif";
import Loading from "../../global/Loading";

const REGISTER_LECTURER_URL = `/Admin/RegisterLecturer`;

export default function RegisterLecturer() {
  let message = "";
  const { token } = useContext(SessionContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [loading, setLoading] = useState(false);

  const firstRef = useRef();
  const lastRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const userRef = useRef();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = {
      sessionKey: token,
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
    };

    console.log(formData);

    try {
      const response = await axios.post(
        REGISTER_LECTURER_URL,
        formData,

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: true,
        }
      );
      setLoading(false);
      message = response.data.message;
      success(message);
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data) {
        message = err.response.data.errors[0];
      }
      failure(message);
    }
  };

  const [addSchedule, setAddSchedule] = useState(1);
  const [scheduleNo, setScheduleNo] = useState();

  const handleAddSchedule = () => {
    let number = scheduleNo + 1;
    setScheduleNo(number);

    setAddSchedule([
      ...addSchedule,
      <div className="mt-3">
        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
          Schedule {scheduleNo}
        </p>

        <input
          type="text"
          className="lect-input rounded-sm w-[100%]"
          placeholder="Add class schedule"
        />
      </div>,
    ]);
  };

  const [base64Image, setBase64Image] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setBase64Image(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="pl-1.5 text-black">
        <p className="text-2xl font-semibold mb-4">Register Lecturer</p>

        <div className="ml-4 flex justify-start items-start forms">
          <div className="text-xs text-zinc-600">
            <div className="flex ">
              <div className="">
                <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                  Lecturer First Name
                </p>

                <input
                  type="text"
                  className="lect-input rounded-sm w-40 text-zinc-600 text-xs font-light"
                  placeholder="e.g John"
                  ref={firstRef}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="ml-3">
                <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                  Lecturer Last Name
                </p>

                <input
                  type="text"
                  className="lect-input rounded-sm w-40 font-light"
                  placeholder="e.g Doe"
                  ref={lastRef}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3">
              <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                Email
              </p>

              <input
                type="text"
                className="lect-input rounded-sm w-[100%] font-light"
                placeholder="e.g. johndoe@gmail.com"
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex mt-3">
              <div className="">
                <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                  UserName
                </p>

                <input
                  type="text"
                  className="lect-input rounded-sm w-40 font-light"
                  placeholder="e.g. johnDoe24"
                  ref={userRef}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="ml-3">
                <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                  Password
                </p>

                <div className="flex justify-between items-center lect-input">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="e.g p@ssWord123"
                    className="ml-2 font-light"
                    ref={passwordRef}
                    value={password}
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="inline"
                    aria-label={
                      isPasswordVisible ? "Hide password" : "Show password"
                    }
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    <FontAwesomeIcon icon={faEyeSlash} className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex justify-center items-center"
              onClick={handleRegister}
            >
              <ActionBtn name="Register Lecturer" />
            </div>
          </div>
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
    </>
  );
}
