import React, {useState, useEffect, useContext, useCallback, useRef} from 'react'
import ActionBtn from '../global/ActionBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

import { StudentContext } from '../../../context/StudentProvider';
import { SessionContext } from '../../../context/SessionProvider';

import axios from '../../../api/url'
import { failure, success } from '../../../classes/Notifications';

const REGISTER_STUDENT = `/Admin/RegisterStudent`

const WebcamCapture = ({student}) => {

  const {formData} = useContext(StudentContext)
  const {token} = useContext(SessionContext)

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

  let item = 0

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

  //  console.log(images)


  const handleSubmit = async () =>{

    // fetchAndConvertToBlob(passport)


    let message = ""
    formData.SessionKey = token;
    formData.Passport = blobData;
    console.log(formData)



    try{
      const response = await axios.post(
        REGISTER_STUDENT,
        formData,
        {
          headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "multipart/form-data",
          },
          withCredentials: true,
      }
      );

      message = "Student Registered Successfully",
      success(message)
      console.log(response.data.data)

    }

    catch(err){
      console.log(err)
      message = "Failed to Register Student. Try Again!"
      failure(message)
    }

  }

 return (
  <div className="pl-1.5 text-black">
  <p className='text-center text-2xl font-semibold '>Register Student</p>
  <p className='text-center text-sm text-zinc-400 mb-4'>Capture Student's Biometric Data</p>
  
  <div className="ml-[70px] flex justify-start items-start forms">
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
                      <div className='capitalize text-center  text-[#525CEB] font-medium text-sm py-4' onClick={capture}>Capture image</div>
              </div>
          </label>
      </div>

     <div className="flex justify-between items-center">
      <p className='text-center text-sm'>{direction}</p>
        <div className="flex justify-end items-end">
          {number} of 4
        </div>
     </div>

          

      {
        isComplete?
          <button className="w-[100%} text-center admin-btn py-1.5 px-7 font-light rounded-sm text-sm capitalize mt-4" onClick={handleSubmit}>
            {/* <Link to={props.link}>{props.name}</Link> */}
            Submit
          </button>
        :
          <p className="w-[100%] text-center not-complete-btn py-1.5 px-7 font-light rounded-sm text-sm capitalize mt-4" onClick={handleSubmit}>
              {/* <Link to={props.link}>{props.name}</Link> */}
              Submit
          </p>
      }
      </div>
  </div>
</div>
 );
};

export default WebcamCapture;
