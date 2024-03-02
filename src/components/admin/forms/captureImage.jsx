import React, { useRef, useCallback } from 'react';
import Webcam from "react-webcam";

const WebcamCapture = () => {
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

 return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        height={200}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={220}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture</button>
    </div>
 );
};

export default WebcamCapture;
