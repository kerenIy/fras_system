import React, { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../../context/SessionProvider";
import axios from "../.././../api/url";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../@/components/ui/pagination";
const GET_STUDENTS = `Admin/ViewAllStudents`;

export default function Student() {
  const { token } = useContext(SessionContext);

  const formData = {
    sessionKey: token,
  };

  const [students, setStudents] = useState([
    {
      type: 0,
      name: "Loading Students",
      id: 3,
      timeCreated: "2024-03-11T13:54:47.44393+00:00",
      timeUpdated: "2024-03-11T13:54:47.44393+00:00",
    },
  ]);

  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response = await axios.post(GET_STUDENTS, formData, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        });

        const studentsArray = response.data.data;
        setStudents(studentsArray);
      } catch (err) {
        console.log(err);
      }
    };

    getAllStudents();
  }, [students]);

  const formatDate = (dateItem) => {
    const truncateString = dateItem.substring(0, dateItem.length - 22);
    return truncateString;
  };

  return (
    <>
      <div className="mt-5">
        <div className="flex justify-between items-center">
          <p className="text-zinc-600 ml-6 mt-10 font-semibold text-3xl">
            All Students
          </p>

          <div className="flex justify-between items-center mr-8">
            <div className="border-2 mt-10 mr-8 py-0.5 px-8 rounded-full">
              <input type="text" placeholder="Search" className="text-xs" />
              <FontAwesomeIcon icon={faSearch} className="ml-8 text-xs" />
            </div>

            <div className="mt-10 bg-zinc-200 rounded-full py-1.5 px-3">
              <FontAwesomeIcon icon={faBell} />
            </div>

            {/* <div className="rounded-full mt-10 ml-3">
                            <img src={user} alt="" className='admin-user'/>
                        </div> */}
          </div>
        </div>
        <Table className="mt-[4%] w-[90%] ml-[5%]">
          <TableHeader className="bg-[#525ceb85]">
            <TableRow>
              <TableHead className="">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Matric Number</TableHead>
              <TableHead>Passport</TableHead>
              <TableHead>Time Created</TableHead>
              <TableHead className="">Time Updated</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {students.map((item) => (
              <TableRow className="p-0 text-[10px] text-center border">
                <TableCell className="">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.matricNumber}</TableCell>
                <TableCell className="flex justify-center items-center capitalize px-6 text-center">
                  <img
                    src={item.photo}
                    className="rounded-full w-[40px] h-[40px]"
                  />
                </TableCell>
                <TableCell>{formatDate(item.timeCreated)}</TableCell>
                <TableCell className="">
                  {formatDate(item.timeUpdated)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="my-[2%] flex justify-end items-end mr-[5%]">
          <Pagination>
            <PaginationContent className="mt-[2%] text-xs flex justify-end items-end ">
              {/* <PaginationItem>
                            <PaginationPrevious href="#" className="px-2.5 py-1.5 text-[6px] text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100" />
                            </PaginationItem> */}

              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="px-3 py-1.5 text-xs  text-white bg-blue-600 border border-blue-600  rounded-md hover:bg-gray-100"
                >
                  1
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="px-2.5 py-1.5 text-xs   text-gray-700 bg-white border border-gray-300 rounded-md"
                >
                  2
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="px-2.5 py-1.5 text-xs  text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  3
                </PaginationLink>
              </PaginationItem>
              {/* <PaginationItem>
                            <PaginationNext href="#" className="px-2.5 py-1.5 text-xs  text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100" />
                            </PaginationItem> */}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
}
