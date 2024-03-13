import { useContext, useEffect, useState } from "react"
import axios from "../../../api/url"
const VIEW_LOGS = `Admin/ViewLogs`

import { SessionContext } from "../../../context/SessionProvider"
const {token} = useContext(SessionContext)

const [activity, setActivities] = useState({})

useEffect(() =>{
    const getAllLogs = async () =>{
        try{
            const response = await axios.post(VIEW_LOGS, 
                {
                sessionKey: token,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                      },
                      credentials: true,
            })
            console.log(response)
        }
        catch(err){
            console.log(err)
        }
    }

    getAllLogs()
}, activities)

export const activities = activity;
// export const activities = [
//     {
//         number: 1,
//         id: '#1234',
//         name: 'Added new student to Facier',
//         date: '23/02/24',
//         status: 'completed',

//     },
//     {
//         number: 2,
//         id: '#1345',
//         name: 'Removed department from Facier',
//         date: '12/03/24',
//         status: 'completed',

//     },
//     {
//         number: 3,
//         id: '#1456',
//         name: 'Updated profile information ',
//         date: '12/04/24',
//         status: 'completed',

//     },
//     {
//         number: 4,
//         id: '#1456',
//         name: 'Added new student to Facier',
//         date: '01/03/24',
//         status: 'completed',

//     },
//     {
//         number: 5,
//         id: '#1456',
//         name: 'Added new department to Facier',
//         date: '31/01/24',
//         status: 'completed',

//     },
//     {
//         number: 6,
//         id: '#1456',
//         name: 'Added new department to Facier',
//         date: '31/01/24',
//         status: 'completed',

//     },
// ]