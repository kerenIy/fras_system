import React, { useContext, useEffect, useState } from 'react'
import CardItem from './CardItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

import { SessionContext } from '../../../context/SessionProvider'
import axios from '../.././../api/url'

const GET_STUDENTS = `Admin/ViewAllStudents`
const GET_LECTURERS = `Admin/ViewAllLecturers`
const GET_CLASSES = `Admin/ViewAllClasses`

export default function Cards() {
  const {token} = useContext(SessionContext)

  const formData ={
    sessionKey: token,
  }

  const [students, setStudents] = useState(0)
  const [lecturers, setLecturers] = useState(0)
  const [classes, setClasses] = useState(0)

  useEffect(() =>{

    const getAllStudents = async () =>{
      try{
        const response = await axios.post(GET_STUDENTS, formData, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            withCredentials: true,
        })

        const studentsArray = response.data.data.length
        setStudents(studentsArray)
      }
      catch(err){
        console.log(err)
      }
    }

    getAllStudents()
  }, [students])
  

  useEffect(() =>{

    const getAllLecturers = async () =>{
      try{
        const response = await axios.post(GET_LECTURERS, formData, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            withCredentials: true,
        })

        const lecturerArray = response.data.data.length
        setLecturers(lecturerArray)
      }
      catch(err){
        console.log(err)
      }
    }

    getAllLecturers()
  }, [lecturers])

  useEffect(() =>{

    const getAllClasses = async () =>{
      try{
        const response = await axios.post(GET_CLASSES, formData, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            withCredentials: true,
        })

        const classesArray = response.data.data.length
        setStudents(classesArray)
      }
      catch(err){
        console.log(err)
      }
    }

    getAllClasses()
  }, [classes])

  return (
    <>
        <div className="mt-3">
            <p className='ml-6 mt-5 font-normal text-lg text-zinc-600'>Overview</p>
            <div className="flex card-container">
                <CardItem darker='card-two-darker' lighter='card-one-lighter' title='total students' cardIcon='card-icon rounded-full w-2 h-2' icon={faUser} figures={students} />
                <CardItem darker='card-one-darker' lighter='card-three-lighter' title='total lecturers'  cardIcon='card-icon2 rounded-full w-2 h-2' icon={faCoins} figures={lecturers} />
                <CardItem darker='card-one-darker' lighter='card-one-lighter' title='total departments'  cardIcon='card-icon2 rounded-full w-2 h-2' icon={faCalendarCheck} figures={classes}/>
            </div>
        </div>
    </>
  )
}
