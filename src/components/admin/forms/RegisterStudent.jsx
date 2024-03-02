import React, {useState, useEffect, useContext, useCallback, useRef} from 'react'
import ActionBtn from '../global/ActionBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import Webcam from 'react-webcam';

export default function RegisterStudent() {
    const webcamRef = useRef(null);


    const capture = useCallback(() => {
       const imageSrc = webcamRef.current.getScreenshot();
       // Create a link element
       const link = document.createElement('a');
       link.href = imageSrc;
       link.download = 'capturedImage.jpeg'; // Set the file name
       // Append the link to the body
       document.body.appendChild(link);
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


    const [addSchedule, setAddSchedule] = useState(1);
    const [scheduleNo, setScheduleNo] = useState();

    const videoRef = useRef(null)
    const [stream, setStream] = useState(null)


    // useEffect(() => {
    //     navigator.mediaDevices.getUserMedia({ video: true })
    //       .then(stream => {
    //         setStream(stream);
    //         if (videoRef.current) {
    //           videoRef.current.srcObject = stream;
    //           videoRef.current.onloadedmetadata = (e) => videoRef.current.play();
    //         }
    //       })
    //       .catch(err => {
    //         console.error("An error occurred: " + err);
    //       });
    
    //     return () => {
    //       if (stream) {
    //         stream.getTracks().forEach(track => track.stop());
    //       }
    //     };
    //  }, []);
    
    // const captureImage = () => {
    //     const canvas = document.createElement('canvas');
    //     canvas.width = videoRef.current.videoWidth;
    //     canvas.height = videoRef.current.videoHeight;
    //     const ctx = canvas.getContext('2d');
    //     ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    //     const imageDataUrl = canvas.toDataURL('image/png');
    //     // Now you can use imageDataUrl as the source of an img element or send it to a server
    //  };

    const handleAddSchedule = () =>{
        let number = scheduleNo + 1;
        setScheduleNo(number);

        setAddSchedule(
            [
                ...addSchedule,
                <div className="mt-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                           Schedule {scheduleNo}
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-[100%]' placeholder='Add class schedule'/>
                </div>,
            ]
        )
    }

    const [base64Image, setBase64Image] = useState('');

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
            <p className='text-2xl font-semibold mb-4'>Register Student</p>
            
            <div className="ml-4 flex justify-start items-start forms">
                <div className="text-xs text-zinc-600">
                <div>
                    <label htmlFor="file-upload" className='flex justify-center items-center custom-file-upload'>
                        <div className="">
                            {/* <div className="image-placeholder">
                                {base64Image ? (
                                    <img src={base64Image} alt="Profile" className='selected-profile'/>
                                ) : (
                                    <>
                                        <div className="flex justify-center rounded-lg items-center text-white bg-gray-200 p-3 w-[100px] h-[100px] ml-4">
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                    </>
                                )}
                            </div> */}
                                <div className="webcam-container">
                                    <Webcam
                                        audio={false}
                                        height={200}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                        width={220}
                                        videoConstraints={videoConstraints}
                                    />
                                    {/* <button onClick={capture}>Capture</button> */}
                                </div>
                            <div className='capitalize text-center  text-sm py-4' onClick={capture}>Capture image</div>
                        </div>
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                        accept="image/*"
                        className=''
                     />
                    </div>
                    <div className="flex mt-3">
                    <div className="">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Student Name
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-40 text-zinc-600 text-xs font-light' placeholder='e.g John Doe'/>
                    </div>

                    <div className="ml-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Matric No.
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-40 font-light' placeholder='e.g 20/0302'/>
                    </div>
                    </div>

                    <div className="mt-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Faculty
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-[100%] font-light' placeholder='e.g Computing and Engineering Sciences'/>
                    </div>


                    <div className="flex mt-3">
                        <div className="">
                            <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                                Level 
                            </p>
                        
                            <input type="text" className='lect-input rounded-sm w-40 font-light'placeholder='e.g. 400L'/>
                        </div>

                        <div className="ml-3">
                            <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                                Department
                            </p>
                        
                            <input type="text" className='lect-input rounded-sm w-40 font-light' placeholder='e.g. Software Engineering'/>
                        </div>
                    </div>
                    
                    
                    {/* <div className="mt-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                           Schedule 1
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-[100%]' placeholder='Add class schedule'/>
                    </div> */}

                    {/* {addSchedule} */}
{/* 
                    <div className="flex justify-end items-end my-5">
                        <p className='text-xxs mr-2'>Add Another Schedule </p>
                        <button className='bg-green-500 text-white rounded-full text-sm px-1.5' onClick={handleAddSchedule}>
                            +
                        </button>
                    </div> */}

                    

                    <div className="flex justify-center items-center">
                        <ActionBtn name='Register Student' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}