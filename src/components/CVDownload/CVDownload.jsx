import React from "react";
import { FaFileDownload } from "react-icons/fa";

function CVDownload() {
  const downloadCV = () => {
    // Define the CV file URL (since you're using Vite and the file is in the public directory)
    const cvURL = "/Evans_resume.pdf";

    // Create an anchor element to trigger the download
    const anchor = document.createElement("a");
    anchor.href = cvURL;
    anchor.download = "Evans_resume.pdf"; // The name you want the downloaded file to have
    anchor.style.display = "none";

    // Append the anchor to the body and trigger a click event
    document.body.appendChild(anchor);
    anchor.click();

    // Clean up
    document.body.removeChild(anchor);
  };

  return (
    <div onClick={downloadCV} style={{ cursor: "pointer" }}>
      <FaFileDownload className="cv-container"></FaFileDownload>
    </div>
  );
}

export default CVDownload;
