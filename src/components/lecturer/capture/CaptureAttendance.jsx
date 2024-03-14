import React, {useState, useEffect, useContext, useRef, useCallback} from 'react'
import GreenBtn from '../global/GreenBtn';

import axios from "../../../api/url"
const CAPTURE_ATTENDANCE = `Lecturer/CaptureAttendance`

import { SessionContext } from '../../../context/SessionProvider';
import { failure, success } from '../../../classes/Notifications';

import Webcam from 'react-webcam';
import { useClass } from '../../../context/ClassProvider';


export default function CaptureAttendance() {
    
    const {token} = useContext(SessionContext)
    const  {classID} = useClass()

    
    const directions =[
      {
        id: 1,
        text : 'Place face at the center',
      },
      {
        id: 2,
        text : 'Move face to the left',
      },
      {
        id: 3,
        text : 'Move face to the right',
      },
      {
        id: 4,
        text : 'Place face at the center',
      },

    ];

    let item =0 

    const [direction, setDirections] = useState(directions[item].text)
    const [number, setNumber] = useState(1)
   
    const [passport, setPassport] = useState("")
   
    const [isComplete, setIsComplete] = useState(false)
    const [imageBlob, setImageBlob] = useState(null)
   
    
    const webcamRef = useRef(null);
   
    
    const [blobData, setBlobData] = useState(null);
   
   
    const fetchAndConvertToBlob = async (image) => {
    try {
        const response = await fetch(image);
        const blobData = await response.blob();
        setBlobData(blobData); // Store the blob data in state
    } catch (error) {
        console.error("Error fetching image:", error);
    }
    };
   
   
    const capture = useCallback(() => {
       if(item < 4){
         item= item + 1;
         setDirections(directions[item].text)
         setNumber(item + 1)
       }
       else {
         setDirections('Complete')
         setIsComplete(true)
       }
   
       // setItem(item)
   
       
       const imageSrc = webcamRef.current.getScreenshot();
       fetchAndConvertToBlob(imageSrc)
       let message = "Image Taken"
       success(message)
       // setPassport(imageSrc)
       // formData.passport = imageSrc
       // Create a link element
       // const link = document.createElement('a');
       // link.href = imageSrc;
       // link.download = 'capturedImage.jpeg'; // Set the file name
       // // Append the link to the body
       // document.body.appendChild(link);
       // Simulate click to download the image
       link.click();
       // Remove the link from the body
       document.body.removeChild(link);
      }, [webcamRef]);
   
     const videoConstraints = {
         width: 220,
         height: 200,
         facingMode: "user"
     };
   

    const [matric, setMatric] = useState("")
    // const [courseID, setCourseID] = useState("")

    const matricRef = useRef()
    const courseRef = useRef() 

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const formData = {
            SessionKey: token,
            MatricNo: matric,
            AttendancePicture: blobData,
            CourseID: classID,
            Remarks: "Present"
        }

        console.log(formData)
         
        let message = ``

        try{
            const response = await axios.post(CAPTURE_ATTENDANCE, formData,{
                
              headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "multipart/form-data",
                },
                withCredentials: true,
                
            })
            message = "Attendance Captured Successfully"
            console.log(response)
            success(message)
        }
        catch(err){
            console.log(err)
            message = "Failed to Capture Attendance"
            failure(message)
        }

    }

  return (
    <>
        <div className="pl-1.5 text-black">
            <p className='text-2xl font-semibold'>Capture Attendance</p>
            
            <div className="ml-5 flex justify-center items-center forms">
            
                <div className="text-xs text-zinc-600">

                <div>
                        <label htmlFor="file-upload" className='flex justify-center items-center custom-file-upload'>
                            <div className="">
                                    <div className="webcam-container">
                                        <Webcam
                                            audio={false}
                                            height={200}
                                            ref={webcamRef}
                                            screenshotFormat="image/jpeg"
                                            width={220}
                                            videoConstraints={videoConstraints}
                                        />
                                    </div>
                                    <div className='capitalize text-center  gren-color font-medium text-sm py-4' onClick={capture}>Capture image</div>
                            </div>
                        </label>
            </div>
                    <div className="flex mt-3">
                    <div className="">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Matric Number
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-40 text-zinc-600 text-xs font-light' placeholder='e.g 20/1223' ref={matricRef} onChange={((e) => setMatric(e.target.value))}/>
                    </div>

                    {/* <div className="ml-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Course ID
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-40 font-light' placeholder='e.g Late' ref={courseRef} onChange={((e) => setCourseID(e.target.value))}/>
                    </div> */}

                    </div>

                    <div className="mt-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                        Remarks
                        </p>
                        
                        <input 
                            type="text" 
                            className='lect-input rounded-sm w-[100%] font-light' 
                            placeholder='e.g Software Quality and Testing'
                            // ref={nameRef}
                            // onChange={((e) => set(e.target.value))}
                        />
                    </div>

                    

                    <div className="flex mt-10" onClick={handleSubmit}>
                        <GreenBtn name='Capture Attendance' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}